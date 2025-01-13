'use client'
import { Phone } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import serviceData from "@/mock/serviceData";
import ServiceLink from "./ServiceLink";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // Timeline de GSAP para animaciones sincronizadas
    gsap.timeline({
      scrollTrigger: {
        trigger: '.service-container', // Contenedor que dispara la animación
        start: "top 60%", // Inicia cuando el contenedor entra al 75% de la pantalla
        toggleActions: "play none none none", // Solo se reproduce una vez
      },
    })
    .fromTo(
      '#text-service', 
      {
        x: -100, // Estado inicial (texto se desliza desde la izquierda)
        opacity: 0, // Estado inicial (texto invisible)
      },
      {
        x: 0, // Estado final (sin desplazamiento)
        opacity: 1, // Estado final (completamente visible)
        duration: 1, // Duración de la animación
        ease: "power3.out", // Efecto de aceleración
      },
      0 // Offset 0 para sincronizar ambas animaciones
    )
    .fromTo(
      '#image-service', 
      {
        x: 100, // Estado inicial (imagen se desliza desde la derecha)
        opacity: 0, // Estado inicial (imagen invisible)
      },
      {
        x: 0, // Estado final (sin desplazamiento)
        opacity: 1, // Estado final (completamente visible)
        duration: 1, // Duración de la animación
        ease: "power3.out", // Efecto de aceleración
      },
      0 // Offset 0 para que ambos elementos aparezcan al mismo tiempo
    );
  }, []);

  return (
    <div className="service-container flex flex-col-reverse md:grid place-items-center md:h-[80vh] md:grid-cols-2">
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
          {serviceData.map((service) => (
            <ServiceLink key={service.id} service={service} />
          ))}
          <button className="relative mt-2 md:w-[500px] p-2 py-3 flex justify-center bg-primary font-semibold rounded-xl hover:text-black">
            <span className="relative flex items-center gap-2">
              <Phone size={20} /> Contactar a WhatsApp por un servicio personalizado
            </span>
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
            loading="eager"
            height={600}
            alt="work girl"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
