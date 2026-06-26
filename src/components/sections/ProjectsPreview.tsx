import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "48. Sokak No.48 Projesi",
    category: "Konut",
    year: "2024",
    location: "İstanbul",
    description: "Modern mimari anlayışıyla tasarlanmış konut kompleksi.",
    color: "#1b1b1b",
  },
  {
    id: 2,
    title: "Ticari Merkez",
    category: "Ticari",
    year: "2023",
    location: "Ankara",
    description: "Çok katlı ofis ve ticaret alanları projeye dahil.",
    color: "#0b0e14",
  },
  {
    id: 3,
    title: "Altyapı Modernizasyon",
    category: "Altyapı",
    year: "2023",
    location: "İzmir",
    description: "Kentsel dönüşüm kapsamında altyapı yenileme çalışmaları.",
    color: "#1b1b1b",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-[96px] bg-black border-t border-[#292d30]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#292d30] rounded-[10px] px-3 py-1.5 mb-6">
              <span className="text-[#a1a4a5] text-[13px] tracking-[0.05em]">
                PROJELERİMİZ
              </span>
            </div>
            <h2
              className="text-[42px] md:text-[56px] font-[400] leading-[1] tracking-[-0.05em] text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tamamlanan <br />
              <span className="text-[#a1a4a5]">işler</span>
            </h2>
          </div>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 border border-[#3b9eff] rounded-[6px] px-5 py-2 text-[14px] font-medium text-white hover:bg-[#3b9eff]/10 transition-colors shrink-0"
          >
            Tüm Projeler
          </Link>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-3">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              href={`/projeler/${project.id}`}
              className="group flex flex-col md:flex-row md:items-center justify-between border border-[#292d30] rounded-[16px] p-6 md:p-8 hover:border-[#464a4d] transition-colors duration-150 bg-[#0b0e14]"
            >
              <div className="flex items-start md:items-center gap-6">
                <span className="text-[#6c6c6c] text-[13px] font-mono w-6 shrink-0 mt-1 md:mt-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-white font-medium text-[16px] group-hover:text-[#f0f0f0] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[#a1a4a5] text-[14px]">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0 ml-12 md:ml-0 shrink-0">
                <span className="border border-[#292d30] rounded-[6px] px-3 py-1 text-[12px] text-[#a1a4a5]">
                  {project.category}
                </span>
                <span className="text-[#6c6c6c] text-[13px]">
                  {project.location}
                </span>
                <span className="text-[#6c6c6c] text-[13px]">
                  {project.year}
                </span>
                <span className="text-[#a1a4a5] group-hover:text-[#f0f0f0] transition-colors">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
