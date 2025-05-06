
import OurPlans from "@/components/academy/coursePage/our-plans/OurPlans";
import PaymentMethods from "@/components/academy/coursePage/payment_methods/Payment_methods";
import TestCourseCartel from "@/components/academy/coursePage/TestCourseCartel";
import WhyUsCard from "@/components/academy/coursePage/Why-us/Why-us-card";
import { why_us_data } from '@/components/academy/coursePage/Why-us/why-us-data'
import DividerCTA from "@/components/academy/dividerCTA/DividerCTA";
import HeaderAcademy from "@/components/academy/Header/Header-academy";
import HeroMain from "@/components/HeroMain/HeroMain";




const AcademyPage = () => {
    return (
        <div className='py-16'>
            <header>
                <HeaderAcademy />
            </header>
            
            <section>
                <TestCourseCartel />
            </section>
            <div className="mt-32">
                <div className="flex justify-center" >
                    <p className="text-white text-center text-4xl font-semibold flex flex-col md:flex-row gap-2">¿Por qué nuestra <span className="bg-secondary p-1 rounded-full text-black font-bold">Academia</span> <span className="hidden md:block">?</span></p> <span className="text-white  text-center mt-12 ml-2 text-4xl font-semibold flex md:hidden flex-col md:flex-row gap-2">?</span>
                </div>
                <div className="flex px-4 flex-col justify-center md:grid grid-modify-2 place-items-center xl:grid-cols-4 gap-6  py-12">
                    {why_us_data.map((item) => (
                        <WhyUsCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
            <PaymentMethods />
            <div className="mt-32 mb-12">
                <HeroMain/>
            </div>
            <DividerCTA/>
            <section className="mt-0">
                <div className="mb-12">
                    <p className=" text-4xl text-white font-bold ">Que esperas a inscribirte  </p>
                </div>
                <OurPlans />
            </section>
           
        </div>
    )
}

export default AcademyPage 