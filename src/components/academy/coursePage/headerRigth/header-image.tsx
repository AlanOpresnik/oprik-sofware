import { CourseProps } from '@/interface/courseInterface'
import Image from 'next/image'
import React from 'react'

const HeaderImage = ({course}: CourseProps) => {
    return (
        <div id="code" className="">
            <div className="z-10 relative">
                <div
                    className="relative md:w-[320px] lg:w-[470px] bg-[#0e0e0e] rounded-[84px] h-[590px]"
                    style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
                    }}
                >
                    <Image
                        className="object-cover z-40 w-full h-full"
                        alt="Imagen código"
                        src={course.img ? course.img : 'https://res.cloudinary.com/dbgt948uj/image/upload/v1737752771/freepik__young-woman-with-light-skin-and-long-dark-brown-ha__69468_tksewm.jpg'}
                        width={2050}
                        height={500}
                        style={{
                            position: 'absolute',
                            bottom: '1%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 0,
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)', // Sombra suave
                            borderRadius: '8px', // Si quieres bordes redondeados
                        }}
                    />
                </div>
                    <div className='absolute rounded-full top-[-20px] left-0 md:left-[-40px]'>
                        <Image className='rounded-full' src={course.icons? course.icons[0].icon : '/nextjs.png'} alt="Next.js" width={80} height={100} />
                    </div>
                    <div className='absolute bottom-[0px] right-0 lg:right-[-40px] rounded-full'>
                        <Image className='rounded-full' src={course.icons?.[1]?.icon ? course.icons[1].icon : 'https://res.cloudinary.com/dbgt948uj/image/upload/v1737825846/react_pycuqf.webp'} alt="React" width={80} height={100} />
                    </div>
            </div>

        </div>
    )
}

export default HeaderImage