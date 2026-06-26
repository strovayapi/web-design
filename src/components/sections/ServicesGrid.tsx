import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Konut Projeleri",
    description:
      "Bireysel konutlardan büyük rezidans komplekslerine kadar tüm konut projelerinde kaliteli ve zamanında teslim.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Ticari Yapılar",
    description:
      "Ofis binaları, alışveriş merkezleri ve endüstriyel tesisler için kurumsal inşaat çözümleri.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Tadilat & Restorasyon",
    description:
      "Mevcut yapıların modernizasyonu, iç mimari düzenlemeleri ve tarihi yapıların restorasyonu.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Proje Yönetimi",
    description:
      "Planlama aşamasından teslimata kadar tüm süreçlerin profesyonel yönetimi ve koordinasyonu.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Altyapı Çalışmaları",
    description:
      "Yol, su, elektrik ve iletişim altyapısı projelerinde teknik uzmanlık ve güvenilir yürütme.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Danışmanlık",
    description:
      "İnşaat öncesi fizibilite, mühendislik danışmanlığı ve teknik destek hizmetleri.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-[96px] bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 border border-[#292d30] rounded-[10px] px-3 py-1.5 mb-6">
            <span className="text-[#a1a4a5] text-[13px] tracking-[0.05em]">
              HİZMETLERİMİZ
            </span>
          </div>
          <h2 className="text-[42px] md:text-[56px] font-[400] leading-[1] tracking-[-0.05em] text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}>
            Her ölçekte <br />
            <span className="text-[#a1a4a5]">inşaat çözümü</span>
          </h2>
          <p className="text-[#a1a4a5] text-[16px] leading-[1.6] max-w-[480px]">
            Uzman ekibimiz ve modern ekipmanlarımızla küçük tadilattan büyük
            altyapı projelerine kadar her ölçekte hizmet sunuyoruz.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#0b0e14] border border-[#292d30] rounded-[16px] p-8 group hover:border-[#3b9eff]/30 transition-colors duration-150"
            >
              <div className="text-white mb-4">{service.icon}</div>
              <h3 className="text-white font-semibold text-[16px] mb-3">
                {service.title}
              </h3>
              <p className="text-[#a1a4a5] text-[14px] leading-[1.6]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-[14px] text-[#a1a4a5] hover:text-[#f0f0f0] transition-colors"
          >
            Tüm hizmetleri incele →
          </Link>
        </div>
      </div>
    </section>
  );
}
