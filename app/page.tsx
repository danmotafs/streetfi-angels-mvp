"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
        padding: "48px 24px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        {/* TOP BRANDING */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "80px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <img
            src="/images/logo.png"
            alt="StreetFi Angels"
            style={{
              width: "260px",
              objectFit: "contain",
            }}
          />

          <img
            src="/images/NFT1.png"
            alt="StreetFi NFT"
            style={{
              width: "120px",
              borderRadius: "50%",
              objectFit: "contain",
            }}
          />
        </section>

        {/* HERO */}
        <section
          style={{
            marginBottom: "120px",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "4px",
              fontSize: "12px",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            STREETFI AI INFRASTRUCTURE
          </p>

          <h1
            style={{
              fontSize: "88px",
              fontWeight: 900,
              lineHeight: 0.95,
              marginBottom: "32px",
              maxWidth: "1000px",
            }}
          >
            StreetFi AI-Onchain Pipeline
          </h1>

          <p
            style={{
              color: "#aaa",
              fontSize: "24px",
              lineHeight: 1.6,
              maxWidth: "1000px",
              marginBottom: "40px",
            }}
          >
            StreetFi Angels is a SocialFi infrastructure built on Solana that
            transforms real informal merchants into AI-powered digital identities,
            NFT ecosystems and transparent onchain economic opportunities.
          </p>

          {/* START EXPERIENCE BUTTON */}
          <Link href="/merchant/1">
            <button
              style={{
                background: "#facc15",
                color: "#000",
                border: "none",
                padding: "18px 34px",
                borderRadius: "14px",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: "16px",
                transition: "0.2s",
              }}
            >
              Start Experience
            </button>
          </Link>
        </section>

        {/* PIPELINE */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "32px",
            marginBottom: "120px",
          }}
        >
          {/* STEP 01 */}
          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "32px",
              background:
                "linear-gradient(180deg, #111 0%, #050505 100%)",
              minHeight: "620px",
              padding: "42px",
            }}
          >
            <p
              style={{
                color: "#d4af37",
                letterSpacing: "4px",
                fontSize: "12px",
                marginBottom: "28px",
                textTransform: "uppercase",
              }}
            >
              STEP 01
            </p>

            <h2
              style={{
                fontSize: "64px",
                fontWeight: 900,
                lineHeight: 0.95,
                marginBottom: "32px",
              }}
            >
              Merchant Input
            </h2>

            <p
              style={{
                color: "#999",
                lineHeight: 1.9,
                fontSize: "18px",
                marginBottom: "40px",
              }}
            >
              StreetFi captures real-world merchant identity through photos,
              voice samples, geolocation and local context. This stage converts
              informal workers into structured digital profiles ready for AI
              processing and onchain infrastructure.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                "Merchant identity collection",
                "Voice and personality mapping",
                "Geolocation infrastructure",
                "Community and tourism context",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid #222",
                    borderRadius: "16px",
                    padding: "20px",
                    color: "#ddd",
                    background: "#0a0a0a",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* STEP 02 */}
          <div
            style={{
              border: "1px solid rgba(168,85,247,0.18)",
              borderRadius: "32px",
              background:
                "linear-gradient(180deg, #111 0%, #050505 100%)",
              minHeight: "620px",
              padding: "42px",
            }}
          >
            <p
              style={{
                color: "#d4af37",
                letterSpacing: "4px",
                fontSize: "12px",
                marginBottom: "28px",
                textTransform: "uppercase",
              }}
            >
              STEP 02
            </p>

            <h2
              style={{
                fontSize: "64px",
                fontWeight: 900,
                lineHeight: 0.95,
                marginBottom: "32px",
              }}
            >
              AI Processing Layer
            </h2>

            <p
              style={{
                color: "#999",
                lineHeight: 1.9,
                fontSize: "18px",
                marginBottom: "40px",
              }}
            >
              AI systems transform merchant identity into scalable digital
              assets including avatars, jingles, NFT collections and automated
              social media content optimized for engagement, visibility and
              economic growth.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                "AI avatar generation",
                "Automated social content",
                "Voice and jingle creation",
                "NFT and digital asset generation",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid #222",
                    borderRadius: "16px",
                    padding: "20px",
                    color: "#ddd",
                    background: "#0a0a0a",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* STEP 03 */}
          <div
            style={{
              border: "1px solid rgba(34,197,94,0.18)",
              borderRadius: "32px",
              background:
                "linear-gradient(180deg, #111 0%, #050505 100%)",
              minHeight: "620px",
              padding: "42px",
              opacity: 0.45,
            }}
          >
            <p
              style={{
                color: "#d4af37",
                letterSpacing: "4px",
                fontSize: "12px",
                marginBottom: "28px",
                textTransform: "uppercase",
              }}
            >
              STEP 03
            </p>

            <h2
              style={{
                fontSize: "64px",
                fontWeight: 900,
                lineHeight: 0.95,
                marginBottom: "32px",
              }}
            >
              Onchain Economic Support Layer
            </h2>

            <p
              style={{
                color: "#999",
                lineHeight: 1.9,
                fontSize: "18px",
                marginBottom: "40px",
              }}
            >
              StreetFi Angels converts community trust into transparent onchain
              economic support through Solana wallets, SocialFi mechanics,
              support pools and decentralized infrastructure designed to
              strengthen local informal economies.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                "Merchant wallet infrastructure",
                "Community support pools",
                "Transparent onchain metrics",
                "Public-private partnership potential",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid #222",
                    borderRadius: "16px",
                    padding: "20px",
                    color: "#777",
                    background: "#0a0a0a",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            borderTop: "1px solid #111",
            paddingTop: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          <img
            src="/images/colosseum-hackathon-solana-logo.png"
            alt="Colosseum"
            style={{
              width: "280px",
              objectFit: "contain",
            }}
          />

          <img
            src="/images/solana-logo.png"
            alt="Solana"
            style={{
              width: "180px",
              objectFit: "contain",
            }}
          />
        </footer>
      </div>
    </main>
  );
}