import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Strova İnşaat",
    template: "%s | Strova İnşaat",
  },
  description:
    "Strova İnşaat; modern konut geliştirme, güvenilir kentsel dönüşüm, bina yapım ve gayrimenkul yatırım danışmanlığı alanlarında kurumsal çözümler sunar.",
  keywords: [
    "inşaat", 
    "kentsel dönüşüm",
    "yapı",
    "bina",
    "yapım",
    "yıkım",
    "konut geliştirme", 
    "konut projesi", 
    "yatırım danışmanlığı", 
    "strova", 
    "strova inşaat"
  ],
  openGraph: {
    title: "Strova İnşaat",
    description: "Konut Geliştirme, Kentsel Dönüşüm & Yapı Çözümleri",
    locale: "tr_TR",
    type: "website",
    // Link paylaşıldığında çıkacak resmi buraya tanımlıyoruz:
    images: [
      {
        url: "/opengraph-image.png", // public klasörüne attığınız resmin adı ve uzantısı
        width: 1200,
        height: 630,
        alt: "Strova İnşaat",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-[#f0f0f0]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
