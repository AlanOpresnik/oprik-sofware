import { AcorddionAcademy } from "@/components/academy/coursePage/acordion/Acordion"
import Header from "@/components/academy/coursePage/Header"
import OurPlans from "@/components/academy/coursePage/our-plans/OurPlans";
import PaymentMethods from "@/components/academy/coursePage/payment_methods/Payment_methods";
import Requirements from "@/components/academy/coursePage/requirements/Requirements";
import StartCourseDate from "@/components/academy/coursePage/Start-Course-date/Start-courde-date";
import TestCourseCartel from "@/components/academy/coursePage/TestCourseCartel";
import WhyUsCard from "@/components/academy/coursePage/Why-us/Why-us-card";
import { why_us_data } from '@/components/academy/coursePage/Why-us/why-us-data'
import { coursesDataMock } from "@/app/courses-data-mock/courses-data-mock";


const CorusePage = async ({ params }: { params: Promise<{ course: string }> }) => {
    const slug = (await params).course
    const course = coursesDataMock.find((course) => course.slug === slug)
    if (!course) return 'No hay curso con ese slug'

    return (
        <div className='py-16'>
            <header>
                <Header course={course}/>
            </header>
            <main className="text-white mt-32 md:grid grid-cols-2 gap-11">
                <div className="flex flex-col gap-6">
                    <p className="text-5xl font-bold">Acerca de la cursada</p>
                    <div>
                        <AcorddionAcademy course={course} />
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <Requirements price={course.price} requirements={course.requirements} />
                </div>
            </main>
            <section>
                <TestCourseCartel />
            </section>
            <div className="mt-32">
                <div className="flex justify-center" >
                    <p className="text-white text-center text-4xl font-semibold flex flex-col md:flex-row gap-2">¿Por qué nuestra <span className="bg-primary p-1 rounded-full text-black font-bold">Academia</span> <span className="hidden md:block">?</span></p> <span className="text-white  text-center mt-12 ml-2 text-4xl font-semibold flex md:hidden flex-col md:flex-row gap-2">?</span>
                </div>
                <div className="flex px-4 flex-col justify-center md:grid grid-modify-2 place-items-center xl:grid-cols-4  gap-6  py-12">
                    {why_us_data.map((item) => (
                        <WhyUsCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
            <PaymentMethods />
            <div>
                <p className="text-4xl text-white font-bold mt-32 mb-6">Fechas de inicio</p>
                <StartCourseDate course={course} />
            </div>
            <section className="mt-32">
                <div className="mb-12">
                    <p className=" text-4xl text-white font-bold ">Tambien podes inscribirte </p>
                </div>
                <OurPlans />
            </section>
        </div>
    )
}

export default CorusePage