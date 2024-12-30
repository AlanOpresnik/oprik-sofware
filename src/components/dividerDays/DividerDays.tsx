'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const DividerDays = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación principal para el contenedor
    gsap.fromTo(
      '#DaysDivider',
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#pricing',
          start: "top 55%", 
          toggleActions: "play none none none", 
        },
      }
    );

    // Animación para el texto de la izquierda
    gsap.fromTo(
      '#text-left',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#pricing',
          start: "top 55%", 
          toggleActions: "play none none none", 
        },
      }
    );

    // Animación para el texto de la derecha
    gsap.fromTo(
      '#text-right',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#pricing',
          start: "top 55%", 
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  return (
    <div id="DaysDivider" className="flex mt-32 mb-12 flex-col items-center justify-center">
      <h2 className="text-white text-5xl font-semibold">
        Obtene tu sitio web en 15 dias habiles
      </h2>
      <div className="flex gap-4 text-white mt-4 text-lg">
        <p id="text-left">Optimizado para obtener clientes</p>
        <span className="text-primary">//</span>
        <p id="text-right">Experiencia óptima para el usuario</p>
      </div>
    </div>
  );
};

export default DividerDays;
