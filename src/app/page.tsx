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
    default: "Strova İnşaat | Konut Geliştirme, Kentsel Dönüşüm & Yatırım",
    template: "%s | Strova İnşaat",
  },
  description:
    "Strova İnşaat olarak, modern mimariyi kaliteli işçilik ve güvenilir yapı anlayışıyla buluşturuyoruz. Konforlu, estetik ve sürdürülebilir yaşam alanları tasarlayarak, yalnızca bugünün değil geleceğin ihtiyaçlarına da cevap veren projeler geliştiriyoruz. Her projemizde müşteri memnuniyetini ön planda tutuyor; şeffaf, güvenilir ve yenilikçi yaklaşımımızla yaşam kalitesini artıran yapılar inşa ediyoruz. Kalıcı değer üretme vizyonumuzla, güvenle yaşayabileceğiniz ve yatırım değeri yüksek projelere imza atmaya devam ediyoruz.",
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
    description: 
      "Strova İnşaat olarak, modern mimariyi kaliteli işçilik ve güvenilir yapı anlayışıyla buluşturuyoruz. Konforlu, estetik ve sürdürülebilir yaşam alanları tasarlayarak yaşam kalitesini artıran yapılar inşa ediyoruz.",
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
