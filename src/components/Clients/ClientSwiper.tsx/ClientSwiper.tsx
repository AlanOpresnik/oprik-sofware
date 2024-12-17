"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { cardData } from "@/components/Clients/ClientsData/clientData";
import ClientCard from "../ClientCard/ClientCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientSwiper() {
  const sectionRef = useRef()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectamos si es mobile o desktop
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 996); // Puedes ajustar el valor para el breakpoint de mobile
    };

    handleResize(); // Ejecutamos una vez al cargar la página
    window.addEventListener('resize', handleResize); // Añadimos el listener para el resize

    return () => window.removeEventListener('resize', handleResize); // Limpiamos el listener
  }, []);

  useEffect(() => {
    // Registramos el plugin de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    // Definimos el valor de start según si es mobile o desktop
    const startPosition = isMobile ? "top 100%" : "top 75%";

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: startPosition, // Cambia dinámicamente entre 100% en mobile y 70% en desktop
          toggleActions: "play none none none", // Solo reproduce la animación una vez
        },
      }
    );
  }, [isMobile]);
  return (
    <section id="clientes" ref={sectionRef}>
      <p className="text-3xl  text-white mb-12 font-semibold">Nuestros clientes dicen</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          300: {
            slidesPerView: 1
          },
          500: {
            slidesPerView: 1.2
          },
          600: {
            slidesPerView: 2
          },
          968: {
            slidesPerView: 3
          }
        }}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[550px] md:h-[480px] px-12"
      >
        {cardData.map((client) => (
          <SwiperSlide key={client.name}>
            <ClientCard
              name={client.name}
              founder={client.founder}
              image={client.image}
              overview={client.overview}
              personRole={client.personRole}
              web={client.web || ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
