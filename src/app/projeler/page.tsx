import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projeler",
  description: "Strova İnşaat tarafından tamamlanan konut, ticari ve altyapı projeleri.",
};

const projects = [
  {
    id: 1,
    title: "48. Sokak No.48 Projesi",
    category: "Konut",
    year: "2024",
    location: "İstanbul",
    description:
      "Modern mimari anlayışıyla tasarlanmış, 24 daireli konut kompleksi. Çevre dostu malzemeler ve akıllı ev sistemleriyle donatılmış.",
    tags: ["Konut", "Modern Mimari", "Akıllı Ev"],
  },
  {
    id: 2,
    title: "Merkez Plaza Ofis Binası",
    category: "Ticari",
    year: "2023",
    location: "Ankara",
    description:
      "15 katlı, A+ enerji sertifikalı ofis binası. 8.000 m² kiralık ofis alanı, çok katlı otopark ve ticari zemin kat.",
    tags: ["Ticari", "Ofis", "A+ Enerji"],
  },
  {
    id: 3,
    title: "Kentsel Altyapı Yenileme",
    category: "Altyapı",
    year: "2023",
    location: "İzmir",
    description:
      "12 km uzunluğundaki kentsel altyapı modernizasyon projesi. Su, kanalizasyon ve fiber optik altyapısı yenilendi.",
    tags: ["Altyapı", "Kentsel", "Modernizasyon"],
  },
  {
    id: 4,
    title: "Deniz Kenarı Villaları",
    category: "Konut",
    year: "2022",
    location: "Muğla",
    description:
      "Ege kıyısında 8 adet lüks villa projesi. Her villa özel havuz ve deniz manzarasına sahip.",
    tags: ["Villa", "Lüks", "Kıyı"],
  },
  {
    id: 5,
    title: "Endüstriyel Depo & Lojistik",
    category: "Endüstriyel",
    year: "2022",
    location: "Bursa",
    description:
      "25.000 m² kapalı alan, modern depo ve lojistik merkezi. Soğuk hava deposu ve ofis alanları dahil.",
    tags: ["Endüstriyel", "Depo", "Lojistik"],
  },
  {
    id: 6,
    title: "Okul Kompleksi Restorasyon",
    category: "Restorasyon",
    year: "2021",
    location: "İstanbul",
    description:
      "1930'lardan kalma tarihi okul binasının restorasyon projesi. Özgün mimari korunarak modern iç mekan tasarımı uygulandı.",
    tags: ["Restorasyon", "Tarihi Yapı", "Eğitim"],
  },
];

const categories = ["Tümü", "Konut", "Ticari", "Altyapı", "Endüstriyel", "Restorasyon"];

export default function ProjelerPage() {
  return (
    <div className="pt-[59px]">
      {/* Hero */}
      <section className="py-[80px] md:py-[120px] bg-black border-b border-[#292d30]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-[#292d30] rounded-[10px] px-3 py-1.5 mb-8">
            <span className="text-[#a1a4a5] text-[13px] tracking-[0.05em]">PROJELERİMİZ</span>
          </div>
          <h1
            className="text-[48px] md:text-[72px] font-[400] leading-[1] tracking-[-0.05em] text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tamamlanan
            <br />
            <span className="text-[#a1a4a5]">işlerimiz</span>
          </h1>
          <p className="text-[#a1a4a5] text-[18px] leading-[1.6] max-w-[500px]">
            150+ tamamlanan proje ile Türkiye&apos;nin dört bir yanında kaliteli yapılar inşa ettik.
          </p>
        </div>
      </section>

      {/* Filter categories */}
      <section className="py-8 bg-black border-b border-[#292d30] sticky top-[59px] z-40 backdrop-blur-[25px] bg-black/90">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 border rounded-[6px] px-4 py-1.5 text-[13px] transition-colors ${
                  cat === "Tümü"
                    ? "border-[#3b9eff] text-white"
                    : "border-[#292d30] text-[#a1a4a5] hover:border-[#464a4d] hover:text-[#f0f0f0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-[64px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#0b0e14] border border-[#292d30] rounded-[16px] overflow-hidden hover:border-[#464a4d] transition-colors duration-150"
              >
                {/* Image placeholder */}
                <div className="h-[200px] bg-[#1b1b1b] border-b border-[#292d30] flex items-center justify-center">
                  <span className="text-[#464a4d] text-[13px]">Fotoğraf eklenecek</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="border border-[#292d30] rounded-[6px] px-2 py-0.5 text-[11px] text-[#a1a4a5]">
                      {project.category}
                    </span>
                    <span className="text-[#6c6c6c] text-[12px]">{project.year}</span>
                  </div>
                  <h2 className="text-white font-medium text-[16px] mb-2 group-hover:text-[#f0f0f0]">
                    {project.title}
                  </h2>
                  <p className="text-[#a1a4a5] text-[14px] leading-[1.6] mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6c6c6c] text-[13px]">📍 {project.location}</span>
                    <span className="text-[#a1a4a5] text-[13px] group-hover:text-[#f0f0f0] transition-colors">
                      Detaylar →
                    </span>
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
            Bir sonraki projeniz için hazırız
          </h2>
          <p className="text-[#a1a4a5] text-[16px] mb-8">Hayalinizeki projeyi birlikte hayata geçirelim.</p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 border border-[#3b9eff] rounded-[6px] px-8 py-3 text-[15px] font-medium text-white hover:bg-[#3b9eff]/10 transition-colors"
          >
            Teklif Al
          </Link>
        </div>
      </section>
    </div>
  );
}
