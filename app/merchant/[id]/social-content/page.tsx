"use client";

import Link from "next/link";

const posts = [
  "/images/post-1.png",
  "/images/post-2.png",
  "/images/post-3.png",
  "/images/post-4.png",
  "/images/post-5.png",
];

const solanaProjects = [
  {
    name: "Dialect",
    logo: "/images/dialect-solana-logo.png",
    description:
      "Dialect can enable automated wallet-native engagement, personalized campaigns and merchant communication flows connected to SocialFi interactions.",
  },
  {
    name: "Helius",
    logo: "/images/helius-solana-logo.png",
    description:
      "Helius can provide scalable Solana infrastructure, indexing and real-time blockchain activity for automated merchant content generation systems.",
  },
  {
    name: "Tensor",
    logo: "/images/tensor-solana-logo.png",
    description:
      "Tensor can help increase visibility and discoverability for merchant NFT campaigns, collectibles and digital identity assets created through StreetFi Angels.",
  },
];

export default function SocialContentPage() {
  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
        padding: "40px 24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1500px",
        }}
      >
        <Link
          href="/merchant/1"
          style={{
            color: "#d4af37",
            textDecoration: "none",
            fontWeight: 600,
            marginBottom: "40px",
            display: "inline-block",
          }}
        >
          ← Back to Merchant
        </Link>

        <section
          style={{
            textAlign: "center",
            marginBottom: "80px",
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
            AI SOCIAL MEDIA INFRASTRUCTURE
          </p>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              marginBottom: "28px",
            }}
          >
            Automated Content Production
            <br />
            for Social Media
          </h1>

          <p
            style={{
              color: "#aaa",
              fontSize: "24px",
              lineHeight: 1.8,
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            StreetFi Angels can transform merchant stories, local culture and
            everyday commerce into scalable AI-generated social media content
            designed for visibility, engagement and community growth.
          </p>
        </section>

        <section
          style={{
            marginBottom: "120px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "28px",
            }}
          >
            {posts.map((post, index) => (
              <div
                key={index}
                style={{
                  background: "#050505",
                  borderRadius: "28px",
                  overflow: "hidden",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <img
                  src={post}
                  alt={`Post ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            marginBottom: "120px",
            background: "#050505",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "36px",
            padding: "56px",
            textAlign: "center",
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
            SOCIAL MEDIA AUTOMATION
          </p>

          <h2
            style={{
              fontSize: "56px",
              marginBottom: "28px",
            }}
          >
            Instagram AI Content Layer
          </h2>

          <p
            style={{
              color: "#bbb",
              fontSize: "22px",
              lineHeight: 1.9,
              maxWidth: "1100px",
              margin: "0 auto 56px auto",
            }}
          >
            StreetFi Angels can generate automated social media campaigns,
            merchant storytelling assets, AI-generated branding materials and
            viral community content optimized for local commerce visibility and
            engagement.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "1200px",
                borderRadius: "32px",
                overflow: "hidden",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <img
                src="/images/mockups-instagram.png"
                alt="Instagram Mockups"
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        <section
          style={{
            textAlign: "center",
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
            SOLANA SOCIAL AI ECOSYSTEM
          </p>

          <h2
            style={{
              fontSize: "64px",
              fontWeight: 700,
              marginBottom: "28px",
            }}
          >
            Solana AI Infrastructure
          </h2>

          <p
            style={{
              color: "#bbb",
              fontSize: "22px",
              lineHeight: 1.8,
              maxWidth: "1100px",
              margin: "0 auto 72px auto",
            }}
          >
            Real Solana ecosystem infrastructure can power scalable AI-driven
            social content production, creator engagement and merchant digital
            visibility for StreetFi Angels.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "32px",
            }}
          >
            {solanaProjects.map((project, index) => (
              <div
                key={index}
                style={{
                  background: "#050505",
                  borderRadius: "32px",
                  border: "1px solid rgba(212,175,55,0.2)",
                  padding: "40px",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: "220px",
                    height: "140px",
                    borderRadius: "24px",
                    background: "#111",
                    border: "1px solid rgba(212,175,55,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "32px",
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
                    color: "#d4af37",
                    fontSize: "42px",
                    marginBottom: "24px",
                  }}
                >
                  {project.name}
                </h3>

                <p
                  style={{
                    color: "#ddd",
                    fontSize: "22px",
                    lineHeight: 1.9,
                  }}
                >
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}