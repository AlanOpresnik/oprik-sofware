'use client'
import ClientSwiper from "@/components/Clients/ClientSwiper.tsx/ClientSwiper";
import Pricing from "@/components/pricingSection/Pricing";
import Expectation from "@/presentation/Sections/Expectation/Expectation";
import Header from "@/presentation/Sections/Header/Header";
import InovationSection from "@/presentation/Sections/Inovation/InovationSection";
import UsInformationSection from "@/presentation/Sections/UsInformation/UsInformationSection";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  useEffect(() => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }, [])

  return (
    <>
      <Header />
      <section id="clientes" className="mt-44">
        <p className="text-3xl  text-white mb-12 font-semibold">Nuestros clientes dicen</p>
        <ClientSwiper />
      </section>
      <div className="mt-6">
        <p className="text-3xl text-white font-semibold">Que vamos a conseguir</p>
        <Expectation />
      </div>
      <section id="precio" className="px-4 md:px-0 overflow-x-hidden">
        <Pricing />
      </section>
      <section id="informacion nuestra" className="">
        <div>
          <UsInformationSection />
        </div>
      </section>
      <section id="nos diferenciamos" className="mt-24 mb-24">
        <div>
          <InovationSection />
        </div>
      </section>
      <div className={` ${isScrolled ? 'opacity-100' : "opacity-0"} transition-all bg-primary z-30 p-2 hover:opacity-80 rounded-full flex items-center right-5 bottom-5 md:right-10 md:bottom-10 fixed`}>
        <button onClick={scrollToTop}><ArrowUpIcon /></button>
      </div>
    </>
  );
}
