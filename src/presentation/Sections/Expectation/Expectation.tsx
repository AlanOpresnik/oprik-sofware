'use client';
import { Expectations } from './ExpectationData';
import ExpectationCard from './Card/ExpectationCard';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Expectation = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detectamos si es mobile o desktop
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 996); // Puedes ajustar el valor para el breakpoint de mobile
        };

        handleResize(); // Ejecutamos una vez al cargar la página
        window.addEventListener('resize', handleResize); // Añadimos el listener para el resize

        return () => window.removeEventListener('resize', handleResize); // Limpiamos el listener
    }, []);
    useEffect(() => {
        // Registra el plugin de ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        const startPosition = isMobile ? "top 100%" : "top 75%";
        // Animación de aparición secuencial para todas las tarjetas
        gsap.fromTo(
            '#expectation-card', // Selector para todas las tarjetas
            { opacity: 0, y: 200 }, // Estado inicial
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.2, // Retraso entre las animaciones de las tarjetas (0.2 segundos)
                scrollTrigger: {
                    trigger: '#expectation-card', // El trigger es la clase de todas las tarjetas
                    start: startPosition, // Inicia la animación cuando el 75% del viewport alcanza la tarjeta
                    toggleActions: "play none none none", // Solo reproduce la animación una vez
                    once: true, // La animación solo se reproduce una vez cuando la tarjeta entra en la vista
                },
            }
        );
    }, []);

    return (
        <div className='mt-4 flex flex-wrap justify-center w-full gap-6 items-center py-2'>
            {Expectations.map((espect, index) => (
                <ExpectationCard
                    key={index}
                    title={espect.title}
                    overview={espect.description}
                    image={espect.image}
                    id={`expectation-card`} // Asignar un ID único a cada tarjeta
                />
            ))}
        </div>
    );
};

export default Expectation;
