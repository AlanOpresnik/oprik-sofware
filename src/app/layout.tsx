import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Providers from "./Providers";
import Script from "next/script";

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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '939633891052997');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=939633891052997&ev=PageView&noscript=1"
            alt="Pixel tracking"
          />
        </noscript>
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