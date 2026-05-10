"use client";

import Link from "next/link";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { nftCollection } from "../../../../../data/nfts";

export default function NFTCollectionsPage() {
  const [mintingId, setMintingId] = useState<number | null>(null);
  const [mintedNFT, setMintedNFT] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  const handleMint = async (nft: any) => {
    try {
      setMintingId(nft.id);

      await new Promise((resolve) => setTimeout(resolve, 2200));

      const fakeTx =
        "5Yx7aP9kLm2QvR8wTn3zXoSolanaDevnetTxHash";

      setTxHash(fakeTx);

      setMintedNFT(nft.name);

      setMintingId(null);
    } catch (error) {
      console.error(error);

      setMintingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
        <div>
          <Link
            href="/merchant/1"
            className="text-yellow-400 text-sm hover:text-yellow-300 transition"
          >
            ← Back to Merchant
          </Link>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mt-8 mb-3">
            SocialFi NFT Infrastructure
          </p>

          <h1 className="text-5xl font-black mb-6">
            NFT Collections
          </h1>

          <p className="text-zinc-300 max-w-3xl leading-relaxed">
            StreetFi Angels transforms informal merchants into
            investable digital identities through AI-generated NFT
            ecosystems built on Solana.
          </p>

          <p className="text-zinc-500 mt-4 max-w-2xl">
            NFT sales can finance equipment, logistics,
            expansion, inventory and merchant visibility.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <WalletMultiButton />

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 w-[320px]">
            <p className="text-xs text-zinc-500 mb-2">
              Connected Wallet
            </p>

            <p className="text-yellow-400 text-sm break-all">
              DPYVjGfLpoAzAdZLV82vQXGWkzwacdJUidXhjsF2R
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {nftCollection.map((nft) => (
          <div
            key={nft.id}
            className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">
                {nft.name}
              </h2>

              <p className="text-zinc-400 text-sm mb-6">
                {nft.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-bold">
                  {nft.price} SOL
                </span>

                <button
                  onClick={() => handleMint(nft)}
                  disabled={mintingId === nft.id}
                  className="bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-700 disabled:cursor-not-allowed text-black text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300"
                >
                  {mintingId === nft.id
                    ? "Minting..."
                    : "Mint NFT"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mintedNFT && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-zinc-950 border border-yellow-500 rounded-3xl p-8 w-full max-w-[420px] text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400 flex items-center justify-center mx-auto mb-6">
              <span className="text-yellow-400 text-3xl">
                ✨
              </span>
            </div>

            <h2 className="text-4xl font-black mb-4 leading-tight">
              NFT Minted Successfully
            </h2>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              {mintedNFT} was successfully minted on
              Solana Devnet.
            </p>

            <div className="bg-black border border-zinc-800 rounded-2xl p-4 mb-6 text-left">
              <p className="text-xs text-zinc-500 mb-2">
                Transaction
              </p>

              <p className="text-yellow-400 text-sm break-all">
                {txHash}
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://solscan.io/tx/${txHash}?cluster=devnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-2xl transition"
              >
                View on Solscan
              </a>

              <button
                onClick={() => {
                  setMintedNFT(null);
                  setTxHash(null);
                }}
                className="flex-1 border border-zinc-700 hover:border-zinc-500 text-white font-bold py-3 rounded-2xl transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}