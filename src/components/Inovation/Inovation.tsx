'use client'
import { Person2Outlined } from '@mui/icons-material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Inovation = () => {
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
        <div id='inova' className='flex flex-col gap-4 md:grid grid-cols-2 items-center place-items-center mb-12'>
            <div>
                <Image src={'/ilustrarion2.png'} alt='ilustration' width={550} height={400} />
            </div>
            <div>
                <p className='text-white text-4xl font-semibold mb-6'>Nos diferenciamos</p>
                <p className='text-white text-lg font-semibold'>Si sos <span className='text-primary'>Cliente</span> vas a contar con un apartado especial para vos donde <span className='text-primary'>podes ver comentarios y avisos de los desarrolladores</span>, sobre como avanza el desarrollo de tu pagina web, tambien vas a tener  <span className='text-primary'>Links de previsualizacion </span> para ver tu web en tiempo real</p>
                <div className='flex gap-2'>
                <button className='text-white flex items-center hover:bg-slate-100 hover:text-black transition-colors border p-2 rounded-xl mt-4'><Person2Outlined fontSize='small' />Hacerme cliente</button>
                <button className='text-black flex gap-1 bg-slate-200 items-center hover:bg-slate-50 hover:text-black transition-colors border p-2 rounded-xl mt-4'><MessageCircle size={16} />Quiero mas informacion</button>
                </div>
            </div>

        </div>
    )
}

export default Inovation