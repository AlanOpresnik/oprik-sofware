'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { animationLeft } from "./animation";

const DividerDays = () => {
  useEffect(() => {
    animationLeft()
   
  
  }, []);

  return (
    <div id="DaysDivider" className="flex mt-12 md:mt-32 py-6 mb-12 flex-col items-center justify-center">
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
