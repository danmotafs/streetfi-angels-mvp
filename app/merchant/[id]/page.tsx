const avatarImages = [
  "/images/leo-avatar-1.png",
  "/images/leo-avatar-2.png",
  "/images/leo-avatar-3.png",
  "/images/leo-avatar-4.png",
  "/images/leo-avatar-5.png",
  "/images/leo-avatar-6.png",
  "/images/leo-avatar-7.png",
  "/images/leo-avatar-8.png",
  "/images/leo-avatar-9.png",
  "/images/leo-avatar-10.png",
];

const nftImages = [
  "/images/NFT1.png",
  "/images/NFT2.png",
  "/images/NFT3.png",
  "/images/NFT4.png",
];

const productImages = [
  "/images/picole-sabor-amendoim-1.png",
  "/images/picole-sabor-amendoim-2.png",
  "/images/picole-sabor-caja-1.png",
  "/images/picole-sabor-caja-2.png",
  "/images/picole-sabor-chocolate-africano-1.png",
  "/images/picole-sabor-chocolate-africano-2.png",
  "/images/picole-sabor-coco-1.png",
  "/images/picole-sabor-coco-2.png",
  "/images/picole-sabor-doce-de-leite-1.png",
  "/images/picole-sabor-leite-condensado-1.png",
];

const posts = [
  {
    image: "/images/picole-sabor-caja-1.png",
    caption:
      "Refreshing cajá popsicles made in Salvador. Real flavor from Bahia.",
  },
  {
    image: "/images/picole-sabor-coco-1.png",
    caption:
      "Handmade coconut popsicles supporting local entrepreneurship.",
  },
  {
    image: "/images/picole-sabor-amendoim-1.png",
    caption:
      "Traditional peanut popsicles inspired by Northeast Brazil.",
  },
  {
    image: "/images/picole-sabor-limão-1.png",
    caption:
      "Fresh lemon flavor for hot Salvador afternoons.",
  },
  {
    image: "/images/picole-sabor-manga-1.png",
    caption:
      "Tropical mango popsicles made with local ingredients.",
  },
  {
    image: "/images/picole-sabor-tapioca-1.png",
    caption:
      "Brazilian tapioca-inspired frozen desserts from the streets.",
  },
  {
    image: "/images/picole-sabor-umbu-1.png",
    caption:
      "Regional umbu fruit transformed into a frozen experience.",
  },
  {
    image: "/images/picole-sabor-chocolate-africano-1.png",
    caption:
      "African chocolate inspired flavor celebrating Afro-Brazilian culture.",
  },
  {
    image: "/images/picole-sabor-doce-de-leite-1.png",
    caption:
      "Classic Brazilian doce de leite popsicle made with love.",
  },
  {
    image: "/images/picole-sabor-leite-condensado-1.png",
    caption:
      "Creamy condensed milk popsicles from Salvador’s streets.",
  },
];

export default function MerchantProfile() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-yellow-400">
          ← Back to creation flow
        </a>

        {/* HERO */}
        <section className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[36px] border border-yellow-500/20 bg-zinc-900">
            <img
              src="/images/leo-real.jpg"
              alt="Léo do Picolé"
              className="h-[680px] w-full object-contain bg-black"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
              Generated Merchant Profile
            </p>

            <h1 className="mt-4 text-6xl font-black">
              Léo do Picolé
            </h1>

            <p className="mt-4 text-xl text-yellow-300">
              Main activity area: Barbalho — Salvador / BA
            </p>

            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Léo sells handmade popsicles in the streets of Salvador and
              supports his family through local informal entrepreneurship.
              StreetFi Angels transforms his real-world story into a digital
              identity powered by AI and Solana.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black">
                Support Merchant
              </button>

              <button className="rounded-2xl border border-yellow-400/30 px-8 py-4 font-black text-yellow-300">
                Mint NFT
              </button>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-zinc-900 p-5">
                <p className="text-sm text-zinc-500">
                  Supporters
                </p>

                <p className="text-4xl font-black text-yellow-400">
                  124
                </p>
              </div>

              <div className="rounded-3xl bg-zinc-900 p-5">
                <p className="text-sm text-zinc-500">
                  City
                </p>

                <p className="text-2xl font-black">
                  Salvador
                </p>
              </div>

              <div className="rounded-3xl bg-zinc-900 p-5">
                <p className="text-sm text-zinc-500">
                  Category
                </p>

                <p className="text-2xl font-black">
                  Popsicle Vendor
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI AVATARS */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            AI Avatar Generation
          </p>

          <h2 className="mt-4 text-5xl font-black">
            AI-generated merchant identities
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {avatarImages.map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-[28px] border border-yellow-500/20 bg-zinc-900"
              >
                <img
                  src={image}
                  className="h-72 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-lg font-black text-yellow-400">
                    Avatar #{index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NFTS */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            AI NFT Collection
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Product-based NFTs
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {nftImages.map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-[28px] border border-yellow-500/20 bg-zinc-900"
              >
                <img
                  src={image}
                  className="h-80 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-xl font-black text-yellow-400">
                    NFT #{index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Merchant Products
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Product image dataset
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {productImages.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900"
              >
                <img
                  src={image}
                  className="h-48 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* SLOGAN */}
        <section className="mt-24 rounded-[36px] border border-yellow-500/20 bg-zinc-950 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            AI Instagram Bio
          </p>

          <h2 className="mt-4 text-4xl font-black">
            “Frozen flavor from Salvador. Real hustle. Real people. Now onchain.”
          </h2>

          <p className="mt-6 text-zinc-400">
            Suggested Bio: 🍦 Handmade popsicles from Barbalho • Salvador/BA •
            Powered by StreetFi Angels • Local flavor on Solana.
          </p>
        </section>

        {/* SOCIAL POSTS */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            AI Social Media Pack
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Ready-to-post Instagram content
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900"
              >
                <img
                  src={post.image}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm text-yellow-400">
                    Post #{index + 1}
                  </p>

                  <p className="mt-3 leading-relaxed text-zinc-300">
                    {post.caption}
                  </p>

                  <p className="mt-4 text-sm text-zinc-500">
                    #StreetFiAngels #Solana #SocialFi #Salvador #Bahia #Picolé #LocalEconomy
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
