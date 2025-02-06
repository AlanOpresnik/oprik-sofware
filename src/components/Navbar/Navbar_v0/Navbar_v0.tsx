"use client";

import * as React from "react";
import {Link} from "next-view-transitions";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { coursesDataMock } from "@/app/courses-data-mock/courses-data-mock";
import { useParams, usePathname } from "next/navigation";
import DrawerNav from "../DrawerMobile/DrawerNav";

export function NavBar() {
    const [open, setOpen] = React.useState(false);
    const [cursoActivo, setCursoActivo] = React.useState<string | null>(null);
    const pathname = usePathname();

    // Mostrar el cartel solo si no estamos en /academy
   
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
    const params = useParams()

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false)
            setCursoActivo(null)
        }, 300)
    }


    React.useEffect(() => {
        setOpen(false)
    }, [params])



    return (
        <nav className={`text-white shadow ${pathname === "/academy/desarrollo-web-fullstack-con-nextjs" ? "pt-6" : "pt-16"}`}>
            <div className="mx-auto lg:px-8">
                <div className="flex left-[-10px] md:left-0 relative md:justify-between items-center gap-2 h-16">
                <div className="md:hidden">
                    <DrawerNav/>
                </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="md:text-xl font-bold text-white">
                                Oprik software
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link href="/" className="text-white inline-flex items-center px-1 pt-1 text-base font-semibold">
                                Inicio
                            </Link>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <button
                                        onMouseEnter={() => setOpen(true)}
                                        onMouseLeave={() => setOpen(false)}
                                        className="text-white inline-flex items-center px-1 pt-1 text-base font-semibold"
                                    >
                                        Cursasadas destacadas
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-3/4 bg-[#222222] text-white border-none px-5"
                                    align="start"
                                >
                                    <div className="grid grid-cols-5 gap-4 p-6">
                                        <div className="col-span-2 space-y-4">
                                            {coursesDataMock.map((curso) => (
                                                <Link
                                                    onMouseEnter={() => setCursoActivo(curso.title)}
                                                    key={curso.title}
                                                    href={`/academy/${curso.slug}`}
                                                    className="hover:bg-gray-100 transition-all hover:text-black p-2 rounded-md w-full py-4 font-semibold block"
                                                >
                                                    {curso.title}
                                                    <p className="text-sm line-clamp-2 font-normal mt-1 w-3/4">{curso.description}</p>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="col-span-3 glass_bg p-6 rounded-lg">
                                            <h3 className="text-md font-semibold mb-1">Información del Curso</h3>
                                            {cursoActivo || coursesDataMock[0] ? (
                                                (() => {
                                                    const curso = coursesDataMock.find((c) => c.title === cursoActivo) || coursesDataMock[0]; // Si no hay cursoActivo, usa el primero
                                                    return curso ? (
                                                        <div>
                                                            <h4 className="font-medium max-w-[460px] text-2xl mb-2">{curso.title}</h4>
                                                            <p className="max-w-[460px] text-white mb-2">{curso.description}</p>
                                                            <p className="text-white">Duración: {curso.requirements[0].duration}</p>
                                                            <p className="text-white">Dedicación: {curso.requirements[0].dedication}</p>
                                                            <p className="text-white">
                                                                {curso.requirements[0].prev_knowledge
                                                                    ? "Conocimientos previos necesarios: " + curso.requirements[0].prev_knowledge
                                                                    : "No se necesitan conocimientos previos"}
                                                            </p>
                                                            <div className="mt-6">
                                                                <Link
                                                                    href={`/academy/${curso.slug}`}
                                                                    className="bg-primary text-center justify-center items-center gap-2 text-black font-semibold text-lg p-2 rounded-xl mt-6"
                                                                >
                                                                    Ver más información
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ) : null;
                                                })()
                                            ) : (
                                                <p className="text-sm text-white">Pasa el cursor sobre un curso para ver más información.</p>
                                            )}
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                            <Link href="/about-us" className="text-white inline-flex items-center px-1 pt-1 text-base font-semibold">
                                Acerca de
                            </Link>
                            <Link href="https://wa.me/+541123498925" className="text-white inline-flex items-center px-1 pt-1 text-base font-semibold">
                                Contacto
                            </Link>
                        </div>
                        <div className="">
                            <Link
                                href={"https://wa.me/+541123498925"}
                                className="px-5 py-2 !text-white border bg-transparent rounded-xl text-sm hover:bg-slate-50 transition-colors hover:!text-black font-semibold"
                            >
                                Contactar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
