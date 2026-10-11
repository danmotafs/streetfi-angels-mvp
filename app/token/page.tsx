'use client';

import { useState, useEffect, useRef } from 'react';
import liveToken from '../../data/community-token.json';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { base58 } from '@metaplex-foundation/umi/serializers';
import { publicKey, signTransaction } from '@metaplex-foundation/umi';
import { fetchMint } from '@metaplex-foundation/mpl-toolbox';
import { buildCommunityToken, tokenUmi, FOUNDER_WALLET, TOKEN_DECIMALS, TOKEN_NAME, TOKEN_SYMBOL, TOKEN_URI, type TokenNetwork } from '../../lib/communityToken';

const WalletButton = dynamic(() => import('@solana/wallet-adapter-react-ui').then(m => m.WalletMultiButton), { ssr: false });
type Prepared = ReturnType<typeof buildCommunityToken> & { umi: ReturnType<typeof tokenUmi>; network: TokenNetwork; supply: string; fixed: boolean; cost: number; wallet: string };
type Receipt = { mint: string; signature: string; network: TokenNetwork; supply: string; fixed: boolean; verified: boolean };
const receiptKey = 'streetfi-angels-token-receipt-v1';

export default function TokenPage() {
  const wallet = useWallet();
  const [network, setNetwork] = useState<TokenNetwork>('devnet');
  const [supply, setSupply] = useState('1000000');
  const [fixed, setFixed] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [prepared, setPrepared] = useState<Prepared | null>(null);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const lock = useRef(false);
  useEffect(() => {
    try { const saved = JSON.parse(localStorage.getItem(receiptKey) || 'null'); if (saved?.mint && saved?.signature && ['devnet','mainnet-beta'].includes(saved.network)) setReceipt({ ...saved, verified: false }); } catch {}
  }, []);
  useEffect(() => { setPrepared(null); setAccepted(false); }, [network, supply, fixed, wallet.publicKey?.toBase58()]);
  const founder = wallet.publicKey?.toBase58() === FOUNDER_WALLET;
  function umiFor(net: TokenNetwork) {
    return tokenUmi(`${window.location.origin}/api/solana-rpc?network=${net}`).use(walletAdapterIdentity(wallet));
  }
  function explorer(value: string, type: 'address' | 'tx', net: TokenNetwork) {
    return `https://explorer.solana.com/${type}/${value}${net === 'devnet' ? '?cluster=devnet' : ''}`;
  }
  async function preview() {
    if (lock.current) return;
    lock.current = true; setBusy(true); setPrepared(null);
    try {
      if (!founder) throw new Error('Connect the founder wallet shown below.');
      if (network === 'mainnet-beta') throw new Error('The official ANGELS token already exists on Mainnet. Use the published mint address.');
      if (receipt?.network === network) throw new Error('A creation receipt already exists for this network. Verify it before attempting another creation.');
      setStatus('Checking network, metadata and available balance…');
      const umi = umiFor(network);
      const genesis = await umi.rpc.getGenesisHash();
      const expected = 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG';
      if (genesis !== expected) throw new Error('RPC network mismatch.');
      const metadata = await fetch('/metadata/angels.json', { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error('Token metadata is not available.'); return r.json(); });
      if (metadata.name !== TOKEN_NAME || metadata.symbol !== TOKEN_SYMBOL) throw new Error('Token metadata mismatch.');
      const balance = await umi.rpc.getBalance(umi.identity.publicKey);
      const token = buildCommunityToken(umi, supply, fixed);
      const transaction = await token.builder.buildWithLatestBlockhash(umi);
      setStatus('Simulating creation, supply and authority changes. No wallet signature yet…');
      const simulation = await umi.rpc.simulateTransaction(transaction, { verifySignatures: false, accounts: [umi.identity.publicKey] });
      if (simulation.err) throw new Error(`Simulation failed: ${JSON.stringify(simulation.err)}. ${simulation.logs?.slice(-3).join(' ') || ''}`);
      const after = simulation.accounts?.[0]?.lamports;
      if (after === undefined) throw new Error('RPC did not return a cost estimate.');
      const cost = Math.max(0, Number(balance.basisPoints) - after) / 1e9;
      if (Number(balance.basisPoints) / 1e9 < cost + 0.001) throw new Error(`Keep at least ${(cost + 0.001).toFixed(6)} SOL available, including a fee reserve.`);
      setPrepared({ ...token, umi, network, supply, fixed, cost, wallet: wallet.publicKey!.toBase58() });
      setStatus('Simulation passed. Review the configuration before signing.');
    } catch (e) { setStatus(e instanceof Error ? e.message : String(e)); }
    finally { lock.current = false; setBusy(false); }
  }
  async function create() {
    if (!prepared || !accepted || lock.current) return;
    lock.current = true; setBusy(true);
    let pending: Receipt | null = null;
    try {
      if (!founder || wallet.publicKey?.toBase58() !== prepared.wallet || prepared.network !== network || prepared.supply !== supply || prepared.fixed !== fixed) throw new Error('Configuration changed; simulate again.');
      const umi = umiFor(network);
      // Refresh and simulate again immediately before asking for the wallet signature.
      const builder = await prepared.builder.setLatestBlockhash(umi);
      const unsigned = builder.build(umi);
      const sim = await umi.rpc.simulateTransaction(unsigned, { verifySignatures: false });
      if (sim.err) throw new Error(`Pre-sign simulation failed: ${JSON.stringify(sim.err)}`);
      setStatus('Review and approve the token creation transaction in Phantom.');
      const signed = await signTransaction(unsigned, builder.getSigners(umi));
      const signature = base58.deserialize(signed.signatures[0])[0];
      pending = { mint: prepared.mint.publicKey, signature, network, supply, fixed, verified: false };
      // Persist before sending: a timeout must never silently invite duplicate creation.
      localStorage.setItem(receiptKey, JSON.stringify(pending)); setReceipt(pending); setPrepared(null);
      setStatus('Sending signed transaction and waiting for confirmation…');
      await umi.rpc.sendTransaction(signed);
      // Confirm through HTTP polling; serverless RPC proxies do not expose WebSockets.
      let confirmed = false;
      for (let attempt = 0; attempt < 35; attempt++) {
        const [state] = await umi.rpc.getSignatureStatuses([signed.signatures[0]], { searchTransactionHistory: true });
        if (state?.error) throw new Error(`Transaction failed: ${JSON.stringify(state.error)}`);
        if (state?.commitment === 'confirmed' || state?.commitment === 'finalized') { confirmed = true; break; }
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      if (!confirmed) throw new Error('Confirmation timed out. Use the saved receipt to verify; do not create another token.');
      await verify(pending);
    } catch (e) { setStatus(`${e instanceof Error ? e.message : String(e)}${pending ? ' A receipt was saved. Check its transaction before retrying.' : ''}`); }
    finally { lock.current = false; setBusy(false); }
  }
  async function verify(item: Receipt) {
    const umi = umiFor(item.network);
    const [state] = await umi.rpc.getSignatureStatuses([base58.serialize(item.signature)], { searchTransactionHistory: true });
    if (!state || state.error || !['confirmed', 'finalized'].includes(state.commitment || '')) throw new Error('Creation transaction is not confirmed successfully yet. Check its explorer link.');
    const mint = await fetchMint(umi, publicKey(item.mint));
    if (mint.decimals !== TOKEN_DECIMALS || mint.supply !== BigInt(item.supply) * BigInt(10 ** TOKEN_DECIMALS) || mint.freezeAuthority.__option !== 'None' || (item.fixed && mint.mintAuthority.__option !== 'None')) throw new Error('Mint state does not match the creation configuration.');
    const verified = { ...item, verified: true };
    localStorage.setItem(receiptKey, JSON.stringify(verified)); setReceipt(verified);
    setStatus(item.network === 'mainnet-beta' ? 'Mainnet mint verified. Your token is live on Solana.' : 'Devnet mint verified. This is a test token.');
  }
  return <main className="min-h-screen bg-black text-white px-6 py-12">
    <div className="max-w-3xl mx-auto space-y-8">
      <Link href="/" className="text-amber-300">← StreetFi Angels</Link>
      <header><p className="text-amber-300 text-sm tracking-widest mb-3">COMMUNITY TOKEN • SOLANA</p><h1 className="text-4xl font-bold">StreetFi Angels / ANGELS</h1><p className="text-gray-300 mt-4">Create and verify the project's community token. Start on Devnet, then review a Mainnet transaction in your own wallet.</p></header>
      <section className="border border-amber-300 rounded-2xl p-6 space-y-4">
        <p className="text-amber-300 text-sm tracking-widest">LIVE ON SOLANA MAINNET</p>
        <h2 className="text-2xl font-bold">ANGELS is live</h2>
        <p>The official StreetFi Angels community token was verified on October 11, 2026. Anyone can inspect its mint without connecting a wallet.</p>
        <dl className="grid grid-cols-2 gap-4 text-sm"><div><dt className="text-gray-400">Total supply</dt><dd>1,000,000 ANGELS</dd></div><div><dt className="text-gray-400">Decimals</dt><dd>6</dd></div><div><dt className="text-gray-400">Mint authority</dt><dd>Removed — fixed supply</dd></div><div><dt className="text-gray-400">Freeze authority</dt><dd>Removed</dd></div></dl>
        <p className="break-all text-sm">Official mint: {liveToken.mint}</p>
        <a className="inline-block bg-amber-300 text-black font-bold rounded-lg px-5 py-3" href={explorer(liveToken.mint, 'address', 'mainnet-beta')} target="_blank" rel="noreferrer">Verify token on Solana Explorer</a>
        <p className="text-gray-400 text-sm">The full initial supply was minted to the founder wallet. Metadata remains editable. Community rewards, redemption and merchant support flows are still under development.</p>
      </section>
      <details className="border border-gray-700 rounded-2xl p-6">
        <summary className="cursor-pointer text-amber-300 font-bold">Founder tools / Devnet testing</summary>
      <section className="mt-6 space-y-4">
        <WalletButton />
        <p className="text-sm text-gray-400 break-all">Founder wallet: {FOUNDER_WALLET}</p>
        {wallet.connected && !founder && <p className="text-amber-300">This connected wallet cannot create the project token.</p>}
        <label className="block">Network<select disabled={busy} className="block bg-gray-900 p-3 rounded mt-2 w-full" value={network} onChange={e => setNetwork(e.target.value as TokenNetwork)}><option value="devnet">Devnet — test SOL</option><option value="mainnet-beta">Mainnet — real SOL</option></select></label>
        <label className="block">Initial supply (whole tokens)<input disabled={busy} className="block bg-gray-900 p-3 rounded mt-2 w-full" inputMode="numeric" value={supply} onChange={e => setSupply(e.target.value)} /></label>
        <p className="text-gray-400 text-sm">6 decimal places. The entire initial supply goes to the founder wallet. Allocation and reward distribution are not yet implemented.</p>
        <label className="flex gap-3 items-start"><input type="checkbox" disabled={busy} checked={fixed} onChange={e => setFixed(e.target.checked)} className="mt-1" /><span>Fix the supply permanently by removing the mint authority. This cannot be undone. If unchecked, the founder can issue more tokens.</span></label>
        <p className="text-sm text-gray-400">Freeze authority is removed. Metadata remains editable by the founder. Community rewards and redemption are planned; the token carries no equity or revenue rights.</p>
        <button disabled={busy || !founder || network === 'mainnet-beta' || receipt?.network === network} onClick={preview} className="bg-amber-300 text-black font-bold rounded-lg px-5 py-3 disabled:opacity-40">{busy ? 'Working…' : 'Simulate and review'}</button>
      </section>
      {prepared && <section className="border border-amber-300 rounded-2xl p-6 space-y-4"><h2 className="text-xl font-bold">Review before signing</h2><dl className="space-y-2"><div>Network: <strong>{prepared.network}</strong></div><div>Token: {TOKEN_NAME} ({TOKEN_SYMBOL})</div><div>Supply: {Number(prepared.supply).toLocaleString('en-US')}</div><div>Supply policy: {prepared.fixed ? 'Permanently fixed' : 'Additional issuance allowed'}</div><div>Estimated debit: <strong>{prepared.cost.toFixed(6)} SOL</strong> (simulation; final cost may vary)</div><div className="break-all text-sm">Mint address: {prepared.mint.publicKey}</div><div className="break-all text-sm">Metadata: {TOKEN_URI}</div></dl><label className="flex gap-3"><input type="checkbox" checked={accepted} onChange={e => setAccepted(e.target.checked)} /><span>I reviewed this configuration and the irreversible supply setting.</span></label><button disabled={!accepted || busy} onClick={create} className="bg-amber-300 text-black font-bold rounded-lg px-5 py-3 disabled:opacity-40">Sign creation in Phantom</button></section>}
      <p role="status" aria-live="polite" className="text-amber-200 break-words">{status}</p>
      {receipt && <section className="border border-gray-700 rounded-2xl p-6 space-y-4"><h2 className="text-xl font-bold">{receipt.verified ? 'Verified mint' : 'Saved receipt — verification required'}</h2><p>Network: {receipt.network}</p><p className="break-all">Mint: <a className="text-amber-300 underline" href={explorer(receipt.mint, 'address', receipt.network)} target="_blank" rel="noreferrer">{receipt.mint}</a></p><a className="text-amber-300 underline" href={explorer(receipt.signature, 'tx', receipt.network)} target="_blank" rel="noreferrer">View creation transaction</a><div><button disabled={busy} className="border border-gray-600 rounded px-4 py-2" onClick={async () => { setBusy(true); try { await verify(receipt); } catch (e) { setStatus(String(e)); } finally { setBusy(false); } }}>Verify onchain state</button></div><p className="text-sm text-gray-400">This receipt is saved in this browser. Preserve the mint address and transaction link. A Devnet receipt does not constitute a live Mainnet token.</p></section>}
      </details>
      <p className="text-gray-400 text-sm">Creating a token does not create a market price or liquidity. Support payments, reward logic and merchant pilots are separate milestones.</p>
    </div>
  </main>;
}
