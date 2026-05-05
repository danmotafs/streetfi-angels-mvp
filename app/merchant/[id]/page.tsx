export default function MerchantProfilePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
          alt="merchant"
          className="h-[500px] w-full rounded-3xl object-cover"
        />

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Street Merchant Profile
          </p>

          <h1 className="mt-4 text-6xl font-bold">
            Maria do Acarajé
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">
            Traditional Bahian street vendor bringing local
            culture and handmade food to tourists and locals.

            Her digital identity was created through
            StreetFi Angels using AI storytelling,
            SocialFi mechanics, and Solana infrastructure.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              Support Merchant
            </button>

            <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10">
              Share Profile
            </button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-sm text-zinc-400">
                Total Supporters
              </p>

              <h3 className="mt-3 text-4xl font-bold text-pink-400">
                124
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-sm text-zinc-400">
                City
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Salvador
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-sm text-zinc-400">
                Category
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Street Food
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
