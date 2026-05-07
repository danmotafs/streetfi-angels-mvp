"use client";

import Link from "next/link";
import Image from "next/image";

import {
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

        {/* HEADER */}
        <header className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="StreetFi Angels"
              width={90}
              height={90}
              className="rounded-xl"
            />
          </div>

          <div className="flex items-center gap-4">
            <WalletMultiButton />

            <Link
              href="/merchant/1"
              className="rounded-2xl border border-yellow-500/30 px-6 py-3 font-semibold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400/10"
            >
              View Demo Profile
            </Link>
          </div>
        </header>

        {/* HERO */}
        <div className="relative mt-24 grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-yellow-400">
              StreetFi Creation Flow
            </p>

            <h1 className="max-w-3xl text-6xl font-black leading-none tracking-tight md:text-7xl">
              Turn a local
              <br />
              merchant into
              <br />
              a{" "}
              <span className="text-yellow-400">
                digital asset.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-xl leading-relaxed text-zinc-400">
              Capture photos, audio and stories from
              real-world merchants. StreetFi Angels
              transforms local entrepreneurs into
              AI-powered digital identities, NFTs and
              social media brands using Solana.
            </p>

            <div className="mt-10">
              <WalletMultiButton />
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />

            <Image
              src="/images/NFT1.png"
              alt="StreetFi NFT"
              width={420}
              height={420}
              className="relative rounded-[32px] border border-yellow-500/20 shadow-2xl shadow-yellow-500/10"
            />
          </div>
        </div>

        {/* STEP 1 */}
        <section className="relative mt-32 rounded-[36px] border border-yellow-500/20 bg-zinc-950/80 p-10 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Step 1 — Raw Merchant Capture
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Upload merchant data
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Upload real-world merchant photos,
            product images, audio interviews and
            stories. This becomes the AI training
            material used to create the merchant’s
            digital identity and social assets.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
              <h3 className="text-xl font-bold">
                Merchant Photos
              </h3>

              <input
                type="file"
                multiple
                className="mt-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4"
              />
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
              <h3 className="text-xl font-bold">
                Product Photos
              </h3>

              <input
                type="file"
                multiple
                className="mt-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4"
              />
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
              <h3 className="text-xl font-bold">
                Audio Interview
              </h3>

              <input
                type="file"
                multiple
                className="mt-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4"
              />
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
              <h3 className="text-xl font-bold">
                Merchant Story
              </h3>

              <textarea
                rows={6}
                placeholder="Describe the merchant story..."
                className="mt-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4"
              />
            </div>
          </div>
        </section>

        {/* STEP 2 */}
        <section className="mt-24">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
                Step 2 — AI Conversion Layer
              </p>

              <h2 className="mt-4 text-5xl font-black">
                Generate digital assets
              </h2>
            </div>

            <button className="rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105">
              Run StreetFi AI Pipeline
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "AI Avatar",
              "NFT Collection",
              "Instagram Posts",
              "Jingle + Slogan",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8"
              >
                <div className="mb-6 h-14 w-14 rounded-2xl bg-yellow-400/10" />

                <h3 className="text-2xl font-bold">
                  {item}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  AI-generated asset powered by
                  merchant uploads and Solana
                  identity infrastructure.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section className="mt-32">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Featured Merchant
          </p>

          <h2 className="mt-4 text-6xl font-black">
            Real Stories.
            <br />
            Real Impact.
          </h2>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            {/* REAL */}
            <div className="overflow-hidden rounded-[36px] border border-yellow-500/20 bg-zinc-950">
              <div className="relative h-[500px]">
                <Image
                  src="/images/leo-real.jpg"
                  alt="Leo Real"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <div className="mb-4 inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black">
                    REAL MERCHANT
                  </div>

                  <h3 className="text-5xl font-black">
                    Léo do Picolé
                  </h3>

                  <p className="mt-4 text-lg text-zinc-300">
                    Barbalho • Salvador/BA
                  </p>
                </div>
              </div>

              <div className="p-8">
                <p className="leading-relaxed text-zinc-400">
                  Informal street vendor selling
                  handmade popsicles in Salvador.
                  StreetFi converts local stories into
                  digital economic opportunities.
                </p>

                <Link
                  href="/merchant/1"
                  className="mt-8 inline-flex rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:scale-105"
                >
                  View Merchant Profile
                </Link>
              </div>
            </div>

            {/* AI */}
            <div className="overflow-hidden rounded-[36px] border border-yellow-500/20 bg-zinc-950">
              <div className="relative h-[500px]">
                <Image
                  src="/images/leo-avatar-2.png"
                  alt="Leo AI"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <div className="mb-4 inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black">
                    AI DIGITAL TWIN
                  </div>

                  <h3 className="text-5xl font-black">
                    Léo Virtual Brand
                  </h3>

                  <p className="mt-4 text-lg text-zinc-300">
                    AI-powered creator identity
                  </p>
                </div>
              </div>

              <div className="p-8">
                <p className="leading-relaxed text-zinc-400">
                  AI-generated avatars, NFT
                  collections, slogans and Instagram
                  content powered by Solana.
                </p>

                <Link
                  href="/merchant/1"
                  className="mt-8 inline-flex rounded-2xl border border-yellow-500/30 px-6 py-4 font-bold text-yellow-400 transition hover:bg-yellow-400/10"
                >
                  Explore AI Assets
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
