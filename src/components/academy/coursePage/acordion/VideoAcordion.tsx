'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";

interface Props {
    videos: string[];
}

export default function VideoSwiper({ videos }: Props) {
    const swiperRef = useRef<SwiperType | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [showNavigation, setShowNavigation] = useState(false);

    const handleSlideChange = () => {
        // Detener todos los videos
        videoRefs.current.forEach((video) => {
            if (video) {
                video.pause();
                video.currentTime = 0; // Reiniciar el video
            }
        });

        // Reproducir el video del slide activo
        const activeSlide = swiperRef.current?.activeIndex;
        const activeVideo = activeSlide !== undefined ? videoRefs.current[activeSlide] : null;
        if (activeVideo) {
            setTimeout(() => {
                activeVideo.play().catch(error => {
                    console.error('Error al reproducir el video:', error);
                });
            }, 50);
        }
    };

    useEffect(() => {
        handleSlideChange();
    }, []);

    return (
        <>
            <p className="mb-2 border-t pt-2">
                {videos.length > 1
                    ? "Estos son ejemplos BÁSICOS, NO son el proyecto final de la cursada"
                    : "Este es un ejemplo BÁSICO, NO es el proyecto final de la cursada"}
            </p>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={showNavigation}
                pagination={{ clickable: true }}
                spaceBetween={30}
                breakpoints={{
                    300: {
                        slidesPerView: 1.2,
                    },
                }}
                className={`mySwiper custom-swiper-navigation ${showNavigation ? "" : "hide-navigation"}`}
                onInit={(swiper) => {
                    swiperRef.current = swiper; // Guardamos la instancia de Swiper
                    setShowNavigation(swiper.slides.length > (swiper.params.slidesPerView as number));
                }}
                onUpdate={(swiper) => {
                    setShowNavigation(swiper.slides.length > (swiper.params.slidesPerView as number));
                }}
                onSlideChange={handleSlideChange}
            >
                {videos?.map((video, index) => (
                    <SwiperSlide key={index}>
                        <video
                            ref={(el) => {
                                videoRefs.current[index] = el;
                            }}
                            className="max-h-[400px]"
                            muted
                        >
                            <source src={video} type="video/mp4" />
                            Tu navegador no soporta videos.
                        </video>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
