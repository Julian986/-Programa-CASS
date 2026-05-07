import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";

/** URL pública del sitio (WhatsApp/OG necesitan URL absoluta). Prioridad: env → Vercel → local. */
function getMetadataBase(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:8452");
}

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

const ogImagePath = "/programa cass.png";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "Programa CASS",
  description:
    "Investigación, tratamiento y prevención de conductas adictivas sin sustancia en Mar del Plata, desde 2007.",
  openGraph: {
    title: "Programa CASS",
    description:
      "Investigación, tratamiento y prevención de conductas adictivas sin sustancia. Mar del Plata, desde 2007.",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: ogImagePath,
        alt: "Programa CASS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programa CASS",
    description:
      "Investigación, tratamiento y prevención de conductas adictivas sin sustancia. Mar del Plata, desde 2007.",
    images: [ogImagePath],
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
