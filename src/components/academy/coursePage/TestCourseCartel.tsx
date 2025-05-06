import { wspNum } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'

const TestCourseCartel = () => {
    return (
        <div className="bg-white p-6 md:p-16 rounded-xl mt-32 md:grid gap-12 grid-cols-2" >
            <div>
                <p className="text-2xl mb-4 md:text-3xl text-balance  xl:text-4xl font-bold">Tenes 2 clases de prueba completamente gratis!</p>
            </div>
            <div>
                <p className="text-lg md:text-xl xl:text-2xl">Te ofrecemos 2 clases de prueba gratis , y si no cumplimos con tus expectativas, podes dejar de cursar sin problemas ni preguntas</p>
                <Link href={`${wspNum}`} className="bg-secondary flex w-full text-center justify-center md:w-fit items-center gap-2 text-black font-semibold text-lg p-3 rounded-xl  mt-6">
                    Inscribirme ahora
                </Link>
            </div>
        </div >
    )
}

export default TestCourseCartel