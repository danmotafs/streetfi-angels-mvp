const merchants = [
  {
    id: 1,
    name: "Maria do Acarajé",
    city: "Salvador, Brazil",
    category: "Street Food",
    supporters: 124,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    story:
      "Traditional Bahian street vendor bringing local culture and handmade food to tourists and locals.",
  },
  {
    id: 2,
    name: "João da Tapioca",
    city: "Recife, Brazil",
    category: "Local Food",
    supporters: 89,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    story:
      "Family-owned street food business creating authentic tapioca recipes from Northeast Brazil.",
  },
  {
    id: 3,
    name: "Ana Artesanato",
    city: "Fortaleza, Brazil",
    category: "Handmade Crafts",
    supporters: 203,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    story:
      "Local artisan transforming regional identity into handmade cultural crafts.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
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
          <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105">
            Explore Merchants
          </button>

          <button className="rounded-2xl border border-white/20 px-6 py-4 font-semibold transition hover:bg-white/10">
            Become an Angel
          </button>
        </div>
      </section>

      {/* MERCHANT FEED */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
            Merchant Feed
          </p>

          <h2 className="text-4xl font-bold">
            Discover Local Stories
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {merchants.map((merchant) => (
            <div
              key={merchant.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition hover:-translate-y-1 hover:border-purple-500/40"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={merchant.image}
                  alt={merchant.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <div className="mb-2 inline-flex rounded-full bg-black/50 px-3 py-1 text-xs backdrop-blur">
                    {merchant.category}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {merchant.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <p className="text-sm text-zinc-400">
                  {merchant.city}
                </p>

                <p className="leading-relaxed text-zinc-300">
                  {merchant.story}
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="font-semibold text-pink-400">
                    {merchant.supporters} supporters
                  </span>

                  <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105">
                    Support
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-red-500 p-10 text-5xl">
  TESTE MERCHANT FEED
</div>
    </main>
  );
}
