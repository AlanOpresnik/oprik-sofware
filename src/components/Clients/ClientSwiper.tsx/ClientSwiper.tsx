"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { cardData } from "@/components/Clients/ClientsData/clientData";
import ClientCard from "../ClientCard/ClientCard";

export default function ClientSwiper() {
  return (
    <>
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
            600:{
              slidesPerView:2
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
        modules={[Pagination,Autoplay]}
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
    </>
  );
}
