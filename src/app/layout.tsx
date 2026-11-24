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
  metadataBase: new URL("https://www.strovainsaat.com"),
  title: {
    default: "Strova İnşaat",
    template: "%s | Strova İnşaat",
  },
  description:
    "Strova İnşaat; İstanbul Bağcılar ve Güneşli başta olmak üzere kentsel dönüşüm, kat karşılığı ve ücret karşılığı bina yapımı, anahtar teslim konut projeleri ve gayrimenkul yatırım danışmanlığı alanlarında hizmet veren inşaat ve müteahhitlik firmasıdır.",
  icons: {
    icon: [{ url: "/strova32x32.svg", type: "image/svg+xml" }],
    shortcut: "/strova32x32.svg",
    apple: "/strova32x32.svg",
  },
  keywords: [
    "inşaat", "kentsel dönüşüm", "yapı", "bina", "yapım", "yıkım",
    "konut geliştirme", "konut projesi", "yatırım danışmanlığı", 
    "strova", "strova inşaat", "strova insaat", "strova yapi", 
    "strova yapı", "strovainsaat", "strova yapı inşaat",
    "kat karşılığı", "kat karşılığı inşaat", "kat karşılığı müteahhit",
    "ücret karşılığı inşaat", "anahtar teslim inşaat", "müteahhit", "istanbul müteahhit",
    "bağcılar inşaat", "bağcılar müteahhit", "bağcılar kentsel dönüşüm",
    "güneşli inşaat", "güneşli müteahhit", "güneşli kentsel dönüşüm"
  ],
  openGraph: {
    title: "Strova İnşaat",
    description: "Konut Geliştirme, Kentsel Dönüşüm & Yapı Çözümleri",
    siteName: "Strova İnşaat",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://www.strovainsaat.com/#organization",
    "name": "Strova İnşaat",
    "alternateName": ["Strova İnsaat", "Strova Yapı", "Strova Yapi", "Strovainsaat"],
    "url": "https://www.strovainsaat.com",
    "logo": "https://www.strovainsaat.com/logo.png",
    "image": "https://www.strovainsaat.com/opengraph-image.jpeg",
    "description":
      "İstanbul Bağcılar ve Güneşli başta olmak üzere kentsel dönüşüm, kat karşılığı ve ücret karşılığı bina yapımı ile anahtar teslim konut projeleri yürüten inşaat ve müteahhitlik firması.",
    "telephone": "+90 534 630 00 59",
    "email": "info@strovainsaat.com",
    "foundingDate": "2026-02",
    "founder": {
      "@type": "Person",
      "name": "Alper Sevimli",
      "jobTitle": "İnşaat Mühendisi",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bağcılar",
      "addressRegion": "İstanbul",
      "addressCountry": "TR",
    },
    "areaServed": [
      { "@type": "City", "name": "İstanbul" },
      { "@type": "AdministrativeArea", "name": "Bağcılar" },
      { "@type": "Place", "name": "Güneşli" },
    ],
    "knowsAbout": [
      "Kentsel dönüşüm",
      "Kat karşılığı inşaat",
      "Ücret karşılığı inşaat",
      "Anahtar teslim konut yapımı",
      "Bina yıkımı",
    ],
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.instagram.com/strovainsaat",
      "https://www.facebook.com/strovainsaat",
      "https://x.com/strovainsaat",
      "https://www.tiktok.com/@strovainsaat",
    ],
  };

  return (
    <html
      lang="tr"
      className={`${inter.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-[#f0f0f0]">
        {/* Yapılandırılmış veri: sunucuda HTML'e yazılır, Google doğrudan okur */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
