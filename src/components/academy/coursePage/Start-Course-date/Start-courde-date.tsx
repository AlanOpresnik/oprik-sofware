import { generateWhatsAppLink } from '@/constants/constants'
import { CourseProps } from '@/interface/courseInterface'
import Link from 'next/link'
import React from 'react'

const StartCourseDate = ({ course }: CourseProps) => {

    const wspLink = generateWhatsAppLink(
        course.title,
        course.price,
        course.start_date,
        course.end_date,
        course.days_course,
        course.hours_course
    );


    return (
        <div className="bg-[#1A1A1A] rounded-2xl flex flex-col gap-10 p-6 text-white">
            <div>
                <span className="glass_bg text-white p-2 !rounded-full">Modalidad ON-LINE sincronico</span>
            </div>
            <div className="md:flex justify-between">
                <div className="md:grid grid-cols-4 justify-evenly w-full mb-4">
                    <div className="mb-6">
                        <p className="text-primary">Comienza</p>
                        <p>{course.start_date}</p>
                    </div>
                    <div className="mb-6">
                        <p className="text-primary">Termina</p>
                        <p>{course.end_date}</p>
                    </div>
                    <div className="mb-6">
                        <p className="text-primary">Duracion</p>
                        <p>{course.requirements[0].duration}</p>


                    </div>
                    <div className="mb-6">
                        <p className="text-primary">Horario</p>
                        <p>{course.days_course} de {course.hours_course}</p>
                    </div>
                </div>

                <div className="w-full flex justify-center text-centr md:h-fit md:w-fit md:justify-end md:text-start">
                    <Link className="text-black w-full bg-primary font-bold text-center p-4 rounded-xl" href={wspLink}>Inscribirse</Link>
                </div>
            </div>
        </div>
    )
}

export default StartCourseDate