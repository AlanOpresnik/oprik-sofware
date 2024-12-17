import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const ContactSection = () => {
    useEffect(() => {
        // Registra el plugin de ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
    
     
        gsap.fromTo(
    
         '#form',
          { opacity: 0, y: 200 }, 
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: '#form',
              start: "top 76%", // Inicia la animación cuando el 80% del viewport alcanza el componente
              toggleActions: "play none none none", // Solo reproduce la animación una vez
            },
          }
        );
      }, []);
    return (
        <div id="form" className="relative flex justify-center p-12 bg-white bg-opacity-10 rounded-xl  sm:items-center pb-14">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Contact Information Section */}
                        <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                            <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                Ponete en contacto con nosotros
                            </h1>
                            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                Completa el formulario y envia tu consulta
                            </p>

                            {/* Address */}



                            {/* Phone Number */}
                            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +54 9 11 2349-8925
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    alanopk328@gmail.com
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <form className="p-6 flex flex-col justify-center">
                            {/* Full Name */}
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nombre completo"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                           
                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Mensaje
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Mensaje"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="md:w-32 bg-primary hover:bg-blue-dark text-black  font-bold py-3 px-6 rounded-lg mt-3 hover:bg-opacity-70 transition ease-in-out duration-300"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
