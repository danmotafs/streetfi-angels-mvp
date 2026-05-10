"use client";

import Link from "next/link";

export default function MerchantFinanceProfile() {
  const merchantId = "1";

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <Link
        href={`/merchant/${merchantId}`}
        className="text-yellow-400 text-sm hover:text-yellow-300"
      >
        ← Back to Merchant
      </Link>

      <div className="mt-8 max-w-5xl">
        <p className="text-yellow-500 uppercase text-xs tracking-[0.3em]">
          SocialFi Financial Infrastructure
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Merchant Finance Profile
        </h1>

        <p className="text-zinc-300 mt-6 leading-8 text-lg">
          Financial intelligence layer designed to transform
          informal merchants into transparent and investable
          economic identities on Solana.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-14">
        <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
          <p className="text-zinc-500">Monthly Revenue</p>

          <h2 className="text-4xl font-bold mt-4 text-yellow-400">
            18.4 SOL
          </h2>
        </div>

        <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
          <p className="text-zinc-500">Investors</p>

          <h2 className="text-4xl font-bold mt-4 text-yellow-400">
            128
          </h2>
        </div>

        <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
          <p className="text-zinc-500">NFT Volume</p>

          <h2 className="text-4xl font-bold mt-4 text-yellow-400">
            34.8 SOL
          </h2>
        </div>

        <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
          <p className="text-zinc-500">Growth</p>

          <h2 className="text-4xl font-bold mt-4 text-yellow-400">
            +212%
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <div className="border border-zinc-800 rounded-3xl bg-zinc-950 p-8">
          <h2 className="text-4xl font-bold mb-8">
            Financial Transparency
          </h2>

          <div className="space-y-6">
            <div className="border border-zinc-800 rounded-2xl p-6">
              <div className="flex justify-between mb-3">
                <span className="text-zinc-400">
                  Equipment Expansion
                </span>

                <span className="text-yellow-400 font-bold">
                  42%
                </span>
              </div>

              <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[42%]" />
              </div>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6">
              <div className="flex justify-between mb-3">
                <span className="text-zinc-400">
                  Inventory Growth
                </span>

                <span className="text-yellow-400 font-bold">
                  67%
                </span>
              </div>

              <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[67%]" />
              </div>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6">
              <div className="flex justify-between mb-3">
                <span className="text-zinc-400">
                  Tourism Visibility
                </span>

                <span className="text-yellow-400 font-bold">
                  81%
                </span>
              </div>

              <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[81%]" />
              </div>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6">
              <div className="flex justify-between mb-3">
                <span className="text-zinc-400">
                  Community Engagement
                </span>

                <span className="text-yellow-400 font-bold">
                  93%
                </span>
              </div>

              <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[93%]" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            Financial Identity
          </h2>

          <p className="text-zinc-400 leading-8 mt-6">
            StreetFi Angels creates an AI-powered financial
            identity layer for informal merchants.
          </p>

          <p className="text-zinc-400 leading-8 mt-6">
            Through NFTs, SocialFi mechanics and onchain
            participation, supporters can transparently
            contribute to merchant expansion while following
            growth metrics and economic impact.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="border border-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-500 text-sm">
                Ice Cream Sales
              </p>

              <h3 className="text-2xl font-bold mt-2">
                +87%
              </h3>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-500 text-sm">
                Community Reach
              </p>

              <h3 className="text-2xl font-bold mt-2">
                24K
              </h3>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-500 text-sm">
                Tourist Engagement
              </p>

              <h3 className="text-2xl font-bold mt-2">
                +140%
              </h3>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-500 text-sm">
                Onchain Reputation
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Verified
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}