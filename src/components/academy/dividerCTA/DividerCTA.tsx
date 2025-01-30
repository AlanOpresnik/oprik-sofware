'use client'

import { wspNum } from '@/constants/constants';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'next-view-transitions';

import React, { useEffect } from 'react'

export default function DividerCTA() {
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
        <div id="inova" className="mb-16 md:mb-0">
            <div className="mx-auto sm:px-6 sm:py-32 lg:px-0">
                <div className="relative mt-12 rounded-xl isolate overflow-hidden gradient bg-gradient-to-r from-[#1A1A1A] to-transparent  pt-16 shadow-2xl sm:rounded-3xl  md:pt-24 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle
                            r={512}
                            cx={512}
                            cy={512}
                            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fillOpacity="0.7"
                        />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>

                    {/* Grid container for content */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left content */}
                        <div className="text-center px-6 flex flex-col justify-center pb-12 md:py-12 lg:items-start lg:text-left">
                            <p className="text-primary text-sm mb-2">Oprik software ACADEMY</p>
                            <h2 className="text-3xl font-bold text-white sm:text-5xl">
                                Impulsa tu carrera profesional con nosotros
                            </h2>
                            <p className="mt-6 text-lg text-gray-300">
                                Los Profesores más capacitados para que aprendas las últimas y más demandadas tecnologías
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Link
                                    href={wspNum}
                                    className="rounded-md bg-white px-3.5 py-2.5 font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Consultar cursadas disponibles
                                </Link>
                            </div>
                        </div>

                        {/* Right image */}
                        <div className="relative opacity-70">
                            <img
                                alt="App screenshot"
                                src="https://res.cloudinary.com/dbgt948uj/image/upload/v1737940577/front-view-female-working-from-home_1_bebcva.jpg"
                                width={1024}
                                height={1080}
                                className="w-full rounded-b-xl md:rounded-r-xl bg-white/5 ring-1 ring-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}      