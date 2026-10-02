import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const hand = localFont({
  src: "../../node_modules/@fontsource/caveat/files/caveat-latin-600-normal.woff2",
  variable: "--font-caveat",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Ulagat Nurtas — @ulacoder",
  description: "Ulagat Nurtas (@ulacoder). 16, NIS Kokshetau. Robotics, AI and Veya, an affordable AI eye screening system.",
  openGraph: {
    title: "Ulagat Nurtas — @ulacoder",
    description: "Robotics, AI and Veya, an affordable AI eye screening system.",
    type: "website",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${hand.variable} antialiased`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
