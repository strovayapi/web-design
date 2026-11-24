import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Kentsel dönüşümde kat karşılığı yapım, ücret karşılığı anahtar teslim bina ve villa yapımı, mevcut yapılarda iç ve dış cephe inşaat işleri. Strova İnşaat; Bağcılar, Güneşli ve İstanbul genelinde hizmet verir.",
  alternates: {
    canonical: "/hizmetler",
  },
};

const services = [
  {
    number: "01",
    title: "Kentsel Dönüşüm – Kat Karşılığı Yapım",
    description:
      "Eski ve depreme dayanıksız yapıları, arsa ve bina sahipleriyle kat karşılığı modelde yeniliyoruz. Yapının maliyetini biz üstleniyor, karşılığında sözleşmede belirlenen bağımsız bölümleri alıyoruz. Riskli yapı tespitinden ruhsata ve teslime kadar tüm süreci şeffaf, hukuki kurallara uygun ve inşaat mühendisi gözetiminde yürütüyoruz.",
    items: ["Riskli Yapı Tespiti", "Hak Sahipleri Uzlaşma", "Kat Karşılığı Sözleşme", "Projelendirme & Ruhsat", "Yeniden Yapım Süreçleri"],
  },
  {
    number: "02",
    title: "Ücret Karşılığı Yapım",
    description:
      "Yapının sahibi sizsiniz, inşaatını biz üstleniyoruz. Kentsel dönüşüm kapsamındaki binalardan villa ve müstakil evlere kadar yapımı, sözleşmede belirlenen bedel karşılığında mal sahibi adına anahtar teslim gerçekleştiriyoruz. Söz verdiğimiz takvime sadık kalarak güvenli yapılar inşa ediyoruz.",
    items: ["Villa & Müstakil Evler", "Kaba & İnce İnşaat", "Anahtar Teslim Yapım", "Teknik Uygulama", "İş Güvenliği & Denetim"],
  },
  {
    number: "03",
    title: "Mevcut Yapılarda İnşaat İşleri",
    description:
      "Mevcut binalarda iç ve dış cephe dahil tüm inşaat işlerini üstleniyoruz. Yapınızı ihtiyaçlarınıza göre yeniliyor, işin her aşamasını mühendislik disipliniyle planlayıp uyguluyoruz.",
    items: ["İç Mekân İnşaat İşleri", "Dış Cephe İşleri", "Tadilat & Yenileme"],
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
            Kalite, güven ve sürdürülebilirlik ilkeleriyle kentsel dönüşüm, kat karşılığı ve ücret karşılığı yapım ile mevcut yapılardaki inşaat işlerinde kurumsal çözümler sunuyoruz.
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
