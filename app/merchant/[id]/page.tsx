const merchant = {
  name: "Léo do Barbalho",
  city: "Salvador, Brazil",
  category: "Street Vendor",
  supporters: 124,
  image: "/images/leo-real.jpg",
  avatar: "/images/leo-avatar-1.png",
  story:
    "Léo works daily in the streets of Salvador selling frozen treats and supporting his family through informal entrepreneurship. StreetFi Angels transforms his real-world hustle into a digital investment identity powered by Solana.",
};

export default function MerchantProfile() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-[32px] border border-yellow-500/20 bg-zinc-900">
          <img
            src={merchant.image}
            alt={merchant.name}
            className="h-[600px] w-full object-contain bg-black"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-12">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
            Street Merchant Profile
          </p>

          <div className="flex items-center gap-5">
            <img
              src={merchant.avatar}
              alt={merchant.name}
              className="h-24 w-24 rounded-full border-4 border-yellow-400"
            />

            <div>
              <h1 className="text-5xl font-black">
                {merchant.name}
              </h1>

              <p className="mt-2 text-zinc-400">
                {merchant.city}
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
            {merchant.story}
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105">
              Support Merchant
            </button>

            <button className="rounded-2xl border border-yellow-400/20 px-8 py-4 font-bold text-yellow-300 transition hover:bg-yellow-400/10">
              Share Profile
            </button>
          </div>

          {/* STATS */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-sm text-zinc-500">
                Total Supporters
              </p>

              <p className="mt-2 text-4xl font-black text-yellow-400">
                {merchant.supporters}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-sm text-zinc-500">
                City
              </p>

              <p className="mt-2 text-3xl font-black">
                Salvador
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-sm text-zinc-500">
                Category
              </p>

              <p className="mt-2 text-3xl font-black">
                Street Vendor
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
