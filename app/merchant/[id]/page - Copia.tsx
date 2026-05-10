"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MerchantProfile() {
  const router = useRouter();
  const id = "1";

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
      <div style={{ width: "100%", maxWidth: "1400px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <button
            onClick={() => router.back()}
            style={{
              background: "transparent",
              border: "none",
              color: "#d4af37",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            ← Back
          </button>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => router.push(`/merchant/${id}/support-economy`)}
              style={topPrimaryButtonStyle}
            >
              Open Merchant Profile
            </button>

            <button
              onClick={() =>
                router.push(`/merchant/${id}/support-economy/nft-collections`)
              }
              style={topSecondaryButtonStyle}
            >
              Explore NFTs
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "60px" }}>
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "4px",
              fontSize: "12px",
              marginBottom: "16px",
            }}
          >
            STREETFI AI INFRASTRUCTURE
          </p>

          <h1
            style={{
              fontSize: "84px",
              fontWeight: 800,
              lineHeight: 1,
              marginBottom: "28px",
            }}
          >
            StreetFi AI-Onchain Pipeline
          </h1>

          <p
            style={{
              color: "#bbb",
              fontSize: "22px",
              lineHeight: 1.8,
              maxWidth: "900px",
            }}
          >
            StreetFi Angels transforms real informal merchants into investable
            digital identities through AI orchestration, NFT generation and
            Solana infrastructure.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div style={cardStyle}>
            <img
              src="/images/leo-real-01.png"
              alt="Merchant"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />

            <div style={{ padding: "24px" }}>
              <p style={stepLabelStyle}>STEP 01</p>
              <h2 style={stepTitleStyle}>Merchant Input</h2>

              <div style={buttonGroupStyle}>
                <button
                  onClick={() => router.push(`/merchant/${id}/merchant-photos`)}
                  style={buttonStyle}
                >
                  Merchant photos
                </button>

                <button
                  onClick={() => router.push(`/merchant/${id}/voice-samples`)}
                  style={buttonStyle}
                >
                  Voice samples
                </button>

                <button
                  onClick={() => router.push(`/merchant/${id}/geolocation`)}
                  style={buttonStyle}
                >
                  Geolocation
                </button>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="/images/avatar-capa.png"
              alt="AI Processing"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "contain",
                objectPosition: "center center",
                background: "#d8a63a",
                padding: "10px",
              }}
            />

            <div style={{ padding: "24px" }}>
              <p style={stepLabelStyle}>STEP 02</p>

              <h2 style={stepTitleStyle}>
                AI Processing
                <br />
                Layer
              </h2>

              <div style={buttonGroupStyle}>
                <button
                  onClick={() =>
                    router.push(`/merchant/${id}/avatar-generation`)
                  }
                  style={buttonStyle}
                >
                  Avatar generation
                </button>

                <button
                  onClick={() => router.push(`/merchant/${id}/jingles`)}
                  style={buttonStyle}
                >
                  Jingle creation
                </button>

                <button
                  onClick={() => router.push(`/merchant/${id}/social-content`)}
                  style={buttonStyle}
                >
                  Social content
                </button>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="/images/solana-logo.png"
              alt="Solana"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "24px" }}>
              <p style={stepLabelStyle}>STEP 03</p>
              <h2 style={stepTitleStyle}>Solana Outputs</h2>

              <div style={buttonGroupStyle}>
                <button
                  onClick={() =>
                    router.push(
                      `/merchant/${id}/support-economy/nft-collections`
                    )
                  }
                  style={buttonStyle}
                >
                  NFT Collections
                </button>

                <button
                  onClick={() =>
                    router.push(
                      `/merchant/${id}/support-economy/merchant-finance-profile`
                    )
                  }
                  style={buttonStyle}
                >
                  Merchant Finance Profile
                </button>

                <button
                  onClick={() => router.push(`/merchant/${id}/support-economy`)}
                  style={buttonStyle}
                >
                  Support economy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const cardStyle = {
  background: "#050505",
  borderRadius: "28px",
  overflow: "hidden",
  border: "1px solid rgba(212,175,55,0.2)",
};

const stepLabelStyle = {
  color: "#d4af37",
  letterSpacing: "3px",
  fontSize: "11px",
  marginBottom: "18px",
};

const stepTitleStyle = {
  fontSize: "56px",
  lineHeight: 1.1,
  marginBottom: "24px",
};

const buttonGroupStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "16px",
};

const buttonStyle = {
  background: "#0b0b0b",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "white",
  padding: "18px 20px",
  borderRadius: "14px",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "15px",
};

const topPrimaryButtonStyle = {
  background: "#d4af37",
  color: "#000",
  border: "none",
  padding: "14px 24px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "15px",
};

const topSecondaryButtonStyle = {
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.2)",
  padding: "14px 24px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "15px",
};