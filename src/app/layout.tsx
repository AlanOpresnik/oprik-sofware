import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Providers from "./Providers";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
import WspLogo from "@/components/WspLogo/WspLogo";
import BannerAd from "@/components/bannerAd/BannerAd";
import { NavBar } from "@/components/Navbar/Navbar_v0/Navbar_v0";

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
  title: "Oprik Software ACADEMY - Cursos en vivo de Programación e informatica ",
  description: "Aprende a programar y a usar la informática en un ambiente de aprendizaje práctico y efectivo.",
  icons: [
    {
      url: "/OSLOGO.jpeg",

      sizes: "192x192",

      type: "image/jpeg",
    },

  ],
  openGraph: {
    title: "Oprik Software ACADEMY - Cursos en vivo de Programación e informatica  ",
    description: "Aprende a programar y a usar la informática en un ambiente de aprendizaje práctico y efectivo.",
    url: "https://www.opriksoftware.com", // Cambia por tu URL

    siteName: "Oprik Software ACADEMY - Cursos en vivo de Programación e informatica  ",

    images: [
      {
        url: "/bannerOS.jpeg", // Cambia por la URL de tu imagen
        width: 1200,
        height: 630,
        alt: "Oprik Software ACADEMY - Cursos en vivo de Programación e informatica  ",

      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oprik Software ACADEMY - Cursos en vivo de Programación e informatica ",
    description: "Aprende a programar y a usar la informática en un ambiente de aprendizaje práctico y efectivo.",
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
        <Script
          id="google-pixel"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16866569563"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16866569563');
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
        <Analytics />
        {/* Fondo con gradiente violeta */}

        <Providers>
          <div className="fixed w-full z-40">
            <BannerAd />
          </div>
          <div className="max-w-[1700px] mx-auto  px-2 md:px-0">
            <NavBar />
          </div>
          <div className="max-w-[1620px] mx-auto px-2 md:px-12">
            {children}
          </div>

          <WspLogo />
          <div className="max-w-[1580px] mx-auto px-2 md:px-0">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}  