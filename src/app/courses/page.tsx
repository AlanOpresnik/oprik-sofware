'use client'
import { coursesDataMock } from "../courses-data-mock/courses-data-mock"
import { Button } from "@/components/ui/button"
import HeroCoursesSection from "./HeroSection/HeroCoursesSection"
import CourseCard from "./CourseCard/CourseCard"
import { useState } from "react"



export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredCourses = coursesDataMock.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
        <div className="flex px-2 min-h-screen flex-col">
            <main className="">
                {/* Hero Section */}
                <HeroCoursesSection onSearchChange={setSearchTerm} searchTerm={searchTerm} />
                {/* Courses Grid */}
                <section className="py-16 relative">
                <div className="">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <CourseCard key={course.title} course={course} />
                            ))
                        ) : (
                            <p className="text-center text-zinc-400 col-span-full">No se encontraron cursos.</p>
                        )}
                    </div>
                </div>
            </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-500 relative">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700/20 rounded-full blur-3xl -z-10"></div>

                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">¿No encuentras lo que buscas?</h2>
                            <p className="text-xl text-zinc-800 mb-8">
                                Contáctanos para obtener información sobre cursos personalizados para ti o tu empresa
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-black hover:bg-zinc-800 text-white text-lg px-8 rounded-full">
                                    Solicitar Información
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-black text-black hover:bg-black/10 text-lg px-8 rounded-full"
                                >
                                    Ver Todos los Cursos
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-zinc-900 border-t border-zinc-800/50 py-8">
                <div className="container text-center text-zinc-500">
                    <p>© {new Date().getFullYear()} Oprik Software Academy. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    )
}
