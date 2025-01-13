'use client';
import { Expectations } from './ExpectationData';
import ExpectationCard from './Card/ExpectationCard';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Expectation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectamos si es mobile o desktop
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 996);
    };

    handleResize(); // Ejecutamos una vez al cargar la página
    window.addEventListener('resize', handleResize); // Añadimos el listener para el resize

    return () => window.removeEventListener('resize', handleResize); // Limpiamos el listener
  }, []);

  useEffect(() => {
    // Registramos ScrollTrigger con GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Seleccionamos los elementos con la clase swiper-slide
    const slides = document.querySelectorAll('.swiper-slide');

    // Aplicamos la animación solo en vistas de escritorio
    if (!isMobile) {
      gsap.fromTo(
        slides,
        { opacity: 0, y: 50 }, // Estado inicial
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.3, // Retraso entre cada animación
          scrollTrigger: {
            trigger: '.swiper-container', // El contenedor del Swiper como trigger
            start: 'top 80%', // Inicia la animación cuando el 80% del contenedor entra en la vista
            toggleActions: 'play none none none',
            once: true, // Solo animar una vez
          },
        }
      );
    }
  }, [isMobile]);

  return (
    <div className="mt-4 py-2 w-full">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20} // Espacio entre las tarjetas
        breakpoints={{
          140: {
            slidesPerView: 1, // Mostrar 1 tarjeta en pantallas pequeñas
          },
          224: {
            slidesPerView: 1.4, // Mostrar 1.4 tarjetas en pantallas medianas
          },
          480: {
            slidesPerView: 2.4, // Mostrar 2.4 tarjetas en pantallas más grandes
          },
          640: {
            slidesPerView: 2.2, // Mostrar 2.2 tarjetas
          },
          768: {
            slidesPerView: 2.1, // Mostrar 2.1 tarjetas
          },
          900: {
            slidesPerView: 2.5, // Mostrar 2.5 tarjetas
          },
          1080: {
            slidesPerView: 3.2, // Mostrar 3.2 tarjetas
          },
          1280: {
            slidesPerView: 4, // Mostrar 4 tarjetas
          },
        }}
  
        pagination={{ clickable: true }} // Paginación
      >
        {Expectations.map((espect, index) => (
          <SwiperSlide key={index} className="swiper-slide !h-[350px]">
            <ExpectationCard
              title={espect.title}
              overview={espect.description}
              image={espect.image}
              id={`expectation-card-${index}`} // Asignar un ID único a cada tarjeta
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Expectation;
