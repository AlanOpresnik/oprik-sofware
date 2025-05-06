
import { Course } from '@/interface/courseInterface'
import { Check } from 'lucide-react'
import {Link} from 'next-view-transitions'
import React from 'react'

interface Props {
    course: Course
}

const CourseCard = ({course}: Props) => {
    return (
        <div className="bg-[#1A1A1A] relative w-full p-6 rounded-lg">
            <div className="pb-6 border-b border-white/20">
                <p className="text-white text-sm mb-2">Cupos limitados</p>
                <p className="text-white text-3xl font-semibold">
                    {course.title}
                </p>
            </div>
            <div className="mt-6">
                <p className="text-white mb-2">Incluye:</p>
                <ul className="text-white flex flex-col gap-3 mb-6">
                    {course.includes.map((item, idx) => (
                        <div key={idx} className="flex gap-2">
                            <Check size={24} />
                            <li>{item.title}</li>
                        </div>
                    ))}
                </ul>
                <div className="flex flex-col gap-2 border-t pt-4">
                    <p className="text-white">Dos pagos de:</p>
                    <span className="text-white text-4xl font-bold">
                        ${course.price.toLocaleString()}
                    </span>
                </div>
            </div>
            <div className=''>
                <Link
                    href={`/academy/${course.slug}`}
                    className="bg-secondary flex w-full text-center justify-center items-center gap-2 text-black font-semibold text-lg p-2 rounded-xl mt-6"
                >
                    Ver mas informacion
                </Link>

            </div>
            {course.outstanding && (
                <div className="absolute top-[-5px] right-0 md:right-[-5px] bg-secondary p-2 rounded-lg shadow-secondary rounded-bl-lg">
                    <p className="text-sm font-bold">DESTACADO</p>
                </div>
            )}
            {course.new && (
                <div className="absolute top-[-5px] right-0 md:right-[-5px] bg-secondary p-2 rounded-lg shadow-secondary rounded-bl-lg">
                    <p className="text-sm font-bold">RECIÉN AGREGADO</p>
                </div>
            )}
        </div>
    )
}

export default CourseCard