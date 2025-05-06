import {Link} from "next-view-transitions"
import Image from "next/image"
import { GraduationCap, Clock, Search } from "lucide-react"
import { coursesDataMock } from "../courses-data-mock/courses-data-mock"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Cursos - Oprik Software Academy",
    description: "Explora nuestra variedad de cursos de programación y tecnología",
}

export default function CoursesPage() {
    return (
        <div className="flex px-2 min-h-screen flex-col">
            <main className="">
                {/* Hero Section */}
                <section className="relative pt-32  ">
                    <div className="absolute  inset-0 "></div>
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

                    <div className=" relative">
                        <div className=" text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nuestras cursadas Online</h1>
                            <p className="text-xl text-zinc-300 mb-8">
                                Explora nuestra variedad de programas diseñados para convertirte en un profesional de la tecnología
                            </p>

                            <div className="relative max-w-xl mx-auto mb-12">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Buscar cursos..."
                                        className="w-full px-5 py-4 rounded-full bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 pl-12"
                                    />
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
                                </div>
                                <div className="flex flex-wrap gap-2 justify-center mt-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full bg-zinc-700 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                                    >
                                        Todos
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full bg-zinc-700 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                                    >
                                        Desarrollo Web
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full bg-zinc-700 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                                    >
                                        Móvil
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full bg-zinc-700 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                                    >
                                        Data Science
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full bg-zinc-700 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                                    >
                                        UX/UI
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Courses Grid */}
                <section className="py-16  relative">


                    <div className="">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coursesDataMock.map((course) => (
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
                            ))}
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
