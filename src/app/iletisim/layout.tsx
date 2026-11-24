import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Kentsel dönüşüm, kat karşılığı ve ücret karşılığı yapım, mevcut yapılarda iç ve dış cephe inşaat işleri için Strova İnşaat ile iletişime geçin. İstanbul Bağcılar, Güneşli ve çevresi. Telefon: +90 534 630 00 59.",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function IletisimLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
