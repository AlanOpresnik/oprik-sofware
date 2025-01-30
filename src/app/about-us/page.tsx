import AboutUs from '@/components/about-us/AboutUs'
import React from 'react'

const AboutUsPage = () => {
    return (
        <>
            <header>
                <AboutUs />
            </header>

            <div className='mt-36'>
                <p className='text-5xl text-white font-semibold'>Quienes somos ?</p>
            </div>
        </>
    )
}

export default AboutUsPage