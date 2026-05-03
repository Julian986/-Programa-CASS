import type { Metadata, Viewport } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D1B2A",
};

export const metadata: Metadata = {
  title: "Programa CASS",
  description:
    "Programa de Investigación y Tratamiento de Conductas Adictivas Sin Sustancia — excelencia clínica y científica.",
  openGraph: {
    title: "Programa CASS",
    description:
      "Investigación y tratamiento de conductas adictivas sin sustancia.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${lora.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-cass-bg font-body text-cass-cream">
        <div className="cass-grain" aria-hidden />
        <div className="cass-content">{children}</div>
      </body>
    </html>
  );
}
