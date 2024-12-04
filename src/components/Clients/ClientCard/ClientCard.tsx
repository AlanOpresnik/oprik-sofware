import Image from 'next/image'
import React from 'react'

const ClientCard = () => {
    const cardData = [
        {
            overview: "Muy feliz de poder tener mi portfolio en linea y con todas las funcionalidades que pedi, hasta un visor de espacios 3D en la pagina, el diseño muy moderno y agradable, muy recomendados",
            name: 'Matias Robles',
            personRole: 'Fundador de RoblesRender',
            image:'https://roblesrender.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoPng.0b2e58d5.png&w=256&q=75',
            web: 'https://roblesrender.com'
        },
        {
            overview: "Estamos muy contentos con el sitio web, el diseñador estuvo siempre pendiente de lo que queriamos lograr y transimitir con el diseño, el panel de administracion super intuitivo y funciona todo en tiempo real",
            name: 'Lorena palmieri',
            image: 'https://www.lorecunas.com.ar/assets/logo-c11c7a1b.png',
            personRole: 'Fundadora de Lore Cunas'
        },
        {
            overview: 'Nosotros hicimos un sitio para nuestra casa de alquiler y ninguna queja, muy buen rendimiento y adminsitracion, siempre muy atentos a las necesidades que tuvimos.',
            name: 'Diego Opresnik',
            image: 'https://tuparaisofederacion.com/img/logo1.png',
            personRole: 'Fundador de Tu paraiso Federacion'
        }
    ]
  return (
    <div className='flex gap-12 text-white'>
        {cardData.map((card, index) => (
            <div key={index} className='flex flex-col gap-4'>
                <Image src={card.image} width={100} height={100} alt='logo empresa'  />
                <div className='text-lg font-semibold'>{card.name}</div>
                <div className='text-sm font-medium'>{card.personRole}</div>
                <div className=''>{card.overview}</div>
                <a href={card.web} target='_blank' rel='noopener noreferrer'>
                    <button className='px-5 py-2 text-white border rounded-xl text-normal hover:bg-slate-50 transition-colors hover:!text-black font-semibold'>Visitar sitio web</button>
                </a>
            </div>
        ))}
    </div>
  )
}

export default ClientCard