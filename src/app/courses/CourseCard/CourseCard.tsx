import { Button } from '@/components/ui/button';
import { Course } from '@/interface/courseInterface'
import { Clock, GraduationCap } from 'lucide-react';
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import React from 'react'

interface Props {
    course: Course;
}

const CourseCard = ({ course }: Props) => {
    return (
        <Link href={`/academy/${course.slug}`} key={course.slug} className="group">
            <div className="bg-zinc-800/50   backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                <div className="relative ">
                    <Image
                        src={course.banner || "/placeholder.svg"}
                        alt={course.title}
                        width={400}
                        height={500}
                        className="object-cover w-full  h-[250px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                        <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                            Dedicacion: {course.requirements[0].dedication}
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <Image
                        alt="a"
                        src={course.icons?.[0].icon || "/placeholder.svg"}
                        width={48}
                        height={48}
                        className={`h-12 w-12 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/90  flex items-center justify-center mb-4`}
                    >

                    </Image>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                        {course.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                            <Clock className="h-4 w-4" />
                            <span>{course.days_course}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                            <GraduationCap className="h-4 w-4" />
                            <span>200 estudiantes</span>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-zinc-700/50 flex items-center justify-between">
                        <span className="text-xl font-bold text-white">${course.price}</span>
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 group-hover:border-yellow-500"
                        >
                            Ver Detalles
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard