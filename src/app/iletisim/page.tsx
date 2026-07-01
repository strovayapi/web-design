import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - Strova İnşaat",
  description: "Strova İnşaat ile iletişime geçin. Konut projelerimiz ve yatırım danışmanlığı hizmetlerimiz hakkında bilgi almak için bize ulaşın.",
};

export default function IletisimPage() {
  return (
    <div className="pt-[59px]">
      {/* Hero */}
      <section className="py-[80px] md:py-[120px] bg-black border-b border-[#292d30]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-[#292d30] rounded-[10px] px-3 py-1.5 mb-8">
            <span className="text-[#a1a4a5] text-[13px] tracking-[0.05em]">İLETİŞİM</span>
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

      {/* Contact Grid */}
      <section className="py-[80px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Sol Taraf: İletişim Formu */}
            <div>
              <h2 className="text-white font-semibold text-[20px] mb-8">Mesaj Gönderin</h2>
              <form 
                action="https://formspree.io/f/xjgqaayv" 
                method="POST"
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#a1a4a5] text-[13px] mb-2">Ad</label>
                    <input
                      type="text"
                      name="ad"
                      required
                      placeholder="Adınız"
                      className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#6c6c6c] focus:outline-none focus:border-[#3b9eff] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#a1a4a5] text-[13px] mb-2">Soyad</label>
                    <input
                      type="text"
                      name="soyad"
                      required
                      placeholder="Soyadınız"
                      className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#6c6c6c] focus:outline-none focus:border-[#3b9eff] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#a1a4a5] text-[13px] mb-2">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ornek@email.com"
                    className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#6c6c6c] focus:outline-none focus:border-[#3b9eff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#a1a4a5] text-[13px] mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="telefon"
                    placeholder="+90 534 630 00 59"
                    className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder-[#6c6c6c] focus:outline-none focus:border-[#3b9eff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#a1a4a5] text-[13px] mb-2">Hizmet Türü</label>
                  <select name="hizmet" className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] focus:outline-none focus:border-[#3b9eff] transition-colors">
                    <option value="Secilmedi">Seçiniz</option>
                    <option value="Konut Geliştirme">Konut Geliştirme & Satış</option>
                    <option value="Yatirim Danismanligi">Yatırım Danışmanlığı</option>
                    <option value="Diger">Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#a1a4a5] text-[13px] mb-2">Mesajınız</label>
                  <textarea
                    name="mesaj"
                    required
                    rows={4}
                    placeholder="Mesajınızı buraya yazın..."
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

            {/* Sağ Taraf: Sadece İletişim Bilgileri */}
            <div>
              <h2 className="text-white font-semibold text-[20px] mb-8">İletişim Bilgileri</h2>
              <div className="flex flex-col gap-4">
                <div className="border border-[#292d30] rounded-[12px] p-5 bg-[#0b0e14]">
                  <div className="text-[#6c6c6c] text-[12px] mb-1.5 uppercase tracking-wider font-medium">Telefon</div>
                  <a href="tel:+905346300059" className="text-[#f0f0f0] text-[16px] hover:text-[#3b9eff] transition-colors font-mono">+90 (534) 630 00 59</a>
                </div>
                <div className="border border-[#292d30] rounded-[12px] p-5 bg-[#0b0e14]">
                  <div className="text-[#6c6c6c] text-[12px] mb-1.5 uppercase tracking-wider font-medium">E-posta</div>
                  <a href="mailto:strovainsaat@gmail.com" className="text-[#f0f0f0] text-[16px] hover:text-[#3b9eff] transition-colors">strovainsaat@gmail.com</a>
                </div>
                <div className="border border-[#292d30] rounded-[12px] p-5 bg-[#0b0e14]">
                  <div className="text-[#6c6c6c] text-[12px] mb-1.5 uppercase tracking-wider font-medium">Adres</div>
                  <a href="#" className="text-[#f0f0f0] text-[15px] hover:text-[#3b9eff] transition-colors block leading-relaxed">
                    Bağlar Mahallesi, 48. Sokak No: 48, Güneşli, Bağcılar/İstanbul 34212
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
