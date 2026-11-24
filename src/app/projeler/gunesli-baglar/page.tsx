import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Güneşli Bağlar Mahallesi Projesi",
  description:
    "Strova İnşaat'ın Bağcılar Güneşli Bağlar Mahallesi'ndeki kentsel dönüşüm projesi. Proje detayları yakında bu sayfada paylaşılacaktır.",
  alternates: {
    canonical: "/projeler/gunesli-baglar",
  },
};

export default function GunesliBaglarPage() {
  return (
    <div className="pt-[59px]">
      <section className="py-[80px] md:py-[120px] bg-black border-b border-[#292d30]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Link href="/projeler" className="inline-block text-[#a1a4a5] text-[14px] hover:text-[#f0f0f0] transition-colors mb-8">
            ← Projelere dön
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="border border-[#292d30] rounded-[6px] px-2 py-0.5 text-[12px] text-[#a1a4a5]">Kentsel Dönüşüm</span>
            <span className="text-[#3b9eff] text-[13px] font-medium">Başlıyor / Yakında</span>
          </div>
          <h1
            className="text-[44px] md:text-[64px] font-[400] leading-[1.05] tracking-[-0.04em] text-white mb-6 max-w-[800px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Güneşli Bağlar Mahallesi Projesi
          </h1>
          <p className="text-[#a1a4a5] text-[18px] leading-[1.6] max-w-[600px] font-light">
            Strova İnşaat güvencesiyle hayata geçirilecek projemize ait tüm detaylar çok yakında bu sayfada paylaşılacaktır.
          </p>
        </div>
      </section>

      <section className="py-[80px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[32px] font-[400] text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Proje hakkında bilgi alın
          </h2>
          <p className="text-[#a1a4a5] text-[16px] mb-8 font-light">Bu proje veya kendi yapınız için bizimle iletişime geçebilirsiniz.</p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 border border-[#3b9eff] rounded-[6px] px-8 py-3 text-[15px] font-medium text-white hover:bg-[#3b9eff]/10 transition-colors"
          >
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
