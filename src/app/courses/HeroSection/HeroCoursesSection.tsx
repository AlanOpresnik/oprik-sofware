import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

interface HeroCoursesSectionProps {
    searchTerm: string
    onSearchChange: (value: string) => void
    onReset: () => void
}

const HeroCoursesSection: React.FC<HeroCoursesSectionProps> = ({ searchTerm, onSearchChange, onReset }) => {
    return (
        <section className="relative pt-32">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

            <div className="relative text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nuestras cursadas Online</h1>
                <p className="text-xl text-zinc-300 mb-8">
                    Explora nuestra variedad de programas diseñados para convertirte en un profesional de la tecnología
                </p>

                <div className="relative max-w-xl mx-auto mb-12">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar cursos..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full px-5 py-4 rounded-full bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 pl-12"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
                    </div>


                </div>
            </div>
        </section>
    )
}

export default HeroCoursesSection