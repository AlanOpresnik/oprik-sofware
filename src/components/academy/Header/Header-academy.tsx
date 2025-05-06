'use client'
import Arrow from '@/components/arrowHeader/ArrowHeader'
import { BookOpen, DollarSignIcon, SquareArrowOutUpRightIcon, UserRound, Wifi } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HeaderImage from './HeaderImage'
import {ReactTyped} from "react-typed";  

const items = [
    { icon: <Wifi size={24} color='yellow' />, title: 'Online, Clases en vivo ' },
    { icon: <BookOpen size={24} color='yellow' />, title: 'Proyectos reales' },
    { icon: <UserRound size={24} color='yellow' />, title: 'Mentoría personalizada' },
    { icon: <DollarSignIcon size={24} color='yellow' />, title: 'Precios bajos para tu bolsillo' },
]

const HeaderAcademy = () => {
    return (
        <div className='md:grid grid-cols-2 md:gap-20 md:place-items-center'>
            <div>
                <h1 className="text-white hidden md:block text-center md:text-start text-4xl lg:text-5xl xl:text-6xl text-balance  font-bold mb-8">
                    Estudia e impulsa tus conocimientos en <br className='hidden 2xl:block' /> {" "}
                    <ReactTyped
                        strings={["Programación", "Marketing", "Informática"]}
                        typeSpeed={80} // Velocidad de escritura
                        backSpeed={50} // Velocidad de borrado
                        backDelay={2000} // Tiempo de espera antes de borrar
                        loop
                        className='text-primary'
             
                    />
                </h1>
                <h1 className='text-white md:hidden text-center md:text-start text-4xl pr-2 lg:text-7xl font-bold mb-8'>
                    Impulsate al mundo <br/> {''}
                    <ReactTyped
                        strings={["Informático", "De la programacion", "Tecnologico"]}
                        typeSpeed={80} // Velocidad de escritura
                        backSpeed={50} // Velocidad de borrado
                        className='text-primary'
                   
                    />



                </h1>
                <p className='text-white text-center md:text-start md:text-xl lg:text-2xl mt-4 max-w-[600px]'>
                    Estudia Desarrollo FullStack y programacion para impulsar tu futuro laboral
                </p>
                <div className='my-10'>
                    {items.map((item) => (
                        <div key={item.title} className='flex justify-center md:justify-normal gap-2 items-center mt-4'>
                            {item.icon}
                            <p className='text-white text-xl'>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col lg:flex-row h-full lg:items-center gap-4'>
                    <p className=' text-center md:hidden text-white'>Proba dos clases Gratis! 🔥</p>
                    <Link className='bg-primary flex justify-center w-full md:w-fit items-center gap-2 text-black font-semibold text-lg p-3 rounded-full  mt-2 mb-12 md:mb-0' href='/academy'>
                        <SquareArrowOutUpRightIcon size={16} color='black' /> Ver cursadas disponibles
                    </Link>
                    <p className='mt-4 hidden md:block text-white'>Proba dos clases Gratis! 🔥</p>
                </div>
            </div>
            <div className='relative '>
                <HeaderImage />
                <div className='hidden lg:block'>
                    <Arrow />
                </div>
            </div>
        </div>
    )
}

export default HeaderAcademy