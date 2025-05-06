'use client'
import HeaderImage from '@/components/academy/coursePage/headerRigth/header-image'
import Arrow from '@/components/arrowHeader/ArrowHeader'
import { generateWhatsAppLink } from '@/constants/constants'
import { CourseProps } from '@/interface/courseInterface'
import { BookOpen, DollarSignIcon, UserRound, Wifi } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const items = [
    { icon: <Wifi size={24} className='text-terciary-default' />, title: 'Online, Clases en vivo ' },
    { icon: <BookOpen size={24} className='text-terciary-default' />, title: 'Proyectos reales' },
    { icon: <UserRound size={24} className='text-terciary-default' />, title: 'Mentoría personalizada' },
    { icon: <DollarSignIcon size={24} className='text-terciary-default' />, title: 'Precios bajos para tu bolsillo' },
]



const Header = ({ course }: CourseProps) => {
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
                <div className='w-full flex justify-center md:justify-start'>
                    <span className='text-secondary justify-center flex md:block  text-sm font-semibold text-center md:text-start bg-secondary/20 w-fit p-1 px-2 rounded-xl'>{course.upTitle}</span>
                </div>
                <h1 className='text-white max-w-[700px] hidden md:block text-center md:text-start text-4xl lg:text-6xl font-bold mb-8'>
                    {course.title}
                </h1>
                <h1 className='text-white md:hidden text-center md:text-start text-4xl pr-2 lg:text-7xl font-bold mb-8'>
                    {course.movile_title}
                </h1>
                <p className='text-white  text-center md:text-start md:text-xl lg:text-3xl mt-4'>
                    {course.description}
                </p>
                <div className='my-10 grid grid-cols-1 md:grid-cols-2  gap-2'>
                    {items.map((item) => (
                        <div key={item.title} className='flex  justify-center md:justify-normal gap-2 items-center mt-4'>
                            <div className='bg-secondary/20 p-2   rounded-full'>
                                {item.icon}
                            </div>
                            <p className='text-white md:text-lg lg:text-xl'>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col lg:flex-row h-full lg:items-center gap-4'>
                    <p className=' text-center md:hidden text-white'>Proba dos clases Gratis! 🔥</p>
                    <Link
                        className='bg-secondary flex justify-center w-full md:w-fit items-center gap-2 text-black font-semibold text-lg py-2 px-5 rounded-full  mt-2 mb-12 md:mb-0' href={wspLink}>
                        Inscribirme ahora
                    </Link>
                    <p className='mt-4 hidden md:block text-white'>Proba dos clases Gratis! 🔥</p>
                </div>
            </div>
            <div className='relative '>
                <HeaderImage course={course} />
                <div className='hidden lg:block'>
                    <Arrow />
                </div>
            </div>
        </div>
    )
}

export default Header