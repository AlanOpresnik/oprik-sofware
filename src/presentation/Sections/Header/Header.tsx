import { Code, Globe } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header className="text-white  md:flex justify-between md:mt-16  items-center   ">
            <div className="mt-16">
                <p className="text-xl text-[#FEF08A] font-semibold">
                    Oprik Software
                </p>
                <p className="text-6xl w-[370px] md:w-auto md:text-6xl mb-4 font-bold">Convertimos tus ideas en <span className="text-[#FEF08A]">realidad</span></p>
                <p className=" md:text-xl max-w-[700px]">
                    Desarrollamos <span className="text-[#FEF08A]">Aplicaciones y paginas web</span> para empresas o emprendimientos, estamos enfocados en darle el mayor crecimiento
                    a tu negocio en el menor tiempo posible, con soluciones de ventas , gestion, organizacion de tu stock y un <span className="text-[#FEF08A]">panel de administracion </span> para modificar tus productos a tu gusto en pocos clicks
                </p>
                <div className="flex gap-3 mb-2 mt-2">

                    <button className="mt-4 border px-2 py-4 text-sm flex items-center gap-1 hover:bg-slate-100 hover:text-black transition-colors  rounded-xl">
                        <Globe className="hover:rotate-180 transition-all" size={19} />
                        Empecemos tu web
                    </button>
                    <button className="mt-4 border px-2 py-2 text-sm flex items-center bg-slate-200 text-black gap-1 hover:bg-slate-100 hover:text-black transition-colors  rounded-xl">
                        <Code className="hover:rotate-180   transition-all" size={19} />
                        Planes de desarrollo
                    </button>
                </div>
            </div>
            <div className="relative shake-animation">
                <div>
                    <Image alt="Imagen codigo" src={'/code1.png'} width={550} height={500} />
                </div>
                <div className="absolute top-20 left-40">
                    <Image alt="Imagen codigo" src={'/code2.png'} className='max-h-[450px] min-h-[350px] sm:h-[600] md:h-auto' width={500} height={500} />
                </div>

            </div>
        </header>
    )
}

export default Header