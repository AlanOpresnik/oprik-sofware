'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CourseProps } from "@/interface/courseInterface"
import Image from "next/image"
import { useState } from "react";
import VideoSwiper from "./VideoAcordion";

export function AcorddionAcademy({ course }: CourseProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Introduccion</AccordionTrigger>
                <AccordionContent>{course.introduction}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Cosas que se veran en la cursada</AccordionTrigger>
                <AccordionContent>
                    {course.course_things_acordion?.map((thing) => (
                        <p className="text-xl py-2" key={thing.title}>- {thing.title}</p>
                    ))}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger onClick={() => setIsOpen(!isOpen)}>Proyecto Final</AccordionTrigger>
                <AccordionContent>
                    <p className="mb-4">{course.final_proyect_preview?.description}</p>
                  
                    {isOpen ? (
                        <VideoSwiper videos={course.final_proyect_preview?.video_preview_url || []} />
                    ) : (
                        ''
                    )}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Certificado</AccordionTrigger>
                <AccordionContent>
                    <div className="">
                        <Image
                            src={'https://res.cloudinary.com/dbgt948uj/image/upload/v1737758060/Certificado_Diploma_de_Reconocimiento_Profesional_Cl%C3%A1sico_Dorado_y_Azul_1_h9xulw.png'}
                            width={900}
                            height={500}
                            className="w-full"
                            alt="Diplomatura"
                        />
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

