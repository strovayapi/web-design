import Link from "next/link";
import StrovaWordmark from "./StrovaWordmark";

// true: logodaki STROVA yazısı kullanılır. false: eski düz yazı ("STROVA") geri gelir.
const USE_LOGO_WORDMARK = true;

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/strovainsaat",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/strovainsaat",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/135265238",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@strovainsaat",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/strovainsaat",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#292d30] mt-auto bg-black">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Logo ve Marka Bilgisi */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              {USE_LOGO_WORDMARK ? (
                <StrovaWordmark className="h-[15px] w-auto text-white" />
              ) : (
                <span className="text-white font-semibold text-[16px] tracking-[0.15em] uppercase">
                  STROVA
                </span>
              )}
              <span className="text-[#a1a4a5] text-[11px] tracking-[0.2em] uppercase border-l border-[#292d30] pl-2">
                İnşaat
              </span>
            </div>
            <p className="text-[#a1a4a5] text-[14px] max-w-[260px] leading-[1.6]">
              Güvenilir yapı çözümleri ile hayallerinizi inşa ediyoruz.
            </p>
            <div className="flex gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 border border-[#292d30] rounded-[8px] text-[#a1a4a5] hover:text-white hover:border-[#464a4d] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
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
                href="mailto:info@strovainsaat.com"
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
