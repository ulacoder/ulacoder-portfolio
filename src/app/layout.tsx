import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ulagat Nurtas — @ulacoder",
  description: "Embedded AI & Robotics. NIS student building eye-tracking glasses, rescue drones and computer-vision apps.",
  openGraph: {
    title: "Ulagat Nurtas — @ulacoder",
    description: "Embedded AI & Robotics. 1st at Future Minds, 2nd at WRO 2026 regional.",
    type: "website",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
