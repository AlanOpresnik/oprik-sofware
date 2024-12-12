
import ClientSwiper from "@/components/Clients/ClientSwiper.tsx/ClientSwiper";
import { Pricing } from "@/components/pricingSection/Pricing";
import ContactSection from "@/presentation/Sections/Contact/ContactSection";

import Expectation from "@/presentation/Sections/Expectation/Expectation";
import Header from "@/presentation/Sections/Header/Header";
import InovationSection from "@/presentation/Sections/Inovation/InovationSection";
import UsInformationSection from "@/presentation/Sections/UsInformation/UsInformationSection";
import YourApp from "@/presentation/Sections/yourApp/YourApp";
import { ArrowUpIcon } from "lucide-react";





export default async function Home() {


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
      <section id="todo para tu app" className="mt-0 mb-24">
        <div>
          <YourApp />
        </div>
      </section>
      <section id="informacion nuestra" className="max-w-[1280px] mx-auto">
        <div>
          <UsInformationSection />
        </div>
      </section>
      <section id="nos diferenciamos" className="mt-24 mb-24 max-w-[1280px] mx-auto">
        <div>
          <InovationSection />
        </div>
      </section>
      <section id="nos diferenciamos" className="mt-24 mb-24 max-w-[1280px] mx-auto">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-4xl text-white font-bold text-center mb-2">Te quedo alguna duda?</p>
          <div>
            <ContactSection />
          </div>
        </div>
      </section>
      {/* <div className={` ${isScrolled ? 'opacity-100' : "opacity-0"} transition-all bg-primary z-30 p-2 hover:opacity-80 rounded-full flex items-center right-5 bottom-5 md:right-10 md:bottom-10 fixed`}>
        <button onClick={scrollToTop}><ArrowUpIcon /></button>
      </div> */}
    </>
  );
}
