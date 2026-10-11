import { NextRequest } from 'next/server';

const allowed = new Set(['getBalance','getAccountInfo','getMultipleAccounts','getLatestBlockhash','getBlockHeight','getGenesisHash','getMinimumBalanceForRentExemption','getFeeForMessage','simulateTransaction','sendTransaction','getSignatureStatuses','getTokenSupply','getTokenAccountsByOwner']);
export async function POST(request: NextRequest) {
  const network = request.nextUrl.searchParams.get('network');
  if (network !== 'devnet' && network !== 'mainnet-beta') return Response.json({ error: 'Unsupported network' }, { status: 400 });
  const origin = request.headers.get('origin');
  if (origin && origin !== request.nextUrl.origin) return Response.json({ error: 'Cross-origin requests are disabled' }, { status: 403 });
  const raw = await request.text();
  if (raw.length > 20000) return Response.json({ error: 'Request too large' }, { status: 413 });
  let body;
  try { body = JSON.parse(raw); } catch { return Response.json({ error: 'Invalid JSON' }, { status: 400 }); }
  if (!body || Array.isArray(body) || body.jsonrpc !== '2.0' || !allowed.has(body.method)) return Response.json({ error: 'Unsupported RPC method' }, { status: 400 });
  // Server-owned endpoints only; never accept an arbitrary upstream URL.
  const endpoint = network === 'devnet'
    ? (process.env.SOLANA_DEVNET_RPC_URL || 'https://api.devnet.solana.com')
    : (process.env.SOLANA_MAINNET_RPC_URL || 'https://api.mainnet-beta.solana.com');
  try {
    const upstream = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: raw, cache: 'no-store', signal: AbortSignal.timeout(20000) });
    return new Response(await upstream.text(), { status: upstream.status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  } catch { return Response.json({ jsonrpc: '2.0', id: body.id, error: { code: -32000, message: 'Solana RPC unavailable; try again later.' } }, { status: 502 }); }
}
