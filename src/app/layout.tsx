import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#031425",
};

export const metadata: Metadata = {
  title: "Programa CASS",
  description:
    "Programa de Investigación y Tratamiento de Conductas Adictivas Sin Sustancia.",
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
      className={`dark ${playfair.variable} ${sourceSerif.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="flex min-h-[max(884px,100dvh)] flex-col bg-hero-bg text-on-surface">
        <div className="noise-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
