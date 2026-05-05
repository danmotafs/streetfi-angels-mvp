import "./globals.css";

export const metadata = {
  title: "StreetFi Angels",
  description: "SocialFi for real-world merchants",
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
