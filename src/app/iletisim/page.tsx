"use client";

import { useState } from "react";

export default function IletisimPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div className="pt-[59px]">
      <section className="py-[80px] md:py-[120px] bg-black border-b border-[#292d30]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-[#292d30] rounded-[10px] px-3 py-1.5 mb-8">
            <span className="text-[#a1a4a5] text-[13px] tracking-[0.05em]">İLETİŞİM</span>
          </div>
          <h1 className="text-[48px] md:text-[72px] font-[400] leading-[1] tracking-[-0.05em] text-white mb-6">
            Hayallerinizi<br />
            <span className="text-[#a1a4a5]">konuşalım</span>
          </h1>
          <p className="text-[#a1a4a5] text-[18px] leading-[1.6] max-w-[500px]">
            Projeniz hakkında bilgi almak, teklif istemek veya sadece merhaba demek için bize ulaşın.
          </p>
        </div>
      </section>

      <section className="py-[80px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Form Kısmı */}
            <div>
              <h2 className="text-white font-semibold text-[20px] mb-8">Mesaj Gönderin</h2>
              <form 
                action="https://formspree.io/f/xjgqaayv" 
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="ad" required placeholder="Adınız" className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] focus:outline-none" />
                  <input type="text" name="soyad" required placeholder="Soyadınız" className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] focus:outline-none" />
                </div>
                <input type="email" name="email" required placeholder="E-posta" className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] focus:outline-none" />
                <input type="tel" name="telefon" placeholder="Telefon" className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] focus:outline-none" />
                <select name="hizmet" className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] focus:outline-none">
                  <option value="Secilmedi">Hizmet Türü Seçiniz</option>
                  <option value="Konut Geliştirme">Konut Geliştirme & Satış</option>
                  <option value="Yatirim Danismanligi">Yatırım Danışmanlığı</option>
                </select>
                <textarea name="mesaj" required rows={4} placeholder="Mesajınız..." className="w-full bg-[#0b0e14] border border-[#292d30] rounded-[6px] px-4 py-2.5 text-[14px] text-[#f0f0f0] focus:outline-none resize-none"></textarea>
                
                <button type="submit" className="border border-[#3b9eff] rounded-[6px] px-6 py-3 text-[14px] font-medium text-white hover:bg-[#3b9eff]/10 transition-colors">
                  {status === "SUCCESS" ? "Mesajınız İletildi!" : "Mesaj Gönder →"}
                </button>
                {status === "ERROR" && <p className="text-red-500 text-[12px]">Bir hata oluştu, tekrar deneyin.</p>}
              </form>
            </div>

            {/* İletişim ve Sosyal Medya Kısmı */}
            <div>
              <h2 className="text-white font-semibold text-[20px] mb-8">İletişim Bilgileri</h2>
              <div className="flex flex-col gap-4 mb-12">
                <div className="border border-[#292d30] rounded-[12px] p-5 bg-[#0b0e14]">
                  <div className="text-[#6c6c6c] text-[12px] uppercase tracking-wider">Telefon</div>
                  <a href="tel:+905346300059" className="text-[#f0f0f0] hover:text-[#3b9eff]">+90 (534) 630 00 59</a>
                </div>
                <div className="border border-[#292d30] rounded-[12px] p-5 bg-[#0b0e14]">
                  <div className="text-[#6c6c6c] text-[12px] uppercase tracking-wider">E-posta</div>
                  <a href="mailto:strovainsaat@gmail.com" className="text-[#f0f0f0] hover:text-[#3b9eff]">strovainsaat@gmail.com</a>
                </div>
              </div>

              {/* Sosyal Medya */}
              <h2 className="text-white font-semibold text-[20px] mb-8">Bizi Takip Edin</h2>
              <div className="flex gap-4">
                {/* Instagram */}
                <a href="https://instagram.com/strovainsaat" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#0b0e14] border border-[#292d30] rounded-[12px] hover:border-[#3b9eff] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                {/* TikTok */}
                <a href="https://tiktok.com/@strovainsaat" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#0b0e14] border border-[#292d30] rounded-[12px] hover:border-[#3b9eff] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
                {/* X (Twitter) */}
                <a href="https://x.com/strovainsaat" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#0b0e14] border border-[#292d30] rounded-[12px] hover:border-[#3b9eff] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
