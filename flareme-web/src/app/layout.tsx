import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "FlareMe | AI Fraud Detection for eCommerce",
  description: "Protect your store from AI-generated return fraud. FlareMe detects manipulated return images instantly to protect your revenue and brand reputation.",
  openGraph: {
    title: "FlareMe | AI Fraud Detection",
    description: "Detect AI-manipulated return images before they cost you money.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/30`}
      >
        <div className="glow-bg" />
        {children}
      </body>
    </html>
  );
}
