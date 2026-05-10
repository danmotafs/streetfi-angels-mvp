import type { Metadata } from "next";
import "./globals.css";

import Providers from "./providers";
import AppWalletProvider from "../components/WalletProvider";

export const metadata: Metadata = {
  title: "StreetFi Angels",

  description:
    "AI-powered SocialFi infrastructure on Solana transforming real informal merchants into investable digital identities.",

  keywords: [
    "Solana",
    "SocialFi",
    "NFT",
    "AI",
    "Web3",
    "StreetFi Angels",
  ],

  authors: [
    {
      name: "Daniel Mota Ferreira",
    },
  ],

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
      <body>
        <Providers>
          <AppWalletProvider>
            {children}
          </AppWalletProvider>
        </Providers>
      </body>
    </html>
  );
}