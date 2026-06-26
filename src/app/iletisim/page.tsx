import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim & Hakkımızda",
  description: "Strova İnşaat ile iletişime geçin. Ücretsiz keşif ve danışmanlık için bize ulaşın.",
};

const teamMembers = [
  { name: "Ahmet Yılmaz", role: "Genel Müdür", experience: "25 yıl deneyim" },
  { name: "Mehmet Kaya", role: "Baş Mühendis", experience: "18 yıl deneyim" },
  { name: "Ayşe Demir", role: "Proje Koordinatörü", experience: "12 yıl deneyim" },
];

export default function IletisimPage() {
  return (
    <div className="pt-[59px]">
      {/* Hero */}
      <section className="py-[80px] md:py-[120px] bg-black border-b border-[#292d30]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-[#292d30] rounded-[10px] px-3 py-1.5 mb-8">
            <span className="text-[#a1a4a5] text-[13px] tracking-[0.05em]">İLETİŞİM & HAKKIMIZDA</span>
          </div>
          <h1
            className="text-[48px] md:text-[72px] font-[400] leading-[1] tracking-[-0.05em] text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hayallerinizi
            <br />
            <span className="text-[#a1a4a5]">konuşalım</span>
          </h1>
          <p className="text-[#a1a4a5] text-[18px] leading-[1.6] max-w-[500px]">
            Projeniz hakkında bilgi almak, teklif istemek veya sadece merhaba demek için bize ulaşın.
          </p>
        </div>
      </section>

      {/* Contact + About grid */}
      <section className="py-[80px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-white font-semibold text-[20px] mb-8">Mesaj Gönderin</h2>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#a1a4a5] text-[13px] mb-2">Ad</label>
                    <input
                      type="text"
                      placeholder="Adınız"
                      className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#6c6c6c] focus:outline-none focus:border-[#3b9eff] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#a1a4a5] text-[13px] mb-2">Soyad</label>
                    <input
                      type="text"
                      placeholder="Soyadınız"
                      className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#6c6c6c] focus:outline-none focus:border-[#3b9eff] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#a1a4a5] text-[13px] mb-2">E-posta</label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#6c6c6c] focus:outline-none focus:border-[#3b9eff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#a1a4a5] text-[13px] mb-2">Telefon</label>
                  <input
                    type="tel"
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#6c6c6c] focus:outline-none focus:border-[#3b9eff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#a1a4a5] text-[13px] mb-2">Hizmet Türü</label>
                  <select className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] focus:outline-none focus:border-[#3b9eff] transition-colors">
                    <option value="">Seçiniz</option>
                    <option>Konut Projesi</option>
                    <option>Ticari Yapı</option>
                    <option>Tadilat & Restorasyon</option>
                    <option>Altyapı</option>
                    <option>Danışmanlık</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#a1a4a5] text-[13px] mb-2">Mesajınız</label>
                  <textarea
                    rows={4}
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
                    className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#6c6c6c] focus:outline-none focus:border-[#3b9eff] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="border border-[#3b9eff] rounded-[6px] px-6 py-3 text-[14px] font-medium text-white hover:bg-[#3b9eff]/10 transition-colors text-left"
                >
                  Mesaj Gönder →
                </button>
              </form>
            </div>

            {/* Contact info + about */}
            <div className="flex flex-col gap-8">
              {/* Contact info */}
              <div>
                <h2 className="text-white font-semibold text-[20px] mb-6">İletişim Bilgileri</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Telefon", value: "+90 (XXX) XXX XX XX", href: "tel:+90XXXXXXXXXX" },
                    { label: "E-posta", value: "info@strovainsaat.com", href: "mailto:info@strovainsaat.com" },
                    { label: "Adres", value: "İstanbul, Türkiye", href: "#" },
                  ].map((item) => (
                    <div key={item.label} className="border border-[#292d30] rounded-[12px] p-4 bg-[#0b0e14]">
                      <div className="text-[#6c6c6c] text-[12px] mb-1">{item.label}</div>
                      <a
                        href={item.href}
                        className="text-[#f0f0f0] text-[15px] hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* About */}
              <div>
                <h2 className="text-white font-semibold text-[20px] mb-4">Hakkımızda</h2>
                <p className="text-[#a1a4a5] text-[15px] leading-[1.7] mb-6">
                  Strova İnşaat, 2004 yılında kurulmuş olup Türkiye&apos;nin önde gelen inşaat şirketleri arasında yer almaktadır. 20 yılı aşkın deneyimimizle konut, ticari ve altyapı projelerinde kaliteli çözümler sunmaktayız.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "20+", label: "Yıl" },
                    { value: "150+", label: "Proje" },
                    { value: "50+", label: "Uzman" },
                  ].map((stat) => (
                    <div key={stat.label} className="border border-[#292d30] rounded-[12px] p-4 bg-[#0b0e14] text-center">
                      <div className="text-white text-[24px] font-semibold mb-1">{stat.value}</div>
                      <div className="text-[#a1a4a5] text-[12px]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team */}
              <div>
                <h2 className="text-white font-semibold text-[20px] mb-4">Ekibimiz</h2>
                <div className="flex flex-col gap-3">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="flex items-center gap-4 border border-[#292d30] rounded-[12px] p-4 bg-[#0b0e14]">
                      <div className="w-10 h-10 rounded-full bg-[#292d30] flex items-center justify-center shrink-0">
                        <span className="text-[#a1a4a5] text-[14px] font-medium">
                          {member.name[0]}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-[14px] font-medium">{member.name}</div>
                        <div className="text-[#a1a4a5] text-[12px]">{member.role} · {member.experience}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
