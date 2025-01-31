'use client'
import HeaderImage from '@/components/academy/coursePage/headerRigth/header-image'
import Arrow from '@/components/arrowHeader/ArrowHeader'
import { generateWhatsAppLink } from '@/constants/constants'
import { CourseProps } from '@/interface/courseInterface'
import { BookOpen, DollarSignIcon, SquareArrowOutUpRightIcon, UserRound, Wifi } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const items = [
    { icon: <Wifi size={24} color='yellow' />, title: 'Online, Clases en vivo ' },
    { icon: <BookOpen size={24} color='yellow' />, title: 'Proyectos reales' },
    { icon: <UserRound size={24} color='yellow' />, title: 'Mentoría personalizada' },
    { icon: <DollarSignIcon size={24} color='yellow' />, title: 'Precios bajos para tu bolsillo' },
]



const Header = ({course}: CourseProps) => {
    const wspLink = generateWhatsAppLink(
        course.title,
        course.price,
        course.start_date,
        course.end_date,
        course.days_course,
        course.hours_course
    );

    return (
        <div className='md:grid grid-cols-2 md:gap-20 md:place-items-center'>
            <div>
               <span className='text-primary justify-center flex md:block  text-sm font-semibold text-center md:text-start'>{course.upTitle}</span>
                <h1 className='text-white hidden md:block text-center md:text-start text-4xl lg:text-7xl font-bold mb-8'>
                 {course.title}
                </h1>
                <h1 className='text-white md:hidden text-center md:text-start text-4xl pr-2 lg:text-7xl font-bold mb-8'>
                    {course.movile_title}
                </h1>
                <p className='text-white text-center md:text-start md:text-xl lg:text-3xl mt-4'>
                    {course.description}
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
                    <Link
                      className='bg-primary flex justify-center w-full md:w-fit items-center gap-2 text-black font-semibold text-lg p-3 rounded-full  mt-2 mb-12 md:mb-0' href={wspLink}>
                        <SquareArrowOutUpRightIcon size={16} color='black' /> Inscribirme ahora
                    </Link>
                    <p className='mt-4 hidden md:block text-white'>Proba dos clases Gratis! 🔥</p>
                </div>
            </div>
            <div className='relative '>
                <HeaderImage course={course}/>
                <div className='hidden lg:block'>
                    <Arrow />
                </div>
            </div>
        </div>
    )
}

export default Header