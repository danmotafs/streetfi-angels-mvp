"use client";

import Link from "next/link";

import { useWallet } from "@solana/wallet-adapter-react";

export default function HomePage() {
  const {
    connected,
    publicKey,
    connect,
    disconnect,
  } = useWallet();

  async function handleWallet() {
    try {
      if (connected) {
        await disconnect();
      } else {
        await connect();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

        {/* HEADER */}
        <header className="relative flex items-center justify-between">
          <img
            src="/images/logo.png"
            alt="StreetFi Angels"
            className="w-40"
          />

          <div className="flex items-center gap-4">
            {/* WALLET BUTTON */}
            <button
              onClick={handleWallet}
              className="rounded-2xl bg-yellow-400 px-5 py-3 font-black text-black transition hover:scale-105"
            >
              {connected
                ? `${publicKey?.toString().slice(0, 4)}...${publicKey
                    ?.toString()
                    .slice(-4)}`
                : "Connect Phantom"}
            </button>

            <Link
              href="/merchant/1"
              className="rounded-2xl border border-yellow-400/30 px-5 py-3 font-bold text-yellow-300 transition hover:bg-yellow-400/10"
            >
              View Demo Profile
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              StreetFi Creation Flow
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Turn a local merchant into a{" "}
              <span className="text-yellow-400">
                digital asset.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Capture photos, audio and stories from real-world merchants.
              StreetFi Angels transforms local entrepreneurs into AI-powered
              digital identities, NFTs and social media brands using Solana.
            </p>

            {/* SECOND BUTTON */}
            <div className="mt-10">
              <button
                onClick={handleWallet}
                className="rounded-2xl bg-yellow-400 px-6 py-4 text-lg font-black text-black transition hover:scale-105"
              >
                {connected
                  ? "Wallet Connected"
                  : "Connect Phantom Wallet"}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-3xl" />

            <img
              src="/images/NFT1.png"
              alt="StreetFi NFT"
              className="relative mx-auto w-[380px]"
            />
          </div>
        </section>

        {/* STEP 1 */}
        <section className="relative rounded-[36px] border border-yellow-500/20 bg-zinc-950 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Step 1 — Raw Merchant Capture
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Upload merchant data
          </h2>

          <p className="mt-4 max-w-3xl text-zinc-400">
            Capture real-world merchant material that will be transformed into
            AI-generated assets and digital profiles.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Merchant Photos */}
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="mb-3 font-bold text-yellow-400">
                Merchant Photos
              </p>

              <input
                type="file"
                multiple
                className="w-full rounded-xl border border-white/10 bg-black p-3 text-sm"
              />
            </div>

            {/* Product Photos */}
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="mb-3 font-bold text-yellow-400">
                Product Photos
              </p>

              <input
                type="file"
                multiple
                className="w-full rounded-xl border border-white/10 bg-black p-3 text-sm"
              />
            </div>

            {/* Audio */}
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="mb-3 font-bold text-yellow-400">
                Audio Notes
              </p>

              <input
                type="file"
                accept="audio/*"
                className="w-full rounded-xl border border-white/10 bg-black p-3 text-sm"
              />
            </div>

            {/* Story */}
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="mb-3 font-bold text-yellow-400">
                Merchant Story
              </p>

              <textarea
                placeholder="Describe who this merchant is and why they matter to the community..."
                className="h-32 w-full rounded-xl border border-white/10 bg-black p-3 text-sm text-white"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-yellow-500/20 bg-black p-6">
              <p className="text-sm text-zinc-500">
                Merchant Name
              </p>

              <p className="mt-2 text-2xl font-black">
                Léo do Picolé
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-black p-6">
              <p className="text-sm text-zinc-500">
                Main Activity Area
              </p>

              <p className="mt-2 text-2xl font-black">
                Barbalho
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-black p-6">
              <p className="text-sm text-zinc-500">
                City
              </p>

              <p className="mt-2 text-2xl font-black">
                Salvador / BA
              </p>
            </div>
          </div>

          <Link
            href="/merchant/1"
            className="mt-10 inline-flex rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black transition hover:scale-105"
          >
            Generate AI Merchant Profile
          </Link>
        </section>
      </section>
    </main>
  );
}
