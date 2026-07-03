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
  icons: {
    icon: [
      { url: "/strova32x32.svg", type: "image/svg+xml" },
    ],
    shortcut: "/strova32x32.svg",
    apple: "/strova32x32.svg",
  },
  keywords: [
    "inşaat", "kentsel dönüşüm", "yapı", "bina", "yapım", "yıkım",
    "konut geliştirme", "konut projesi", "yatırım danışmanlığı", 
    "strova", "strova inşaat", "strova insaat", "strova yapi", 
    "strova yapı", "strovainsaat", "strovainsaat", "strova yapı inşaat"
  ],
  openGraph: {
    title: "Strova İnşaat",
    description: "Konut Geliştirme, Kentsel Dönüşüm & Yapı Çözümleri",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpeg",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Strova İnşaat",
              "alternateName": ["Strova İnsaat", "Strova Yapı", "Strova Yapi", "Strovainsaat"],
              "url": "https://www.strovainsaat.com", // BURAYI GERÇEK DOMAIN'İNİZLE DEĞİŞTİRİN
              "logo": "https://www.strovainsaat.com/strova32x32.svg" // BURAYI GERÇEK DOMAIN'İNİZLE DEĞİŞTİRİN
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-[#f0f0f0]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
