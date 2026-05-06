import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

        <header className="relative flex items-center justify-between">
          <img src="/images/logo.png" alt="StreetFi Angels" className="w-40" />

          <Link
            href="/merchant/1"
            className="rounded-2xl border border-yellow-400/30 px-5 py-3 font-bold text-yellow-300 hover:bg-yellow-400/10"
          >
            View Demo Profile
          </Link>
        </header>

        <section className="relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              StreetFi Creation Flow
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Turn a local merchant into a{" "}
              <span className="text-yellow-400">digital asset.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Capture photos, voice notes and a short story from a real street
              merchant. StreetFi Angels converts that raw material into an AI
              identity, avatars, NFTs, slogans and social media content.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-3xl" />
            <img src="/images/token.png" alt="StreetFi Token" className="relative mx-auto w-[360px]" />
          </div>
        </section>

        {/* STEP 1 */}
        <section className="relative rounded-[36px] border border-yellow-500/20 bg-zinc-950 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Step 1 — Raw Merchant Capture
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Upload the real-world merchant material
          </h2>

          <p className="mt-4 max-w-3xl text-zinc-400">
            This is where an Angel captures the first layer of value: photos,
            audio and a short human story about the merchant.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="mb-3 font-bold text-yellow-400">Merchant Photos</p>
              <input type="file" multiple className="w-full rounded-xl border border-white/10 bg-black p-3 text-sm" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="mb-3 font-bold text-yellow-400">Audio Notes</p>
              <input type="file" accept="audio/*" className="w-full rounded-xl border border-white/10 bg-black p-3 text-sm" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="mb-3 font-bold text-yellow-400">Short Story</p>
              <textarea
                placeholder="Tell us who this merchant is, what they sell and why people should support them..."
                className="h-32 w-full rounded-xl border border-white/10 bg-black p-3 text-sm text-white"
              />
            </div>
          </div>

          <Link
            href="/merchant/1"
            className="mt-8 inline-flex rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black transition hover:scale-105"
          >
            Generate Merchant Profile
          </Link>
        </section>

        {/* STEP 2 */}
        <section className="relative mt-16 grid gap-8 md:grid-cols-4">
          {[
            ["AI Avatar", "Convert real photos into digital characters."],
            ["NFT Profile", "Mint the merchant identity as a collectible asset."],
            ["Jingle / Slogan", "Create a memorable brand hook for social media."],
            ["AI Posts", "Generate content for Instagram and community growth."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-yellow-500/10 bg-zinc-900 p-6">
              <p className="text-xl font-black text-yellow-400">{title}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{text}</p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
