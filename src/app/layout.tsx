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
  title: "Oprik software - PAGINAS WEB Y APLICACIONES PARA TELEFONOS EN ARGENTINA",
  description: "Generated by create next app",
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