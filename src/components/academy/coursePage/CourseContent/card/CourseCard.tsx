import Image from 'next/image'
import React from 'react'
import { ShareButton } from '../ShareButtonCard'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Course } from '@/interface/courseInterface'
import { generateWhatsAppLink } from '@/constants/constants'

interface Props {
    course: Course;
}

const CourseCard = ({ course }: Props) => {
    const wspLink = generateWhatsAppLink(
        course.title,
        course.price,
        course.start_date,
        course.end_date,
        course.days_course,
        course.hours_course
    );

    return (
        <div className="sticky top-24">
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden">
                <div className="relative h-48">
                    <Image
                        src={course.banner || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent flex items-end p-6">
                        <div className="bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full">
                            {course.requirements[0].dedication}
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-3xl font-bold text-white">${course.price}</span>
                        <ShareButton course={course} />
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                            <span className="text-zinc-300">Cursada 100% Online</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                            <span className="text-zinc-300">Certificado de finalización</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                            <span className="text-zinc-300">Proyectos prácticos reales</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                            <span className="text-zinc-300">Mentoría personalizada</span>
                        </div>
                    </div>
                    <a href={wspLink} target="_blank" rel="noopener noreferrer" className="w-full block">
                        <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black text-lg py-2 rounded-xl mb-4">
                            Inscribirme Ahora
                        </Button>
                    </a>
                    <a href={course.requirements[0].pdf} target="_blank" rel="noopener noreferrer" className="w-full block">
                        <Button
                            variant="outline"
                            className="w-full bg-black !py-4 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10"
                        >
                            Descargar Programa
                        </Button>
                    </a>

                    <div className="mt-6 pt-6 border-t border-zinc-700/50">
                        <p className="text-center text-zinc-400 text-sm mb-4">¿Tienes preguntas sobre el curso?</p>
                        <Button variant="ghost" className="w-full text-white hover:bg-zinc-700/50">
                            Contactar a un asesor
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard