"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function SupportEconomyPage() {
  const params = useParams();
  const merchantId = (params?.id as string) || "1";

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <button
        onClick={() => window.history.back()}
        className="text-yellow-400 text-sm hover:text-yellow-300 mb-8"
      >
        ← Back
      </button>

      <section className="max-w-5xl mb-12">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-4">
          SocialFi Support Infrastructure
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Support Economy
        </h1>

        <p className="text-zinc-300 text-lg leading-9 max-w-4xl">
          StreetFi Angels connects informal merchants, AI-generated digital
          identities and real-world commerce through Solana infrastructure.
          4PAY Finance acts as the bridge between crypto liquidity and everyday
          economic activity, enabling real merchants to receive transparent
          financial support in the real world.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border border-zinc-800 rounded-3xl p-8 bg-[#050505]">
          <p className="text-zinc-500 text-sm mb-3">Merchant Wallet</p>

          <h2 className="text-yellow-400 text-2xl font-bold mb-4">
            Solana Wallet
          </h2>

          <p className="text-zinc-400 text-sm break-all leading-7">
            7xChM9q3TA6kT3ExampleWalletHashStreetFi
          </p>

          <div className="mt-6 text-sm text-zinc-500">
            Connected to NFT collections and investor support pools.
          </div>
        </div>

        <div className="border border-zinc-800 rounded-3xl p-8 bg-[#050505] flex flex-col justify-between">
          <div>
            <p className="text-zinc-500 text-sm mb-3">
              Fiat-Crypto Infrastructure
            </p>

            <h2 className="text-yellow-400 text-2xl font-bold mb-6">
              4PAY Finance
            </h2>

            <p className="text-zinc-300 leading-7 text-sm">
              4PAY Finance converts onchain support into real-world merchant
              liquidity, allowing informal workers to access financial resources
              beyond traditional banking systems.
            </p>
          </div>

          <div className="mt-8">
            <img
              src="/images/4pay-logo.png"
              alt="4PAY Finance"
              className="h-14 object-contain"
            />
          </div>
        </div>

        <div className="border border-zinc-800 rounded-3xl p-8 bg-[#050505]">
          <p className="text-zinc-500 text-sm mb-3">Social Impact</p>

          <h2 className="text-yellow-400 text-2xl font-bold mb-6">
            Local Economy
          </h2>

          <p className="text-zinc-300 leading-7 text-sm">
            Every support transaction strengthens local commerce ecosystems,
            tourism dynamics and community entrepreneurship through transparent
            blockchain infrastructure.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="border border-zinc-800 rounded-xl px-4 py-3">
              <p className="text-zinc-500 text-xs">Investors</p>
              <p className="text-white text-xl font-bold">128</p>
            </div>

            <div className="border border-zinc-800 rounded-xl px-4 py-3">
              <p className="text-zinc-500 text-xs">Growth</p>
              <p className="text-yellow-400 text-xl font-bold">+212%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">
          How the Support Economy Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border border-zinc-800 rounded-3xl p-8 bg-[#050505]">
            <p className="text-yellow-400 text-xs tracking-[0.3em] mb-4">
              STEP 01
            </p>

            <h3 className="text-2xl font-bold mb-6">
              Merchant Digital Identity
            </h3>

            <p className="text-zinc-400 text-sm leading-7">
              StreetFi captures merchant identity through AI-generated content,
              NFTs, social profiles and digital storytelling infrastructure.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8 bg-[#050505]">
            <p className="text-yellow-400 text-xs tracking-[0.3em] mb-4">
              STEP 02
            </p>

            <h3 className="text-2xl font-bold mb-6">
              Community Support
            </h3>

            <p className="text-zinc-400 text-sm leading-7">
              Tourists, locals and angel supporters participate through Solana
              transactions, NFT purchases and SocialFi engagement.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8 bg-[#050505]">
            <p className="text-yellow-400 text-xs tracking-[0.3em] mb-4">
              STEP 03
            </p>

            <h3 className="text-2xl font-bold mb-6">
              4PAY Financial Bridge
            </h3>

            <p className="text-zinc-400 text-sm leading-7">
              4PAY Finance transforms crypto-based support into real financial
              accessibility for merchants operating in the informal economy.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8 bg-[#050505]">
            <p className="text-yellow-400 text-xs tracking-[0.3em] mb-4">
              STEP 04
            </p>

            <h3 className="text-2xl font-bold mb-6">
              Real Economic Impact
            </h3>

            <p className="text-zinc-400 text-sm leading-7">
              The result is a transparent and investable local economy connected
              to AI, tourism, blockchain infrastructure and real-world commerce.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href={`/merchant/${merchantId}/support-economy/nft-collections`}
          className="border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition"
        >
          <p className="text-yellow-400 text-xs tracking-[0.3em] mb-4">
            NFT ECOSYSTEM
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Explore NFT Collections
          </h2>

          <p className="text-zinc-400 leading-7">
            Access AI-generated NFTs connected to merchant identity, tourism,
            local culture and community participation.
          </p>
        </Link>

        <Link
          href={`/merchant/${merchantId}/support-economy/merchant-finance-profile`}
          className="border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition"
        >
          <p className="text-yellow-400 text-xs tracking-[0.3em] mb-4">
            FINANCIAL LAYER
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Merchant Finance Profile
          </h2>

          <p className="text-zinc-400 leading-7">
            Analyze SocialFi growth metrics, investor participation, NFT
            revenue, onchain activity and merchant economic expansion.
          </p>
        </Link>
      </section>
    </main>
  );
}