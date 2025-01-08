'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Props {
  CATEGORY_CLIENTS_MATCH: {
    name: string;
    web: string;
    webImg: string;
    personRole: string;
    plan: string;
    overview: string;
  }[];
}

const CategoryMatchProyects = ({ CATEGORY_CLIENTS_MATCH }: Props) => {
  const swiperRef = useRef(null);

  return (
    <div className="mt-2 relative col-span-2">
      <p className="text-4xl font-semibold">Proyectos Realizados con este plan</p>
      <div className="mt-6 relative">
        {/* Swiper con referencia */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {CATEGORY_CLIENTS_MATCH.map((c) => (
            <SwiperSlide key={c.name}>
              <div className="hover:border p-2 rounded-xl">
                <Link target="_blank" href={c.web} className="rounded-xl">
                  <Image
                    className="rounded-md"
                    src={c.webImg}
                    width={600}
                    height={400}
                    alt={c.name}
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-semibold mt-4">{c.personRole}</p>
                      <ExternalLink size={20} className="mr-2 mt-2" />
                    </div>
                    <p className="text-primary">{c.plan}</p>
                    <p className="line-clamp-3">{c.overview}</p>
                    <p className="text-primary font-semibold hover:underline">Visitar web</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones personalizados */}
        <button
          className="swiper-button-prev bg-black !text-white !p-4 rounded-full w-20 h-10   absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
          aria-label="Previous slide"
        >
         
        </button>
        <button
          className="swiper-button-next bg-black !text-white !p-4 rounded-full w-10 h-10 flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
          aria-label="Next slide"
        >
        
        </button>
      </div>
    </div>
  );
};

export default CategoryMatchProyects;
