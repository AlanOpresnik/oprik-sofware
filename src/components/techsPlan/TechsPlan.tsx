'use client'
import React from "react";
import { PricingPlan } from "../pricingSection/pricingData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface Props {
  plan: PricingPlan;
}

const TechsPlan = ({ plan }: Props) => {
  return (
    <div className="mt-4">
      {/* Diseño para pantallas grandes (grid layout) */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {plan.techs.map((tech, i) => (
          <div key={i} className="border p-4 rounded-xl">
            <div className="flex flex-col gap-2 md:items-start items-center">
              <p className="text-xl font-semibold text-primary border-b">
                {tech.title}:
              </p>
              <p className="mt-1 text-orange-200">{tech.for}</p>
            </div>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>

      {/* Diseño para dispositivos móviles (Swiper) */}
      <div className="md:hidden py-6 mb-2">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1.2} // Mostrar un slide a la vez en móvil
          className="h-[260px]"
        >
          {plan.techs.map((tech, i) => (
            <SwiperSlide key={i}>
              <div className="border p-4 rounded-xl h-[220px]">
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-xl font-semibold text-primary border-b">
                    {tech.title}:
                  </p>
                  <p className="mt-1 text-orange-200">{tech.for}</p>
                </div>
                <p>{tech.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TechsPlan;
