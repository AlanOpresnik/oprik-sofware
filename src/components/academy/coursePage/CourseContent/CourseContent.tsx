import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Course } from '@/interface/courseInterface'
import React from 'react'
import VideoSwiper from '../acordion/VideoAcordion'
import CourseInfoTab from './tabs/CourseInfoTab'
import CourseInstructor from './tabs/CourseInstructor'
import CourseRequisites from './tabs/CourseRequisites'
import CourseCard from './card/CourseCard'

interface Props {
    course: Course
}

const CourseContent = ({ course }: Props) => {
    return (
        <section className="py-16 m px-2 md:px-6 rounded-xl  bg-gradient-to-b from-transparent to-zinc-950 relative">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container relative">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <Tabs defaultValue="contenido" className="w-full">
                            <TabsList className="grid grid-cols-4 mb-8">
                                <TabsTrigger value="contenido">Contenido</TabsTrigger>
                                <TabsTrigger value="instructores">Instructores</TabsTrigger>
                                <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
                                <TabsTrigger value='final_proyect'>Proyecto final</TabsTrigger>
                            </TabsList>

                            <TabsContent value="contenido">
                                <CourseInfoTab course={course} />
                            </TabsContent>

                            <TabsContent value="instructores">
                                <CourseInstructor course={course} />
                            </TabsContent>

                            <TabsContent value="requisitos">
                                <CourseRequisites course={course} />
                            </TabsContent>

                            <TabsContent value='final_proyect'>
                                <div>
                                    <VideoSwiper videos={course.final_proyect_preview?.video_preview_url || []} />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="lg:w-1/3">
                        {/* Sticky Course Info Card */}
                        <CourseCard course={course} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseContent