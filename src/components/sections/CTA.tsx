import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-[96px] bg-black border-t border-[#292d30]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border border-[#292d30] rounded-[24px] p-12 md:p-16 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#3b9eff]/8 blur-[80px] pointer-events-none" />

          <div className="relative">
            <h2
              className="text-[40px] md:text-[56px] font-[400] leading-[1] tracking-[-0.05em] text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Projenizi birlikte
              <br />
              <span className="text-[#a1a4a5]">hayata geçirelim</span>
            </h2>
            <p className="text-[#a1a4a5] text-[16px] leading-[1.6] mb-10 max-w-[440px] mx-auto">
              Ücretsiz keşif ve danışmanlık için bugün bize ulaşın. Uzman
              ekibimiz projenizi değerlendirsin.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 border border-[#3b9eff] rounded-[6px] px-8 py-3 text-[15px] font-medium text-white hover:bg-[#3b9eff]/10 transition-colors"
              >
                Ücretsiz Keşif Talep Et
              </Link>
              <Link
                href="/projeler"
                className="inline-flex items-center gap-2 text-[15px] text-[#a1a4a5] hover:text-[#f0f0f0] transition-colors py-3"
              >
                Projelerimize Bak →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
