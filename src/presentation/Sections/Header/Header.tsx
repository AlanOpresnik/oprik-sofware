"use client";
import { Check, Globe } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Arrow from "@/components/arrowHeader/ArrowHeader";
import TextHeaderDesktop from "@/components/TextHeader/TextHeaderDesktop";
import TextHeaderMobile from "@/components/TextHeader/TextHeaderMobile";
import { Star } from "@mui/icons-material";
import { redirect } from "next/navigation";

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

      }
    );


  }, []);

  return (
    <header className="text-white header md:flex header justify-between md:mt-16 items-center">
      <div id="header" className="mt-6 md:mt-16">
        <div className="flex justify-center md:justify-normal mb-2   gap-1 ">
          <div className="  p-2 rounded-full flex items-center gap-1 glass_bg">
            <Star sx={{ fontSize: 15, color: 'yellow' }} />
            <Star sx={{ fontSize: 15, color: 'yellow' }} />
            <Star sx={{ fontSize: 15, color: 'yellow' }} />
            <Star sx={{ fontSize: 15, color: 'yellow' }} />
            <Star sx={{ fontSize: 15, color: 'yellow' }} />
            <div>
              <h1 className="  text-sm">+17 personas </h1>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <TextHeaderDesktop />
        </div>
        <div className="block md:hidden">
          <TextHeaderMobile />
        </div>

        <div className="flex justify-center md:justify-normal gap-3 mb-2 mt-2">
          <button
            id="web"
            onClick={() => redirect("/services/servicio-tienda-web-e-commerce-completo/1")}
            className="mt-4  border px-5 py-5 md:px-5 md:py-4  flex items-center gap-1 font-semibold hover:bg-slate-100 hover:text-black transition-colors rounded-full"
          >
            <Globe className="hover:rotate-180  md:block transition-all" size={19} />
            Empeza a vender en linea
          </button>

        </div>
      </div>
      <div id="code" className="relative px-5 md:px-0 md:w-[456px] mt-24 ">
      <div className="absolute bottom-0 left-[10px] md:bottom-auto md:left-[-120px] glass_bg flex flex-col gap-4  !rounded-full !rounded-bl-none md:!rounded-bl-full  md:!rounded-tr-none p-4  px-6 z-50  md:top-[-20px]">
          <div className="flex gap-4 items-center   ">
            <div className="bg-primary rounded-full  ">
              <Check color="black" size={17} />
            </div>
            <span className="text-sm">Nueva compra desde el SITIO WEB</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-primary rounded-full  ">
              <Check color="black" size={17} />
            </div>
            <span className="text-sm">Te calificaron 5 con estrellas !</span>
          </div>
        </div>
        <div className="absolute right-[0px] bg-white/90 rounded-full w-[86px] p-2 flex justify-center items-center  z-50   h-fit  md:bottom-[-20px]">
          <Image
            className="object-cover relative    z-40  rounded-full "
            alt="Imagen código"
            src={"/compra-web.png"}
            width={150}
            height={480}
          />
        </div>
        
        <div className="absolute left-[-30px] hidden  z-50  bottom-[-10px]">
          <Image
            className="object-cover relative top-12 mr-3   z-40 w-[126px] rounded-full "
            alt="Imagen código"
            src={"/cliente-feliz.png"}
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
