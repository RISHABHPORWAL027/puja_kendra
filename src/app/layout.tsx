import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileWhatsAppCTA } from "@/components/layout/MobileWhatsAppCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#451a03",
};

export const metadata: Metadata = {
  title: {
    default: "Puja Kendra | Book Panditji for Puja, Havan, Kundli & Muhurat",
    template: "%s | Puja Kendra"
  },
  description: "Your place for Puja, Panditji & Vedic Services. Book experienced Pandits for Home Puja, Online Puja, Griha Pravesh, Havan, Kundli & Muhurat.",
  keywords: ["Puja Kendra", "Book Panditji", "Panditji online", "Griha Pravesh Puja", "Satyanarayan Katha", "Online Puja", "Kundli Analysis", "Muhurat"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pujakendra.com"),
  openGraph: {
    title: "Puja Kendra | Puja • Panditji • Kundli • Muhurat",
    description: "Book Panditji for Puja, Havan, Griha Pravesh, Festivals, Special Occasions and Online Puja.",
    siteName: "Puja Kendra",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-slate-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileWhatsAppCTA />
      </body>
    </html>
  );
}
