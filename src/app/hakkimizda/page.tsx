import Link from "next/link";

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-black text-[#f0f0f0] pt-[100px] pb-16">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Sayfa Başlığı */}
        <div className="border-b border-[#292d30] pb-6 mb-10">
          <h1 className="text-[32px] font-bold tracking-tight text-white uppercase">
            Hakkımızda
          </h1>
          <p className="text-[#a1a4a5] text-[14px] mt-2 tracking-wide uppercase">
            Strova İnşaat — Kalite, Güven ve Sürdürülebilirlik
          </p>
        </div>

        {/* Metin İçeriği */}
        <div className="flex flex-col gap-6 text-[16px] leading-[1.8] text-[#f0f0f0]/90 font-light">
          <p>
            Strova İnşaat, 2026 yılında kurulmuş olup konut geliştirme ve satış alanında faaliyet göstermektedir. 
            Kurulduğu günden bu yana kalite, güven ve sürdürülebilirlik ilkelerini esas alarak sektörde güçlü 
            ve kurumsal bir yapı oluşturmayı hedeflemektedir.
          </p>

          <p>
            Yenilikçi bakış açımız ve çağdaş mühendislik anlayışımızla, her projeye özgü çözümler geliştiriyor; 
            estetik, fonksiyonellik ve konforu bir araya getiriyoruz. Müşteri memnuniyetini önceliğimiz olarak 
            kabul ediyor, beklentilerin ötesine geçen yaşam alanları inşa etmeyi amaçlıyoruz.
          </p>

          <p>
            Strova İnşaat olarak, güvenilir, şeffaf ve uzun vadeli değer üreten projelerle sektörde kalıcı 
            bir iz bırakmayı hedefliyoruz.
          </p>
        </div>

        {/* Alt Kısım Hızlı İletişim Butonu */}
        <div className="mt-12 p-6 bg-[#121416] border border-[#292d30] rounded-[8px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-medium text-[16px]">Projelerimiz hakkında bilgi almak ister misiniz?</h3>
            <p className="text-[#a1a4a5] text-[14px]">Uzman ekibimizle hemen iletişime geçebilirsiniz.</p>
          </div>
          <Link
            href="/iletisim"
            className="text-[14px] font-medium text-white bg-[#3b9eff] hover:bg-[#3b9eff]/90 rounded-[6px] px-5 py-2.5 transition-colors duration-150 whitespace-nowrap"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </main>
  );
}
