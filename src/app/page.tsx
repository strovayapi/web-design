import type { Metadata } from "next";
import Link from "next/link";

// Sayfa açıkken tarayıcı sekmesinde "Strova İnşaat" yazmasını sağlayan SEO ayarı
export const metadata: Metadata = {
  title: "Strova İnşaat",
  title: {
    absolute: "Strova İnşaat", // Diğer şablonları ezip sadece bu ismin görünmesini sağlar
  },
};

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen flex flex-col justify-center pt-[59px]">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1200px] mx-auto px-6 py-[120px] md:py-[180px] flex flex-col justify-center">
        {/* Küçük Üst Başlık / Rozet */}
        <div className="inline-flex items-center gap-2 border border-[#292d30] rounded-[10px] px-3 py-1.5 mb-8 w-fit">
          <span className="text-[#a1a4a5] text-[12px] tracking-[0.1em] font-mono uppercase">
            Kentsel Dönüşüm & Konut Geliştirme
          </span>
        </div>

        {/* Ana Slogan */}
        <h1 
          className="text-[44px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-[400] leading-[1.05] tracking-[-0.04em] text-white max-w-[900px] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Geleceğin güvenli
          <br />
          <span className="text-[#a1a4a5]">yapılarını inşa ediyoruz.</span>
        </h1>

        {/* Kısa Tanıtım Metni */}
        <p className="text-[#a1a4a5] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] max-w-[600px] mb-12 font-light">
          Strova İnşaat olarak, modern mimariyi kaliteli işçilik ve güvenilir kentsel dönüşüm anlayışıyla buluşturuyoruz. Yaşam kalitesini artıran ve değer üreten projeler geliştiriyoruz.
        </p>

        {/* Aksiyon Butonları */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projeler"
            className="text-[14px] font-medium text-black bg-white hover:bg-[#f0f0f0] rounded-[6px] px-8 py-3.5 transition-colors duration-150"
          >
            Projelerimizi İnceleyin
          </Link>
          <Link
            href="/hizmetler"
            className="text-[14px] font-medium text-white border border-[#292d30] hover:border-[#464a4d] rounded-[6px] px-8 py-3.5 transition-colors duration-150"
          >
            Hizmetlerimiz
          </Link>
        </div>
      </section>
    </main>
  );
}
