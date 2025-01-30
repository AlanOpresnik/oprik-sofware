import Image from 'next/image'
import React from 'react'

interface Props {
    item: {
        title: string,
        img: string,
        description: string
    }
}

const WhyUsCard = ({ item }: Props) => {
    return (
        <div className="flex  mb-8  flex-col gap-4 rounded-3xl bg-white">
            <div>
                <Image className='w-full aspect-video h-[260px] rounded-t-xl object-fill' src={item.img} width={500} height={500} alt={item.title} />
            </div>
            <div className='text-black px-6 pb-6 flex flex-col justify-center text-center'>
                <p className=" text-2xl mb-3 font-semibold">{item.title}</p>
                <p className="text-gray-500 text-lg">{item.description}</p>
            </div>
        </div>
    )
}

export default WhyUsCard