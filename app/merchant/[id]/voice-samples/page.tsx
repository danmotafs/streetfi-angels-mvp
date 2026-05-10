"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function VoiceSamplesPage() {
  const params = useParams();
  const id = params.id;

  return (
    <main style={mainStyle}>
      <Link href={`/merchant/${id}`} style={backStyle}>
        ← Back to Merchant
      </Link>

      <section style={{ marginTop: "48px" }}>
        <p style={eyebrowStyle}>MERCHANT VOICE IDENTITY</p>

        <h1 style={titleStyle}>Voice Samples</h1>

        <p style={descriptionStyle}>
          These are real audio identity samples from Léo do Picolé. The sounds
          help preserve his street-selling style and feed the AI branding layer.
        </p>
      </section>

      <section style={gridStyle}>
        <AudioCard
          title="Sinos"
          description="Traditional bell sound used by popsicle vendors to announce their arrival."
          src="/audio/sinos.mp4"
        />

        <AudioCard
          title="Ói Nóis"
          description="Léo’s recognizable street call and personal sound signature."
          src="/audio/oi-nois.mp4"
        />

        <AudioCard
          title="Picolé, Picolé"
          description="The classic sales call used by Léo to announce his popsicles."
          src="/audio/picole-picole.mp4"
        />
      </section>
    </main>
  );
}

function AudioCard({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  return (
    <div style={cardStyle}>
      <h2 style={cardTitleStyle}>{title}</h2>

      <p style={cardDescriptionStyle}>{description}</p>

      <audio controls style={{ width: "100%", marginTop: "24px" }}>
        <source src={src} />
      </audio>
    </div>
  );
}

const mainStyle: React.CSSProperties = {
  background: "#000",
  minHeight: "100vh",
  color: "white",
  padding: "48px 24px",
  fontFamily: "Arial",
};

const backStyle: React.CSSProperties = {
  color: "#d4af37",
  textDecoration: "none",
  fontWeight: 700,
};

const eyebrowStyle: React.CSSProperties = {
  color: "#d4af37",
  letterSpacing: "4px",
  fontSize: "12px",
  marginBottom: "16px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "72px",
  fontWeight: 900,
  lineHeight: 1,
  marginBottom: "24px",
};

const descriptionStyle: React.CSSProperties = {
  maxWidth: "900px",
  color: "#aaa",
  fontSize: "22px",
  lineHeight: 1.6,
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "32px",
  marginTop: "64px",
};

const cardStyle: React.CSSProperties = {
  background: "#090909",
  border: "1px solid rgba(212,175,55,0.2)",
  borderRadius: "28px",
  padding: "32px",
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: 900,
  marginBottom: "16px",
};

const cardDescriptionStyle: React.CSSProperties = {
  color: "#aaa",
  lineHeight: 1.6,
};