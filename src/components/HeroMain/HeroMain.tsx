import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const HeroMain = () => {
    return (
        <div className="flex  ">

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative  ">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                    <div className="container relative flex flex-col items-center text-center">
                        <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-500 mb-6">
                            Tu futuro en programación comienza aquí
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-[900px] font-bold tracking-tighter text-white mb-6">
                            Aprende a programar y transforma tu futuro
                        </h1>
                        <p className="max-w-[800px] text-xl md:text-2xl text-zinc-400 mb-8">
                            Formamos a los desarrolladores del futuro con metodologías innovadoras y proyectos reales
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8">
                                Comenzar Ahora
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 text-lg px-8"
                            >
                                Ver Cursos
                            </Button>
                        </div>

                        <div className="mt-16 relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-yellow-500/20">
                            <Image
                                src="https://d2uolguxr56s4e.cloudfront.net/img/kartrapages/video_player_placeholder.gif"
                                alt="Estudiantes programando"
                                width={1280}
                                height={720}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-8">
                                <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/20 gap-2">
                                    Ver Demo de Clases <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default HeroMain