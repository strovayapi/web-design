import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Strova İnşaat modern konut geliştirme, kentsel dönüşüm, güvenli yapım ve yıkım işleri ile gayrimenkul yatırım danışmanlığı hizmetleri sunmaktadır.",
};

const services = [
  {
    number: "01",
    title: "Konut Geliştirme & Projeler",
    description:
      "Modern mimari anlayışı, kaliteli işçilik ve güvenilir yapı felsefesiyle yaşam kalitesini artıran konut projeleri üretiyoruz. Estetik ve fonksiyonelliği harmanlayarak geleceğin ihtiyaçlarına cevap veren yaşam alanları tasarlıyoruz.",
    items: ["Lüks Konut Projeleri", "Villa & Müstakil Evler", "Modern Rezidanslar", "Konut Satış & Pazarlama"],
  },
  {
    number: "02",
    title: "Kentsel Dönüşüm",
    description:
      "Eski ve depreme dayanıksız yapıları, en güncel mühendislik standartlarına ve modern mimariye uygun, güvenli yaşam alanlarına dönüştürüyoruz. Süreci başından sonuna kadar şeffaf ve hukuki kurallara tam uyumlu şekilde yönetiyoruz.",
    items: ["Riskli Yapı Tespiti", "Hak Sahipleri Uzlaşma", "Projelendirme & Ruhsat", "Yeniden Yapım Süreçleri"],
  },
  {
    number: "03",
    title: "Yapım & İnşaat İşleri",
    description:
      "Çağdaş mühendislik teknikleri ve birinci sınıf malzeme seçimiyle, projelendirilen konutların anahtar teslim yapım süreçlerini üstleniyoruz. Söz verdiğimiz takvime sadık kalarak güvenli yapılar inşa ediyoruz.",
    items: ["Kaba & İnce İnşaat", "Anahtar Teslim Yapım", "Teknik Uygulama", "İş Güvenliği & Denetim"],
  },
  {
    number: "04",
    title: "Güvenli Yıkım Hizmetleri",
    description:
      "Kentsel dönüşüm veya yeniden yapım projeleri kapsamında, çevreye ve çevre binalara zarar vermeden, tüm güvenlik önlemlerini alarak profesyonel yıkım ve hafriyat süreçlerini yürütüyoruz.",
    items: ["Çevre Güvenlik Önlemleri", "Yıkım Ruhsatı & İzinler", "Kontrollü Yıkım", "Hafriyat & Atık Yönetimi"],
  },
  {
    number: "05",
    title: "Gayrimenkul Yatırım Danışmanlığı",
    description:
      "Konut sektöründeki derin bilgi birikimimizle, yatırım değeri yüksek ve kalıcı değer üretecek projeler için profesyonel pazar analizi ve gayrimenkul danışmanlığı hizmeti sağlıyoruz.",
    items: ["Fizibilite & Pazar Analizi", "Değerleme Danışmanlığı", "Yatırım Stratejileri", "Doğru Lokasyon Analizi"],
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
            Nitelikli ve Güvenilir
            <br />
            <span className="text-[#a1a4a5]">Yapı Çözümleri</span>
          </h1>
          <p className="text-[#a1a4a5] text-[18px] leading-[1.6] max-w-[550px]">
            Kalite, güven ve sürdürülebilirlik ilkeleriyle konut geliştirme, kentsel dönüşüm ve yatırım danışmanlığında kurumsal çözümler sunuyoruz.
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
            Projeniz için görüşelim
          </h2>
          <p className="text-[#a1a4a5] text-[16px] mb-8">Kentsel dönüşüm ve konut projelerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.</p>
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
