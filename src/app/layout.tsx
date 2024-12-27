import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Providers from "./Providers";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oprik Software - Páginas Web y Aplicaciones para Teléfonos en Argentina",
  description: "Diseñamos y desarrollamos soluciones digitales innovadoras para tu negocio.",
  icons: [
    {
      url: "/OSLOGO.jpeg",
      sizes: "192x192",
      type: "image/jpeg",
    },

  ],
  openGraph: {
    title: "Oprik Software - Páginas Web y Aplicaciones para Teléfonos en Argentina",
    description: "Diseñamos y desarrollamos soluciones digitales innovadoras para tu negocio.",
    url: "https://www.opriksoftware.com", // Cambia por tu URL
    siteName: "Oprik Software - Páginas Web y Aplicaciones para Teléfonos en Argentina",
    images: [
      {
        url: "/bannerOS.jpeg", // Cambia por la URL de tu imagen
        width: 1200,
        height: 630,
        alt: "Oprik Software - Soluciones digitales a medida",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oprik Software - Páginas Web y Aplicaciones para Teléfonos",
    description: "Soluciones digitales innovadoras en Argentina.",
    images: ["/bannerOS.jpeg"], // Ruta de la imagen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative  bg-neutral-950 antialiased `}
      >
        {/* Fondo con gradiente violeta */}
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
        <Providers>
          <div className="max-w-[1580px] mx-auto px-2 md:px-0">
            <Navbar />
          </div>
          <div className="max-w-[1480px] mx-auto px-2 md:px-12">
            {children}
          </div>
          <div className="max-w-[1580px] mx-auto px-2 md:px-0">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}  