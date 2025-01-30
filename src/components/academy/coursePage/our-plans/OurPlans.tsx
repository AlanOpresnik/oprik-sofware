'use client';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CourseCard from "./Course-card";
import { coursesDataMock } from "@/app/courses-data-mock/courses-data-mock";


const OurPlans = () => {
    const [showNavigation, setShowNavigation] = useState(false);

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={showNavigation} // Solo mostrar navegación si es necesario
            breakpoints={{
                240: { slidesPerView: 1.2 },
                540: { slidesPerView: 1.3 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.1 },
            }}
            modules={[Navigation]}
            className={`mySwiper custom-swiper-navigation ${showNavigation ? "" : "hide-navigation"
                }`}
            onInit={(swiper) => {
                // Mostrar navegación solo si hay más slides que los visibles
                const slidesPerView = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : parseInt(swiper.params.slidesPerView as string, 10);
                setShowNavigation(swiper.slides.length > slidesPerView);
            }}
            onUpdate={(swiper) => {
                const slidesPerView = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : parseInt(swiper.params.slidesPerView as string, 10);
                setShowNavigation(swiper.slides.length > slidesPerView);
            }}
        >
            {coursesDataMock.map((course, index) => (
                <SwiperSlide key={index}>
                    <CourseCard course={course} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OurPlans;
