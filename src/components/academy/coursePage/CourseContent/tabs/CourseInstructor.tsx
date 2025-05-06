import { Course } from '@/interface/courseInterface'
import Image from 'next/image'
import React from 'react'

interface Props {
    course: Course;
}

const CourseInstructor = ({ course }: Props) => {
    return (
        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Instructores</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {course.instructors.map((instructor, index) => (
                    <div
                        key={index}
                        className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-6 flex flex-col md:flex-row gap-6"
                    >
                        <div className="relative h-fit  rounded-xl overflow-hidden border-2 border-yellow-500/50">
                            <Image
                                src={instructor.image || "/placeholder.svg"}
                                alt={instructor.name}
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-xl mb-1">{instructor.name}</h3>
                            <p className="text-yellow-500 text-sm mb-3">{instructor.role}</p>
                            <p className="text-zinc-400">{instructor.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseInstructor