"use client";

import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[59px] bg-black/80 backdrop-blur-[25px] border-b border-[#292d30]">
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo Bölümü: "STROVA | İNŞAAT" görseli buraya gelecek */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Strova İnşaat" 
            width={200}  // Genişliği biraz artırdık (Logonuzun orantısına göre 180-220 arası deneyebilirsiniz)
            height={40}  // Yüksekliği biraz artırdık
            className="h-[32px] w-auto object-contain object-left" // h-[32px] ile metin yüksekliğiyle tam uyum sağladık
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] transition-colors duration-150 ease-in ${
                pathname === link.href
                  ? "text-[#f0f0f0]"
                  : "text-[#f0f0f0]/70 hover:text-[#f0f0f0]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/iletisim"
            className="text-[14px] font-medium text-white border border-[#3b9eff] rounded-[6px] px-4 py-1.5 transition-colors duration-150 hover:bg-[#3b9eff]/10"
          >
            İletişim
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#f0f0f0] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç/kapat"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-b border-[#292d30] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-[#f0f0f0]/70 hover:text-[#f0f0f0]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="text-[14px] font-medium text-white border border-[#3b9eff] rounded-[6px] px-4 py-2 text-center"
            onClick={() => setMenuOpen(false)}
          >
            İletişim
          </Link>
        </div>
      )}
    </header>
  );
}
