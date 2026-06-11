import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Fernanda Oliveira | Harmonização Facial e Corporal de Alto Padrão em Londrina",
  description:
    "Descubra uma experiência exclusiva de rejuvenescimento e autoestima. Agende sua consulta personalizada com a Dra. Fernanda Oliveira, referência em resultados naturais e atendimento premium em harmonização facial e corporal.",
  openGraph: {
    title: "Dra. Fernanda Oliveira | Especialista em Harmonização Premium",
    description:
      "Atendimento individualizado, ambiente reservado e resultados naturais. Harmonização facial e corporal em Londrina.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
