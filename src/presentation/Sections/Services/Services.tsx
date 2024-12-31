'use client'
import { ExternalLink, Phone } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#text-service', // Elemento que dispara la animación
        start: "top 80%", // Inicia cuando el elemento está al 80% de la ventana
        end: "bottom 20%", // Termina al 20%
        toggleActions: "play none none none", // Opciones: onEnter, onLeave, onEnterBack, onLeaveBack
      },
    });

    // Animación para el texto (desde la izquierda)
    tl.from('#text-service', {
      x: -100, // Desde la izquierda
      opacity: 0, // Inicialmente invisible
      stagger: 0.2, // Aparece en secuencia
    });

    // Animación para la imagen (desde la derecha)
    tl.from(
      '#image-service',
      {
        x: 100, // Desde la derecha
        opacity: 0, // Inicialmente invisible
      },
      "-=0.5" // Solapamos un poco las animaciones
    );
  }, []);

  return (
    <div className="flex flex-col-reverse md:grid place-items-center md:h-[80vh] md:grid-cols-2">
      {/* Contenedor del texto */}
      <div id="text-service">
        <p className="text-white mb-2 text-4xl md:text-5xl font-semibold">
          Nuestros Servicios personalizados para vos
        </p>
        <p className="text-white mt-4">
          contamos con servicios especializados para cada
          situacion.
        </p>
        <div className="flex flex-col text-sm md:text-base gap-4">
          <Link
            href={"/services/e-commerce-complete"}
            className="md:hover-effect flex gap-2 text-primary font-semibold mt-4"
          >
            Servicio creacion de Tienda Web / E-commerce completo
            <ExternalLink size={16} />
          </Link>
          <Link
            href={"/services/turnos-app"}
            className="md:hover-effect text-primary flex gap-2 font-semibold mt-2"
          >
            Servicio creacion Web/App Para gestión de turnos
            <ExternalLink size={16} />
          </Link>
          <Link
            href={"/services/marketing-digital-ads"}
            className="md:hover-effect text-primary flex gap-2 font-semibold mt-2"
          >
            Marketing digital / Facebook ADS / Campañas de anuncios
            <ExternalLink size={16} />
          </Link>
          <button className="before:ease relative mt-2 md:w-[500px] p-2 py-3 flex justify-center overflow-hidden bg-primary md:bg-primary/70 font-semibold transition-all before:absolute before:top-full before:h-0 before:w-[900px] before:origin-center before:-translate-x-0 before:rotate-45 before:bg-primary before:duration-500 rounded-xl hover:text-black hover:before:h-[600px] hover:before:-translate-y-64 !before:!w-full">
            <span className="relative flex items-center gap-2">
              <Phone size={20} /> Contactar a WhatsApp por un servicio personalizado
            </span>
            <div className="absolute inset-0 z-0 animate-shine"></div>
          </button>
        </div>
      </div>

      {/* Contenedor de la imagen */}
      <div id="image-service" className="relative">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[300px] h-[400px] md:w-[400px] md:h-[700px] bg-gradient-to-tl from-primary/30 to-transparent blur-3xl -z-10"></div>
          <Image
            className="drop-shadow-xl fade-out-image mt-6 shadow-primary"
            src={"/mujer-services.png"}
            width={400}
            height={600}
            alt="work girl"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
