import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreetFi Angels",
  description:
    "AI-powered SocialFi infrastructure on Solana transforming real informal merchants into investable digital identities.",

  keywords: [
    "Solana",
    "SocialFi",
    "Web3",
    "NFT",
    "AI",
    "StreetFi Angels",
    "Blockchain",
    "Digital Identity",
  ],

  authors: [{ name: "Daniel Mota Ferreira" }],

  openGraph: {
    title: "StreetFi Angels",
    description:
      "AI-powered SocialFi infrastructure on Solana transforming real informal merchants into investable digital identities.",
    url: "https://streetfi-angels-mvp.vercel.app",
    siteName: "StreetFi Angels",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "StreetFi Angels",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "StreetFi Angels",
    description:
      "AI-powered SocialFi infrastructure on Solana transforming real informal merchants into investable digital identities.",
    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}