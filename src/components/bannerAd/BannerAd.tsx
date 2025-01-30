"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

export default function BannerAd() {
  const pathname = usePathname();

  // Mostrar el cartel solo si no estamos en /academy
  if (pathname === "/academy/next") {
    return null;
  }

  return (
    <div className="w-full bg-[#222222] flex items-center justify-center h-[55px] text-white">
      <Link
        href="/academy"
        className="md:flex hidden justify-center items-center gap-1"
      >
        <p className="text-sm text-center">
          ✨ Inscribite a la cursada de Programacion con Next.js haciendo
        </p>
        <span className="font-bold text-sm text-center">CLICK AQUI</span> ✨
      </Link>
      <Link
        href="/academy"
        className="flex md:hidden justify-center items-center gap-1"
      >
        <p className="text-sm text-center">
          ✨ Inscribite a la cursada de Programacion con Next.js{" "}
        </p>{" "}
        ✨
      </Link>
    </div>
  );
}