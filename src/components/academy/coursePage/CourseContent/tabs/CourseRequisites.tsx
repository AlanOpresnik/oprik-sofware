import { Button } from '@/components/ui/button'
import { Course } from '@/interface/courseInterface'
import { CheckCircle } from 'lucide-react'
import React from 'react'

interface Props {
    course: Course;
}

const CourseRequisites = ({ course }: Props) => {
    return (
        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Requisitos Previos</h2>

            <div className="space-y-4 mb-8">
                <div
                    className="flex items-start gap-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg p-4"
                >
                    <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span className="text-zinc-300">Dedidacion: {course.requirements[0].dedication}</span>
                </div>

            </div>
            <div className="space-y-4 mb-8">
                <div
                    className="flex items-start gap-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg p-4"
                >
                    <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span className="text-zinc-300">Duracion: {course.requirements[0].duration}</span>
                </div>

            </div>
            <div className="space-y-4 mb-8">
                <div
                    className="flex items-start gap-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg p-4"
                >
                    <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span className="text-zinc-300">{course.requirements[0].prev_knowledge != '' ? course.requirements[0].prev_knowledge : 'No se necesitan requisitos previos'}</span>
                </div>

            </div>

            <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-xl">
                <h3 className="font-bold text-white text-xl mb-2">¿No cumples con los requisitos?</h3>
                <p className="text-zinc-300 mb-4">
                    No te preocupes, tenemos cursos preparatorios que te ayudarán a alcanzar el nivel necesario.
                </p>
                <Button
                    variant="outline"
                    className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10"
                >
                    Ver Cursos Preparatorios
                </Button>
            </div>
        </div>
    )
}

export default CourseRequisites