import "./globals.css";

import type { Metadata } from "next";

import Providers from "./providers";
import AppWalletProvider from "../components/WalletProvider";

export const metadata: Metadata = {
  title: "StreetFi Angels",
  description: "StreetFi Angels MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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