import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Strova İnşaat'ın sunduğu konut, ticari yapı, tadilat, proje yönetimi ve altyapı hizmetleri.",
};

const services = [
  {
    number: "01",
    title: "Konut Projeleri",
    description:
      "Bireysel villa ve konutlardan büyük ölçekli rezidans komplekslerine kadar tüm konut projelerinde kaliteli ve zamanında teslim garantisi veriyoruz. Modern mimari anlayışı ve sürdürülebilir malzemelerle her detaya özen gösteriyoruz.",
    items: ["Villa & Müstakil Konut", "Apartman & Rezidans", "Sosyal Konut Projeleri", "Lüks Konut"],
  },
  {
    number: "02",
    title: "Ticari Yapılar",
    description:
      "Ofis binaları, alışveriş merkezleri, oteller ve endüstriyel tesisler için kurumsal inşaat çözümleri sunuyoruz. İş dünyasının ihtiyaçlarını karşılayan fonksiyonel ve estetik yapılar inşa ediyoruz.",
    items: ["Ofis & İş Merkezi", "AVM & Ticaret Merkezi", "Otel & Konaklama", "Fabrika & Depo"],
  },
  {
    number: "03",
    title: "Tadilat & Restorasyon",
    description:
      "Mevcut yapıların modernizasyonu, iç mekan düzenlemeleri ve tarihi yapıların restorasyonu konusunda uzman kadromuzla hizmet veriyoruz.",
    items: ["İç Mekan Tadilat", "Cephe Yenileme", "Tarihi Yapı Restorasyonu", "Kentsel Dönüşüm"],
  },
  {
    number: "04",
    title: "Proje Yönetimi",
    description:
      "Planlama aşamasından teslimata kadar tüm süreçlerin profesyonel yönetimi. Zaman, maliyet ve kalite dengesi gözetilerek her projeyi en verimli şekilde yürütüyoruz.",
    items: ["Fizibilite Analizi", "İnşaat Yönetimi", "Maliyet Kontrolü", "Kalite Denetimi"],
  },
  {
    number: "05",
    title: "Altyapı Çalışmaları",
    description:
      "Yol, su, elektrik ve iletişim altyapısı projelerinde teknik uzmanlık ve güvenilir yürütme kapasitemizle şehirlerin gelişimine katkı sağlıyoruz.",
    items: ["Yol & Köprü", "Su & Kanalizasyon", "Enerji Altyapısı", "Peyzaj & Çevre Düzeni"],
  },
  {
    number: "06",
    title: "Mühendislik Danışmanlığı",
    description:
      "İnşaat öncesi fizibilite çalışmaları, yapısal mühendislik danışmanlığı ve teknik destek hizmetleriyle projenizin sağlam temellere oturmasını sağlıyoruz.",
    items: ["Yapısal Analiz", "Zemin Etüdü", "İzin & Ruhsat", "Teknik Müşavirlik"],
  },
];

export default function HizmetlerPage() {
  return (
    <div className="pt-[59px]">
      {/* Hero */}
      <section className="py-[80px] md:py-[120px] bg-black border-b border-[#292d30]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-[#292d30] rounded-[10px] px-3 py-1.5 mb-8">
            <span className="text-[#a1a4a5] text-[13px] tracking-[0.05em]">HİZMETLERİMİZ</span>
          </div>
          <h1
            className="text-[48px] md:text-[72px] font-[400] leading-[1] tracking-[-0.05em] text-white mb-6 max-w-[700px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Her ölçekte
            <br />
            <span className="text-[#a1a4a5]">inşaat çözümü</span>
          </h1>
          <p className="text-[#a1a4a5] text-[18px] leading-[1.6] max-w-[500px]">
            20 yıllık deneyimimiz ve uzman kadromuzla küçük tadilattan büyük altyapı projelerine kadar her ihtiyacınızı karşılıyoruz.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-[80px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-px border border-[#292d30] rounded-[16px] overflow-hidden">
            {services.map((service) => (
              <div key={service.number} className="bg-[#0b0e14] p-8 md:p-10 border-b border-[#292d30] last:border-b-0 group">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  <div className="shrink-0">
                    <span className="text-[#6c6c6c] text-[13px] font-mono">{service.number}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-white font-semibold text-[20px] mb-4">{service.title}</h2>
                    <p className="text-[#a1a4a5] text-[15px] leading-[1.6] mb-6 max-w-[560px]">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="border border-[#292d30] rounded-[6px] px-3 py-1 text-[12px] text-[#a1a4a5]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] bg-black border-t border-[#292d30]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[36px] font-[400] text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Projeniz için teklif alın
          </h2>
          <p className="text-[#a1a4a5] text-[16px] mb-8">Ücretsiz keşif ve danışmanlık için bugün bize ulaşın.</p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 border border-[#3b9eff] rounded-[6px] px-8 py-3 text-[15px] font-medium text-white hover:bg-[#3b9eff]/10 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
}
