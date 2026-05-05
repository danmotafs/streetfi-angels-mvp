import Link from "next/link";

const merchants = [
  {
    id: 1,
    name: "Léo do Barbalho",
    city: "Salvador, Brazil",
    category: "Street Vendor",
    supporters: 124,
    image: "/images/leo-real.jpg",
    avatar: "/images/leo-avatar-1.png",
    story:
      "Léo sells frozen treats in the streets of Salvador and supports his family through informal entrepreneurship.",
  },
  {
    id: 2,
    name: "Léo Digital Twin",
    city: "StreetFi AI Profile",
    category: "AI Identity",
    supporters: 89,
    image: "/images/leo-avatar-2.png",
    avatar: "/images/leo-avatar-2.png",
    story:
      "StreetFi transforms real informal workers into digital investable identities using AI and Solana.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      {/* HERO */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-16 text-center">
        <img
          src="/images/logo.png"
          alt="StreetFi Angels"
          className="mb-6 w-56"
        />

        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
          Tokenizing Brazil’s Informal Economy
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Back Real People.
          <br />
          <span className="text-yellow-400">Onchain.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          StreetFi Angels transforms street workers into digital
          investment profiles powered by AI, SocialFi and Solana.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105">
            Explore Merchants
          </button>

          <button className="rounded-2xl border border-yellow-400/30 px-8 py-4 font-bold text-yellow-300 transition hover:bg-yellow-400/10">
            Become an Angel Investor
          </button>
        </div>

        <div className="relative mt-16">
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-3xl" />

          <img
            src="/images/token.png"
            alt="StreetFi Token"
            className="relative mx-auto w-[300px]"
          />
        </div>
      </section>

      {/* MERCHANTS */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-yellow-400">
            Featured Merchants
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Real Stories.
            <br />
            Real Impact.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {merchants.map((merchant) => (
            <Link key={merchant.id} href={`/merchant/${merchant.id}`}>
              <div className="group overflow-hidden rounded-[32px] border border-yellow-500/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/40">
                {/* IMAGE */}
                <div className="relative h-[500px] overflow-hidden bg-black">
                  <img
                    src={merchant.image}
                    alt={merchant.name}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* AVATAR */}
                  <div className="absolute right-5 top-5">
                    <img
                      src={merchant.avatar}
                      alt={merchant.name}
                      className="h-20 w-20 rounded-full border-4 border-black shadow-2xl"
                    />
                  </div>

                  {/* CATEGORY */}
                  <div className="absolute left-6 top-6 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase text-black">
                    {merchant.category}
                  </div>

                  {/* INFO */}
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="text-4xl font-black">
                      {merchant.name}
                    </h3>

                    <p className="mt-2 text-zinc-300">
                      {merchant.city}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <p className="leading-relaxed text-zinc-300">
                    {merchant.story}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="text-sm text-zinc-500">
                        Community Supporters
                      </p>

                      <p className="text-3xl font-black text-yellow-400">
                        {merchant.supporters}
                      </p>
                    </div>

                    <button className="rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:scale-105">
                      Support
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
