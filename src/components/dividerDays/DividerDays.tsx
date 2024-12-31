'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const DividerDays = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

 
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
          start: "top 75%", 
          toggleActions: "play none none none", 
        },
      }
    );

   
    gsap.fromTo(
      '#text-left',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        delay: .2,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#pricing',
          start: "top 75%", 
          toggleActions: "play none none none", 
        },
      }
    );


    gsap.fromTo(
      '#text-right',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: .2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#pricing',
          start: "top 75%", 
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  return (
    <div id="DaysDivider" className="flex mt-32 py-6 mb-12 flex-col items-center justify-center">
      <h2 className="invisible md:visible text-white text-4xl text-center md:text-5xl font-semibold">
        Obtene tu sitio web en 15 dias habiles
      </h2>
      <h2 className=" md:hidden text-white text-4xl text-center md:text-5xl font-semibold">
        Tu sitio web en 15 dias habiles
      </h2>
      <div className="flex items-center gap-4 text-white mt-4 text-lg">
        <p className="text-sm md:text-base w-full md:w-auto text-center" id="text-left">Optimizado para obtener clientes</p>
        <span className="text-primary">{'//'}</span>
        <p className="text-sm md:text-base w-full md:w-auto text-center" id="text-right">Experiencia óptima para el usuario</p>
      </div>
    </div>
  );
};

export default DividerDays;
