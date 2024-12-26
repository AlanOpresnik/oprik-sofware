'use client'
import { Code, Globe } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { gsap } from "gsap";


const Header = () => {

    useEffect(() => {
        // Animación para que #header entre desde la izquierda
        gsap.fromTo("#header", { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out" });
      
        // Animación para que #code entre desde la derecha
        gsap.fromTo("#code", { y: "100%", opacity: 0, visibility: "hidden" }, {
          y: "0%", opacity: 1, visibility: "visible", duration: 1.5, ease: "power3.out", delay: 0.5, onComplete: () => {
            const code = document.querySelector("#code");
            if (code) code.classList.add('shake-animation');
          }
        });
      
        // Animación para los botones #web y #plan (entrando desde abajo)
        gsap.fromTo("#web", { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.5, ease: "power3.out" });
        gsap.fromTo("#plan", { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.5, delay: .5, ease: "power3.out" });
      }, []);


    return (
        <header className="text-white header md:flex justify-between md:mt-16 items-center">
            <div id='header' className="mt-16">
                <h1 className="text-xl text-[#FEF08A] font-semibold">
                    Oprik Software
                </h1>
                <p className="text-6xl w-[370px] md:w-auto md:text-6xl mb-4 font-bold">Convertimos tus ideas en <span className="text-[#FEF08A]">realidad</span></p>
                <h2 className=" md:text-xl max-w-[700px]">
                    Desarrollamos <span className="text-[#FEF08A]">Aplicaciones y paginas web</span> para empresas o emprendimientos, estamos enfocados en darle el mayor crecimiento
                    a tu negocio en el menor tiempo posible, con soluciones de ventas , gestion, organizacion de tu stock y un <span className="text-[#FEF08A]">panel de administracion </span> para modificar tus productos a tu gusto en pocos clicks
                </h2>
                <div className="flex gap-3 mb-2 mt-2">
                    <button id='web' className="mt-4 border px-2 py-4 text-sm flex items-center gap-1 hover:bg-slate-100 hover:text-black transition-colors rounded-xl">
                        <Globe className="hover:rotate-180 transition-all" size={19} />
                        Empecemos tu web
                    </button>
                    <button id='plan' className="mt-4 border px-2 py-2 text-sm flex items-center bg-slate-200 text-black gap-1 hover:bg-slate-100 hover:text-black transition-colors rounded-xl">
                        <Code className="hover:rotate-180 transition-all" size={19} />
                        Planes de desarrollo
                    </button>
                </div>
            </div>
            <div id='code' className="opacity-0">
                <div>
                    <Image className='' alt="Imagen código" src={'/code1.png'} width={550} height={500} />
                </div>
                <div className="absolute top-20 left-40">
                    <Image alt="Imagen código" src={'/code2.png'} className='max-h-[450px] min-h-[350px] sm:h-[600] md:h-auto' width={500} height={500} />
                </div>
            </div>
        </header>
    );
};

export default Header;
