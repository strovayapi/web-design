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
    default: "Strova İnşaat | Güvenilir İnşaat Çözümleri",
    template: "%s | Strova İnşaat",
  },
  description:
    "Strova İnşaat olarak konut, ticari ve altyapı projelerinde kaliteli ve güvenilir çözümler sunuyoruz.",
  keywords: ["inşaat", "yapı", "konut", "ticari", "proje", "strova"],
  openGraph: {
    title: "Strova İnşaat",
    description: "Güvenilir İnşaat Çözümleri",
    locale: "tr_TR",
    type: "website",
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
