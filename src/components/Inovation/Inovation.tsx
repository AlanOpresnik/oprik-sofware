'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'next-view-transitions';

import React, { useEffect } from 'react'

export default function Inovation() {
  useEffect(() => {
    // Registra el plugin de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
  
    gsap.fromTo(
  
      '#inova',
      { opacity: 0, y: -200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#inova',
          start: "top 26%", // Inicia la animación cuando el 80% del viewport alcanza el componente
          toggleActions: "play none none none", // Solo reproduce la animación una vez
        },
      }
    );
  }, []);
  return (
    <div id='inova' className="">
      <div className="mx-auto  py-24 sm:px-6 sm:py-32 lg:px-0">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <p className='text-primary text-sm  mb-2'>Oprik software ACADEMY</p>
            <h2 className="text-3xl font-semibold   text-white sm:text-5xl">
            Aprende programacion con nosotros
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              preparate para el mundo laboral con las ultimas tecnologias y las mejores practicas
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/academy"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ir a Oprik software ACADEMY
              </Link>
            </div>
          </div>
          <div className="relative  ">
            <img
              alt="App screenshot"
              src="https://res.cloudinary.com/dbgt948uj/image/upload/v1737828792/1691753666242_eic9le.jpg"
              width={1024}
              height={1080}
              className="absolute top-0 left-0 w-[55rem] opacity-50 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}