const posts = [
  "Léo do Barbalho brings flavor, hustle and joy to the streets of Salvador.",
  "Every frozen treat sold by Léo carries a story of work, family and resilience.",
  "Support real people. Back local economies. Bring informal workers onchain.",
  "From street cart to digital profile: Léo is now part of the StreetFi economy.",
  "A local merchant. A real story. A new digital identity powered by AI.",
  "Léo’s work is part of Salvador’s living culture.",
  "StreetFi Angels helps transform visibility into opportunity.",
  "Small street businesses deserve global support.",
  "Meet the people building Brazil’s informal economy every day.",
  "Back Léo. Support local work. Grow real-world impact.",
];

export default function MerchantProfile() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-yellow-400">← Back to creation flow</a>

        <section className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[36px] border border-yellow-500/20 bg-zinc-900">
            <img
              src="/images/leo-real.jpg"
              alt="Léo do Barbalho"
              className="h-[680px] w-full object-contain bg-black"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
              Generated Merchant Profile
            </p>

            <h1 className="mt-4 text-6xl font-black">
              Léo do Barbalho
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Léo works daily in the streets of Salvador selling frozen treats
              and supporting his family through informal entrepreneurship.
              StreetFi Angels transforms his real-world hustle into a digital
              investment identity powered by AI, SocialFi and Solana.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black">
                Support Merchant
              </button>

              <button className="rounded-2xl border border-yellow-400/30 px-8 py-4 font-black text-yellow-300">
                Mint Profile NFT
              </button>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-zinc-900 p-5">
                <p className="text-sm text-zinc-500">Supporters</p>
                <p className="text-4xl font-black text-yellow-400">124</p>
              </div>

              <div className="rounded-3xl bg-zinc-900 p-5">
                <p className="text-sm text-zinc-500">City</p>
                <p className="text-2xl font-black">Salvador</p>
              </div>

              <div className="rounded-3xl bg-zinc-900 p-5">
                <p className="text-sm text-zinc-500">Category</p>
                <p className="text-2xl font-black">Street Vendor</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            AI Asset Generation
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Choose the digital identity package
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {["/images/leo-avatar-1.png", "/images/leo-avatar-2.png", "/images/leo-real.jpg"].map((src, i) => (
              <div key={src} className="rounded-[32px] border border-yellow-500/20 bg-zinc-900 p-4">
                <img src={src} className="h-80 w-full rounded-3xl object-contain bg-black" />
                <p className="mt-4 text-xl font-black text-yellow-400">
                  Avatar Option {i + 1}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-[32px] border border-yellow-500/20 bg-zinc-900 p-4">
                <img src="/images/token.png" className="h-80 w-full rounded-3xl object-contain bg-black" />
                <p className="mt-4 text-xl font-black text-yellow-400">
                  NFT Option {n}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[36px] border border-yellow-500/20 bg-zinc-950 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            AI Slogan / Instagram Bio
          </p>

          <h2 className="mt-4 text-4xl font-black">
            “From Barbalho to the blockchain — backing real people, one street story at a time.”
          </h2>

          <p className="mt-6 text-zinc-400">
            Suggested Instagram bio: Frozen treats, local hustle and real-world impact from Salvador. Now powered by StreetFi Angels.
          </p>
        </section>

        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            AI Social Media Pack
          </p>

          <h2 className="mt-4 text-5xl font-black">
            10 ready-to-post Instagram assets
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((caption, index) => (
              <div key={caption} className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900">
                <img
                  src={index % 2 === 0 ? "/images/leo-avatar-2.png" : "/images/leo-avatar-1.png"}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm text-yellow-400">
                    Post #{index + 1}
                  </p>

                  <p className="mt-3 leading-relaxed text-zinc-300">
                    {caption}
                  </p>

                  <p className="mt-4 text-sm text-zinc-500">
                    #StreetFiAngels #Solana #SocialFi #Brazil #LocalEconomy #RealWorldCrypto
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
