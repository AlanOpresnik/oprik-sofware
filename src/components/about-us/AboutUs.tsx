import { ArrowRight } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className="text-white">


            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
                <div className="">
                    <div className="grid  grid-cols-1 mx-auto  lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        <div>
                            <div className="text-center lg:text-left">
                                <p className='text-sm md:text-base text-primary'>Un poco sobre nosotros</p>
                                <h1 className="text-4xl font-bold leading-tight  sm:text-5xl sm:leading-tight lg:leading-tight lg:text-7xl text-white" >Evolucionando la forma de <span className="text-primary">aprender</span></h1>
                                <p className="mt-2 text-lg hidden md:block text-white sm:mt-8 font-inter"> Nuestra propuesta es modernizar el sistema de aprendizaje para que las personas puedan estudiar desde la comodidad de sus casas, simplemente con una conexión a internet y una computadora. </p>
                                <p className="mt-2 text-lg block md:hidden text-white sm:mt-8 font-inter"> Nuestra propuesta es modernizar el sistema de aprendizaje para hacerlo mas facil y adaptable </p>
                                <div className='my-12 flex justify-center md:justify-start'>
                                    <Link className='bg-primary text-black flex items-center gap-2 w-fit font-semibold rounded-full p-4' href={'/academy'}>


                                        Ver nuestras cursadas
                                        <ArrowRight size={18} color='black' />
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                <div className="flex items-center">
                                    <p className="text-3xl font-medium text-white sm:text-4xl font-pj">+200</p>
                                    <p className="ml-3 text-sm text-white font-pj">Alumnos<br />Graduados</p>
                                </div>

                                <div className="hidden sm:block">
                                    <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                        <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                        <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                        <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                        <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                    </svg>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-3xl font-medium text-white sm:text-4xl font-pj">5.0 </p>
                                    <p className="ml-3 text-sm text-white font-pj">Calificacion<br />Perfecta</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Image width={1080} height={600} className="md:h-[800px] object-cover object-center rounded-xl" src="https://res.cloudinary.com/dbgt948uj/image/upload/v1738271661/woman-being-quarantined-home_1_lqe3kt.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default AboutUs;