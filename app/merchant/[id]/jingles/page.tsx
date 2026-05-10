"use client";

import Link from "next/link";

export default function JinglesPage() {
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
          maxWidth: "1400px",
        }}
      >
        <Link
          href="/merchant/1"
          style={{
            color: "#d4af37",
            textDecoration: "none",
            fontWeight: 600,
            marginBottom: "32px",
            display: "inline-block",
          }}
        >
          ← Back
        </Link>

        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
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
            AI MUSIC GENERATION
          </p>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              marginBottom: "24px",
            }}
          >
            AI Jingle Creation
          </h1>

          <p
            style={{
              color: "#aaa",
              fontSize: "24px",
              lineHeight: 1.7,
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            StreetFi Angels can transform merchant identity into AI-generated
            jingles, audio branding assets and viral local marketing campaigns
            powered by Solana-native infrastructure.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            marginBottom: "100px",
          }}
        >
          <div
            style={{
              background: "#050505",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "28px",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "24px",
              }}
            >
              Jingle 1
            </h2>

            <audio controls style={{ width: "100%" }}>
              <source src="/audio/oi-nois.mp3" type="audio/mpeg" />
            </audio>
          </div>

          <div
            style={{
              background: "#050505",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "28px",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "24px",
              }}
            >
              Jingle 2
            </h2>

            <audio controls style={{ width: "100%" }}>
              <source src="/audio/picole-picole.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>

        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "4px",
              fontSize: "12px",
              marginBottom: "20px",
            }}
          >
            SOLANA AI MUSIC ECOSYSTEM
          </p>

          <h2
            style={{
              fontSize: "64px",
              fontWeight: 700,
              marginBottom: "32px",
            }}
          >
            AI Audio Infrastructure
          </h2>

          <p
            style={{
              color: "#bbb",
              fontSize: "22px",
              lineHeight: 1.8,
              marginBottom: "60px",
              maxWidth: "1100px",
              marginInline: "auto",
            }}
          >
            StreetFi Angels can integrate with decentralized AI and
            Solana-native infrastructure to generate scalable merchant jingles,
            audio branding assets and onchain creator experiences.
          </p>

          <div
            style={{
              background: "#050505",
              border: "1px solid rgba(212,175,55,0.25)",
              borderRadius: "36px",
              padding: "48px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  width: "420px",
                  height: "220px",
                  borderRadius: "28px",
                  background: "#111",
                  border: "1px solid rgba(212,175,55,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: "32px",
                }}
              >
                <img
                  src="/images/dialect-solana-logo.png"
                  alt="Dialect"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <h3
              style={{
                color: "#d4af37",
                fontSize: "56px",
                marginBottom: "28px",
                textAlign: "center",
              }}
            >
              Dialect
            </h3>

            <p
              style={{
                color: "#ddd",
                fontSize: "24px",
                lineHeight: 1.9,
                maxWidth: "1000px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              Dialect can help StreetFi Angels distribute AI-generated merchant
              jingles directly through wallet messaging, SocialFi interactions
              and community engagement systems connected to the Solana
              ecosystem.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}