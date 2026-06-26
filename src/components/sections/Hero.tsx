import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-[59px]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#292d30 1px, transparent 1px), linear-gradient(90deg, #292d30 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b9eff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 py-24 w-full">
        <div className="max-w-[700px]">
          {/* Announcement badge */}
          <div className="inline-flex items-center gap-2 border border-[#292d30] rounded-[10px] px-3 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3ad389]" />
            <span className="text-[#f0f0f0] text-[14px]">
              20+ yıllık deneyim ile güvenilir yapı çözümleri
            </span>
            <span className="text-[#a1a4a5]">→</span>
          </div>

          {/* Headline */}
          <h1
            className="text-[56px] md:text-[72px] font-[400] leading-[1] tracking-[-0.05em] text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hayallerinizi
            <br />
            <span className="text-[#a1a4a5]">İnşa Ediyoruz.</span>
          </h1>

          {/* Subtext */}
          <p className="text-[#a1a4a5] text-[18px] leading-[1.6] mb-10 max-w-[520px]">
            Konut, ticari ve altyapı projelerinde kalite ve güveni bir arada
            sunuyoruz. Her projede mükemmeliyeti hedefliyoruz.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 border border-[#3b9eff] rounded-[6px] px-6 py-2.5 text-[14px] font-medium text-white hover:bg-[#3b9eff]/10 transition-colors duration-150"
            >
              Projelerimizi Gör
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 text-[14px] text-[#f0f0f0]/70 hover:text-[#f0f0f0] transition-colors duration-150 py-2.5"
            >
              İletişime Geç →
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16 pt-10 border-t border-[#292d30]">
            {[
              { value: "20+", label: "Yıllık Deneyim" },
              { value: "150+", label: "Tamamlanan Proje" },
              { value: "50+", label: "Uzman Ekip" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[32px] font-semibold text-white leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-[#a1a4a5] text-[13px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
