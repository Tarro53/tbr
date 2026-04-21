import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TBR Tracker",
  description: "Spielpläne & Tabellen des TB Rohrbach",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TBR",
  },
  icons: {
    icon: "/logo-192.png",
    apple: "/logo-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-svh bg-tbr-black text-tbr-cream antialiased">
        {children}
      </body>
    </html>
  );
}
