"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useWallet } from "@solana/wallet-adapter-react";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui"))
      .WalletMultiButton,
  {
    ssr: false,
  }
);

const nfts = [
  {
    id: 1,
    title: "StreetFi NFT #1",
    price: "0.50 SOL",
    image: "/images/NFT1.png",
  },
  {
    id: 2,
    title: "StreetFi NFT #2",
    price: "0.65 SOL",
    image: "/images/NFT2.png",
  },
  {
    id: 3,
    title: "StreetFi NFT #3",
    price: "0.80 SOL",
    image: "/images/NFT3.png",
  },
  {
    id: 4,
    title: "StreetFi NFT #4",
    price: "0.95 SOL",
    image: "/images/leo-avatar-2.png",
  },
  {
    id: 5,
    title: "StreetFi NFT #5",
    price: "1.10 SOL",
    image: "/images/leo-avatar-3.png",
  },
  {
    id: 6,
    title: "StreetFi NFT #6",
    price: "1.25 SOL",
    image: "/images/leo-avatar-5.png",
  },
  {
    id: 7,
    title: "StreetFi NFT #7",
    price: "1.40 SOL",
    image: "/images/leo-avatar-6.png",
  },
  {
    id: 8,
    title: "StreetFi NFT #8",
    price: "1.55 SOL",
    image: "/images/post-12.png",
  },
];

export default function NFTCollectionsPage() {
  const { connected, publicKey } = useWallet();

  const handleMint = async (title: string) => {
    if (!connected) {
      alert("Connect your wallet first.");
      return;
    }

    try {
      alert(`Mint initialized for ${title}`);
    } catch (error) {
      console.error(error);
      alert("Mint failed.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div>
          <Link
            href="/merchant/1"
            className="text-yellow-400 text-sm hover:text-yellow-300 transition"
          >
            ← Back to Merchant
          </Link>

          <p className="uppercase tracking-[0.3em] text-yellow-400 text-xs font-semibold mt-8">
            SocialFi NFT Infrastructure
          </p>

          <h1 className="text-5xl font-bold mt-3">
            NFT Collections
          </h1>

          <p className="text-zinc-300 mt-6 leading-relaxed max-w-3xl">
            StreetFi Angels transforms informal merchants into
            investable digital identities through AI-generated NFT
            ecosystems built on Solana.
          </p>

          <p className="text-zinc-500 mt-4 max-w-2xl">
            NFT sales can finance equipment, logistics, expansion,
            inventory and merchant visibility.
          </p>
        </div>

        {/* WALLET */}
        <div className="flex flex-col items-end gap-4">
          <WalletMultiButtonDynamic />

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 w-[320px]">
            <p className="text-xs text-zinc-500">
              Connected Wallet
            </p>

            <p className="text-yellow-400 text-sm mt-2 break-all">
              {connected
                ? publicKey?.toBase58()
                : "Wallet not connected"}
            </p>
          </div>
        </div>
      </div>

      {/* NFT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-yellow-400 transition duration-300 group"
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-square overflow-hidden bg-zinc-900">
              <Image
                src={nft.image}
                alt={nft.title}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       25vw"
                className="object-cover group-hover:scale-105 transition duration-500"
                priority
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-2xl font-bold">
                {nft.title}
              </h2>

              <p className="text-zinc-500 text-sm mt-3 leading-relaxed min-h-[48px]">
                AI-generated collectible connected to merchant
                identity and SocialFi growth.
              </p>

              <div className="flex items-center justify-between mt-6">
                <span className="text-yellow-400 font-bold text-lg">
                  {nft.price}
                </span>

                <button
                  onClick={() => handleMint(nft.title)}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-yellow-300 transition duration-300 active:scale-95"
                >
                  Mint NFT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}