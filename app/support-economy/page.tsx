export default function SupportEconomyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      
      {/* BACK BUTTON */}
      <div className="mb-10">
        <a
          href="/"
          className="text-yellow-400 text-sm hover:opacity-80"
        >
          ← Back to Home
        </a>
      </div>

      {/* HERO */}
      <section className="mb-20">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-4">
          Step 03
        </p>

        <h1 className="text-6xl font-bold max-w-5xl leading-tight mb-6">
          Onchain Economic Support Layer
        </h1>

        <p className="text-zinc-300 text-xl max-w-3xl leading-relaxed">
          Transforming local trust into transparent onchain economic support.
        </p>
      </section>

      {/* MERCHANT WALLET */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">
          Merchant Wallet
        </h2>

        <div className="border border-zinc-800 rounded-3xl p-8 max-w-md bg-zinc-950">
          
          <img
            src="/merchant-1.jpg"
            alt="Merchant"
            className="w-24 h-24 rounded-full object-cover mb-6"
          />

          <h3 className="text-2xl font-bold mb-2">
            Léo do Picolé
          </h3>

          <p className="text-zinc-400 mb-6">
            Salvador • Bahia • Brazil
          </p>

          <div className="mb-4">
            <p className="text-zinc-500 text-sm">
              Wallet Balance
            </p>

            <h4 className="text-4xl font-bold text-yellow-400">
              2.45 SOL
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            
            <div className="border border-zinc-800 rounded-2xl p-4">
              <p className="text-zinc-500 text-sm mb-2">
                Supporters
              </p>

              <h4 className="text-2xl font-bold">
                152
              </h4>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-4">
              <p className="text-zinc-500 text-sm mb-2">
                Impact Score
              </p>

              <h4 className="text-2xl font-bold">
                4.8
              </h4>
            </div>

          </div>
        </div>
      </section>

      {/* SUPPORT POOL */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">
          Support Pool
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
            <h3 className="text-2xl font-bold mb-4">
              Investors
            </h3>

            <p className="text-zinc-400">
              Tourists, supporters and local investors contribute using SOL and USDC.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-3xl p-8 bg-yellow-500/10">
            <h3 className="text-2xl font-bold mb-4">
              StreetFi Pool
            </h3>

            <p className="text-zinc-300">
              Transparent onchain allocation infrastructure.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
            <h3 className="text-2xl font-bold mb-4">
              Merchant Wallet
            </h3>

            <p className="text-zinc-400">
              Funds are distributed directly to merchant wallets.
            </p>
          </div>

        </div>
      </section>

      {/* FUNDING GOALS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">
          Funding Goals
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
            
            <h3 className="text-2xl font-bold mb-4">
              New Ice Cream Cart
            </h3>

            <p className="text-zinc-400 mb-6">
              Expansion for summer tourism.
            </p>

            <div className="w-full bg-zinc-800 h-3 rounded-full mb-4">
              <div className="bg-yellow-400 h-3 rounded-full w-[64%]" />
            </div>

            <p className="text-sm text-zinc-500">
              3.2 SOL raised • Goal: 5 SOL
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
            
            <h3 className="text-2xl font-bold mb-4">
              Freezer Upgrade
            </h3>

            <p className="text-zinc-400 mb-6">
              Better product storage and mobility.
            </p>

            <div className="w-full bg-zinc-800 h-3 rounded-full mb-4">
              <div className="bg-green-400 h-3 rounded-full w-[44%]" />
            </div>

            <p className="text-sm text-zinc-500">
              1.7 SOL raised • Goal: 4 SOL
            </p>
          </div>

        </div>
      </section>

      {/* ONCHAIN METRICS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">
          Onchain Metrics
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-950">
            <p className="text-zinc-500 mb-3">
              Merchants Supported
            </p>

            <h3 className="text-4xl font-bold">
              42
            </h3>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-950">
            <p className="text-zinc-500 mb-3">
              Total Distributed
            </p>

            <h3 className="text-4xl font-bold">
              152 SOL
            </h3>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-950">
            <p className="text-zinc-500 mb-3">
              Supporters
            </p>

            <h3 className="text-4xl font-bold">
              1,248
            </h3>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-950">
            <p className="text-zinc-500 mb-3">
              Transactions
            </p>

            <h3 className="text-4xl font-bold">
              3,672
            </h3>
          </div>

        </div>
      </section>

      {/* PPP */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-8">
          Public-Private Partnership Vision
        </h2>

        <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">
          
          <p className="text-zinc-300 text-xl leading-relaxed max-w-4xl">
            StreetFi Angels connects merchants, governments, tourists and local
            communities through transparent onchain infrastructure designed to
            strengthen informal economies and unlock social impact.
          </p>

        </div>
      </section>

    </main>
  );
}