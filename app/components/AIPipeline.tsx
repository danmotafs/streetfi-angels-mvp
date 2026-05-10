"use client";

import Image from "next/image";

export default function AIPipeline() {
  const pipelineSteps = [
    {
      title: "Merchant Input",
      subtitle: "Real-world data collection",
      image: "/images/leo-real.png",
      items: [
        "Merchant photos",
        "Voice samples",
        "Geolocation",
        "Behavior traits",
      ],
    },

    {
      title: "AI Processing Layer",
      subtitle: "StreetFi AI Engine",
      image: "/images/NFT2.png",
      items: [
        "Avatar generation",
        "Jingle creation",
        "Social content",
        "Identity scoring",
      ],
    },

    {
      title: "Solana Outputs",
      subtitle: "Onchain identity infrastructure",
      image: "/images/NFT1.png",
      items: [
        "NFT Collections",
        "Merchant profiles",
        "Support economy",
        "SocialFi reputation",
      ],
    },
  ];

  return (
    <section
      style={{
        marginTop: "120px",
      }}
    >
      <div
        style={{
          marginBottom: "60px",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "4px",
            fontSize: "12px",
            marginBottom: "16px",
          }}
        >
          STREETFI AI INFRASTRUCTURE
        </p>

        <h2
          style={{
            fontSize: "72px",
            lineHeight: "72px",
            maxWidth: "900px",
            marginBottom: "30px",
          }}
        >
          Run StreetFi AI Pipeline
        </h2>

        <p
          style={{
            color: "#888",
            fontSize: "22px",
            lineHeight: "38px",
            maxWidth: "900px",
          }}
        >
          StreetFi Angels transforms real informal merchants into
          investable digital identities through AI orchestration,
          NFT generation and Solana infrastructure.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          alignItems: "stretch",
        }}
      >
        {pipelineSteps.map((step, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              background: "#0A0A0A",
              border: "1px solid #1f1f1f",
              borderRadius: "32px",
              overflow: "hidden",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(212,175,55,0.08), transparent)",
                pointerEvents: "none",
              }}
            />

            <Image
              src={step.image}
              alt={step.title}
              width={500}
              height={400}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "30px",
              }}
            >
              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "12px",
                  letterSpacing: "3px",
                  marginBottom: "12px",
                }}
              >
                STEP 0{index + 1}
              </p>

              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  color: "#999",
                  marginBottom: "30px",
                  lineHeight: "28px",
                }}
              >
                {step.subtitle}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {step.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#111",
                      border: "1px solid #222",
                      borderRadius: "14px",
                      padding: "14px 18px",
                      color: "#DDD",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {index < 2 && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-20px",
                  width: "40px",
                  height: "40px",
                  background: "#D4AF37",
                  borderRadius: "999px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#000",
                  fontWeight: "bold",
                  zIndex: 20,
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}