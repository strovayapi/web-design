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
    url: "https://www.strovainsaat.com",
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
    "@type": "Organization",
    "name": "Strova İnşaat",
    "alternateName": ["Strova İnsaat", "Strova Yapı", "Strova Yapi", "Strovainsaat"],
    "url": "https://www.strovainsaat.com", // Kendi adresinizle güncelleyin
    "logo": "https://www.strovainsaat.com/strova32x32.svg" // Kendi adresinizle güncelleyin
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
