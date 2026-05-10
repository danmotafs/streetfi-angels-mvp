"use client";

import Link from "next/link";

export default function MerchantPhotosPage() {
  const photos = [
    "/images/leo-real.png",
    "/images/leo-real-01.png",
  ];

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
          maxWidth: "1400px",
        }}
      >
        <Link
          href="/merchant/1"
          style={{
            color: "#d4af37",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Back to Merchant
        </Link>

        <div
          style={{
            marginTop: "40px",
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
            REAL MERCHANT DATA INPUT
          </p>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: 1,
              fontWeight: 800,
              marginBottom: "28px",
            }}
          >
            Merchant Photo Upload Simulation
          </h1>

          <p
            style={{
              maxWidth: "950px",
              color: "#ccc",
              fontSize: "28px",
              lineHeight: 1.6,
              margin: "0 auto 40px auto",
            }}
          >
            This section simulates real-world merchant photo uploads.
            These images are later processed by AI models to generate
            digital avatars, visual assets and SocialFi identities on Solana.
          </p>

          <div
            style={{
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: "28px",
              padding: "28px",
              marginBottom: "48px",
              background: "#050505",
              maxWidth: "1100px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              About Léo do Picolé
            </h2>

            <p
              style={{
                color: "#e5e5e5",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              Léo Picolé sells handmade popsicles and refreshing frozen treats
              in the Barbalho neighborhood of Salvador, Brazil. Known for his
              friendly personality and relaxed atmosphere, he became a local
              reference for students, residents and visitors looking for a
              refreshing experience during the intense Bahia heat.
            </p>

            <div
              style={{
                marginTop: "24px",
                padding: "18px",
                borderRadius: "18px",
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.2)",
                color: "#d4af37",
                fontSize: "14px",
              }}
            >
              All images displayed in this MVP were authorized by Léo for
              demonstration purposes within the StreetFi Angels project.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(212,175,55,0.2)",
                  background: "#090909",
                  width: "420px",
                }}
              >
                <img
                  src={photo}
                  alt={`merchant-${index}`}
                  style={{
                    width: "100%",
                    height: "650px",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}