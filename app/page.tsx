export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
          SocialFi for the Real World
        </p>

        <h1 className="max-w-5xl text-6xl font-bold leading-tight">
          Support Real Street Entrepreneurs Through Solana
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-zinc-400">
          StreetFi Angels transforms informal merchants into
          investable digital identities using AI, SocialFi,
          and Solana.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-black">
            Explore Merchants
          </button>

          <button className="rounded-2xl border border-white/20 px-6 py-4 font-semibold">
            Become an Angel
          </button>
        </div>
      </section>
    </main>
  );
}
