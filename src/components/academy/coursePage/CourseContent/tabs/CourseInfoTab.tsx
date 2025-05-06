import { Course } from '@/interface/courseInterface'
import { CalendarMonthOutlined } from '@mui/icons-material'
import { ClockIcon } from 'lucide-react'
import React from 'react'
import { CourseModuleAccordion } from '../CourseAcordion';

interface Props {
    course: Course;
}

const CourseInfoTab = ({ course }: Props) => {
    return (
        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Contenido del Curso</h2>
            <div className='mb-6 flex gap-12 items-center'>
                <div className="flex items-start gap-3">
                    <CalendarMonthOutlined className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span className="text-zinc-300 text-sm md:text-base">Duracion: {course.requirements[0].duration}</span>
                </div>
                <div className="flex items-start gap-3">
                    <ClockIcon className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span className="text-zinc-300 text-sm md:text-base">{course.days_course} de {course.hours_course}</span>
                </div>
            </div>
            <p className="text-zinc-300 mb-8">
                {course.introduction}
            </p>



            <div className="space-y-4">
                {course.modules?.map((module, index) => (
                    <CourseModuleAccordion key={index} module={module} index={index} />
                ))}
            </div>
        </div>
    )
}

export default CourseInfoTab