"use client";

import Link from "next/link";

const locations = [
  {
    title: "IFBA Barbalho",
    image: "/images/ifba-barbalho-real.png",
    url: "https://maps.app.goo.gl/qFMRZY9Wm6tF2dZb6",
  },
  {
    title: "ICEIA Barbalho",
    image: "/images/iceia-barbalho-real.png",
    url: "https://maps.app.goo.gl/vY8s8HvSgd2W6CqWA",
  },
  {
    title: "Forte do Barbalho",
    image: "/images/forte-barbalho-real.png",
    url: "https://maps.app.goo.gl/gSkRrPSTqmvN2Fd18",
  },
];

export default function GeolocationPage() {
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
          maxWidth: "1600px",
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
            CULTURE + TOURISM + DIGITAL IDENTITY
          </p>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            Geolocation + Local Tourism
          </h1>

          <p
            style={{
              maxWidth: "1200px",
              margin: "0 auto 60px auto",
              color: "#ccc",
              fontSize: "22px",
              lineHeight: 1.8,
            }}
          >
            StreetFi Angels enables the creation of AI-generated avatars,
            digital representations and social content for cultural
            landmarks, historical spaces and authentic urban locations
            that are often outside traditional tourist routes. These are
            the places normally discovered only by residents and people
            who experience the streets daily. By transforming real-world
            locations into digital identity assets, the platform helps
            merchants create engaging social media content, promote local
            tourism and increase visibility for neighborhoods, communities
            and informal economies anywhere in the city through AI and
            Solana infrastructure.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(420px, 1fr))",
              gap: "28px",
            }}
          >
            {locations.map((location, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  background: "#050505",
                }}
              >
                <img
                  src={location.image}
                  alt={location.title}
                  style={{
                    width: "100%",
                    height: "340px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    padding: "24px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "32px",
                      marginBottom: "20px",
                    }}
                  >
                    {location.title}
                  </h2>

                  <a
                    href={location.url}
                    target="_blank"
                    style={{
                      display: "inline-block",
                      padding: "14px 24px",
                      borderRadius: "12px",
                      border:
                        "1px solid rgba(212,175,55,0.3)",
                      color: "#d4af37",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Open Geolocation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}