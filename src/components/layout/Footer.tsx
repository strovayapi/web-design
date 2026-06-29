import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#292d30] mt-auto bg-black">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Logo ve Marka Bilgisi */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-[16px] tracking-[0.15em] uppercase">
                STROVA
              </span>
              <span className="text-[#a1a4a5] text-[11px] tracking-[0.2em] uppercase border-l border-[#292d30] pl-2">
                İnşaat
              </span>
            </div>
            <p className="text-[#a1a4a5] text-[14px] max-w-[260px] leading-[1.6]">
              Güvenilir yapı çözümleri ile hayallerinizi inşa ediyoruz.
            </p>
          </div>

          {/* Menü Linkleri */}
          <div className="flex gap-12">
            
            {/* Kurumsal Menü */}
            <div className="flex flex-col gap-3">
              <span className="text-[#f0f0f0] text-[12px] font-semibold tracking-[0.05em] uppercase">
                Kurumsal
              </span>
              <Link
                href="/hizmetler"
                className="text-[#a1a4a5] text-[14px] hover:text-[#f0f0f0] transition-colors"
              >
                Hizmetler
              </Link>
              <Link
                href="/projeler"
                className="text-[#a1a4a5] text-[14px] hover:text-[#f0f0f0] transition-colors"
              >
                Projeler
              </Link>
              <Link
                href="/hakkimizda"
                className="text-[#a1a4a5] text-[14px] hover:text-[#f0f0f0] transition-colors"
              >
                Hakkımızda
              </Link>
            </div>

            {/* İletişim Menü */}
            <div className="flex flex-col gap-3">
              <span className="text-[#f0f0f0] text-[12px] font-semibold tracking-[0.05em] uppercase">
                İletişim
              </span>
              <a
                href="tel:+905346300059"
                className="text-[#a1a4a5] text-[14px] hover:text-[#f0f0f0] transition-colors"
              >
                Telefon
              </a>
              <a
                href="mailto:strovainsaat@gmail.com"
                className="text-[#a1a4a5] text-[14px] hover:text-[#f0f0f0] transition-colors"
              >
                E-posta
              </a>
              <a
                href="https://maps.app.goo.gl/16CSBFhN2VJwRCwJ7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a4a5] text-[14px] hover:text-[#f0f0f0] transition-colors"
              >
                Adres
              </a>
            </div>

          </div>
        </div>

        {/* Telif Hakları Alt Barı */}
        <div className="mt-10 pt-6 border-t border-[#292d30] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6c6c6c] text-[12px]">
            © {new Date().getFullYear()} Strova İnşaat. Tüm hakları saklıdır.
          </p>
          <p className="text-[#6c6c6c] text-[12px]">
            strovainsaat.com
          </p>
        </div>
      </div>
    </footer>
  );
}
