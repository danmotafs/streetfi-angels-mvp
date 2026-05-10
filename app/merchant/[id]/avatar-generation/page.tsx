"use client";

import Link from "next/link";

const avatars = [
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

const solanaProjects = [
  {
    name: "Metaplex",
    logo: "/images/metaplex-solana-logo.png",
    description:
      "Metaplex can power NFT minting, compressed NFTs and merchant digital identity collections for StreetFi Angels.",
  },
  {
    name: "Dialect",
    logo: "/images/dialect-solana-logo.png",
    description:
      "Dialect can enable wallet messaging, merchant engagement and SocialFi interactions directly inside the Solana ecosystem.",
  },
  {
    name: "Helius",
    logo: "/images/helius-solana-logo.png",
    description:
      "Helius can provide scalable Solana infrastructure, indexing and real-time blockchain data for StreetFi AI activity.",
  },
  {
    name: "Tensor",
    logo: "/images/tensor-solana-logo.png",
    description:
      "Tensor can support visibility and liquidity for merchant-generated NFT collections inside the Solana NFT economy.",
  },
];

export default function AvatarGenerationPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "32px",
        fontFamily: "Arial",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1700px",
        }}
      >
        <Link
          href="/merchant/1"
          style={{
            color: "#d4af37",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            marginBottom: "40px",
          }}
        >
          ← Back to Merchant
        </Link>

        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "4px",
              fontSize: "12px",
              marginBottom: "16px",
            }}
          >
            AI DIGITAL IDENTITY
          </p>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            AI Avatar Generation
          </h1>

          <p
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              color: "#ccc",
              fontSize: "22px",
              lineHeight: 1.8,
            }}
          >
            StreetFi Angels transforms real-world merchant images into
            AI-generated avatars and digital identities optimized for
            SocialFi experiences, NFTs and onchain storytelling powered
            by Solana infrastructure.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            marginBottom: "80px",
          }}
        >
          {avatars.map((avatar, index) => (
            <div
              key={index}
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(212,175,55,0.2)",
                background: "#050505",
              }}
            >
              <img
                src={avatar}
                alt={`AI Avatar ${index + 1}`}
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "32px",
            padding: "48px",
            background: "#050505",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                color: "#d4af37",
                letterSpacing: "4px",
                fontSize: "12px",
                marginBottom: "16px",
              }}
            >
              SOLANA AI ECOSYSTEM
            </p>

            <h2
              style={{
                fontSize: "52px",
                marginBottom: "20px",
              }}
            >
              Solana AI Infrastructure
            </h2>

            <p
              style={{
                color: "#bbb",
                fontSize: "20px",
                lineHeight: 1.8,
                maxWidth: "1100px",
                margin: "0 auto",
              }}
            >
              StreetFi Angels can integrate with real Solana ecosystem
              projects to create scalable AI-powered digital identities,
              NFT collections, wallet interactions and decentralized
              merchant experiences for local economies worldwide.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {solanaProjects.map((project, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: "24px",
                  padding: "32px",
                  background: "#0a0a0a",
                }}
              >
                <div
                  style={{
                    width: "220px",
                    height: "140px",
                    borderRadius: "24px",
                    background: "#111",
                    border:
                      "1px solid rgba(212,175,55,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "32px",
                    overflow: "hidden",
                    padding: "20px",
                  }}
                >
                  <img
                    src={project.logo}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: "34px",
                    marginBottom: "20px",
                    color: "#d4af37",
                  }}
                >
                  {project.name}
                </h3>

                <p
                  style={{
                    color: "#ccc",
                    lineHeight: 1.9,
                    fontSize: "19px",
                  }}
                >
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "48px",
              padding: "32px",
              borderRadius: "24px",
              background: "rgba(212,175,55,0.06)",
              border: "1px solid rgba(212,175,55,0.15)",
            }}
          >
            <h3
              style={{
                color: "#d4af37",
                fontSize: "32px",
                marginBottom: "18px",
              }}
            >
              Future AI Expansion
            </h3>

            <p
              style={{
                color: "#ccc",
                lineHeight: 1.9,
                fontSize: "19px",
              }}
            >
              Future integrations may include decentralized AI image
              generation, merchant reputation systems, onchain loyalty
              programs, AI-powered tourism campaigns and autonomous
              SocialFi content generation connected directly to Solana
              wallets and NFT infrastructure.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}