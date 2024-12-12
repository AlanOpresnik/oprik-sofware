import Image from 'next/image'
import React from 'react'

const UsInformationDivider = () => {
    return (
        <div className='flex flex-col gap-4 md:grid grid-cols-2 items-center place-items-center'>
            <div>
                <p className='text-white text-4xl font-semibold mb-6'>Un poco sobre nosotros</p>
                <h4 className='text-white text-lg font-semibold'>Somos una agencia de <span className='text-primary'>Programacion</span> especializada en el desarrollo de <span className='text-primary'>aplicaciones moviles y paginas web</span>, contamos con un equipo de programadores con varios años de experiencia que siempre esta <span className='text-primary'>dispuesto a brindar la mejor atencion </span> y el mejor desempeño para conseguir tu Pagina web soñada</h4>
            </div>
            <div>
                <Image src={'/Ilustration.png'} alt='ilustration' width={550} height={400} />
            </div>
        </div>
    )
}

export default UsInformationDivider