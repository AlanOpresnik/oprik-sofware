"use client";
import { Globe } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Arrow from "@/components/arrowHeader/ArrowHeader";
import TextHeaderDesktop from "@/components/TextHeader/TextHeaderDesktop";
import TextHeaderMobile from "@/components/TextHeader/TextHeaderMobile";

const Header = () => {
  useEffect(() => {
    // Animación para que #header entre desde la izquierda
    gsap.fromTo(
      "#header",
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    // Animación para que #code entre desde la derecha
    gsap.fromTo(
      "#code",
      { y: "-20%", opacity: 0, visibility: "hidden" },
      {
        y: "0%",
        opacity: 1,
        visibility: "visible",
        duration: 1.5,
        ease: "power3.out",
        delay: .2,
        onComplete: () => {
          const code = document.querySelector("#code");
          if (code) code.classList.add("");
        },
      }
    );


  }, []);

  return (
    <header className="text-white header md:flex header justify-between md:mt-16 items-center">
      <div id="header" className="mt-16">
        <h1 className="text-xl text-[#FEF08A] font-semibold">Oprik Software</h1>
      <div className="hidden md:block">
        <TextHeaderDesktop/>
      </div>
      <div className="block md:hidden">
        <TextHeaderMobile/>
      </div>

        <div className="flex gap-3 mb-2 mt-2">
          <button
            id="web"
            className="mt-4 border px-2 py-4 text-sm flex items-center gap-1 hover:bg-slate-100 hover:text-black transition-colors rounded-xl"
          >
            <Globe className="hover:rotate-180 transition-all" size={19} />
            Empeza a conseguir mas clientes
          </button>

        </div>
      </div>
      <div id="code" className="relative px-5 md:px-0 md:w-[456px] mt-24 ">
        <div className="absolute">
          <Image
            className="object-cover relative left-[-20px] shadow-lg shadow-primary/50  top-[-40px] z-40 w-[86px] rounded-full "
            alt="Imagen código"
            src={"/tienda-flotante-header.jpg"}
            width={150}
            height={480}
          />
        </div>
        <div className="absolute right-[10px]  z-50  bottom-[-10px]">
          <Image
            className="object-cover relative shadow-xl shadow-[#6963B0]/50 z-40 w-[86px] rounded-full "
            alt="Imagen código"
            src={"/web-logo-flotante.jpg"}
            width={150}
            height={480}
          />
        </div>
        <div className="hidden md:block">
          
        <Arrow />
        </div>
        <div className="z-10 relative">
        <div
  className="relative md:w-[460px] bg-[#0e0e0e] rounded-[84px] h-[480px]"
  style={{
    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
  }}
>
  <Image
    className="object-cover z-40 w-full h-full"
    alt="Imagen código"
    src={"/hombre-header.png"}
    width={850}
    height={500}
    style={{
      position: 'absolute',
      bottom: '1%',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 0,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)', // Sombra suave
      borderRadius: '8px', // Si quieres bordes redondeados
    }}
  />
</div>
</div>

      </div>
    </header>
  );
};

export default Header;
