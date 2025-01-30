import ClientSwiper from "@/components/Clients/ClientSwiper.tsx/ClientSwiper";
import DividerDays from "@/components/dividerDays/DividerDays";
import { Pricing } from "@/components/pricingSection/Pricing";
import ContactSection from "@/presentation/Sections/Contact/ContactSection";
import Expectation from "@/presentation/Sections/Expectation/Expectation";
import Header from "@/presentation/Sections/Header/Header";
import InovationSection from "@/presentation/Sections/Inovation/InovationSection";
import Services from "@/presentation/Sections/Services/Services";
import Experiencie from "@/presentation/Sections/experience/Experiencie";
import YourApp from "@/presentation/Sections/yourApp/YourApp";

export default function OprikSoftwarePage() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden ">
      <Header />
      <section className="mt-44 px-2">
        <ClientSwiper />
      </section>
      <div className="mt-12 px-2 ">
        <p className="text-3xl text-white font-semibold">
          Que vamos a conseguir
        </p>
        <Expectation />
      </div>
      <div className="">
        <DividerDays />
      </div>
      <section id="precio" className="px-4 md:px-0 ">
        <Pricing />
      </section>
      <section className="px-2">
        <Services />
      </section>
      <section id="todo para tu app" className="mt-0 mb-24 px-2">
        <div>
          <YourApp />
        </div>
      </section>
      <div className="px-2">
        <Experiencie />
      </div>
      <section
        id="nos-diferenciamos"
        className="mt-24 mb-24 mx-auto"
      >
        <div className="px-2">
          <InovationSection />
        </div>
      </section>
      <section
        className="mt-24 mb-24  mx-auto px-2"
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-4xl text-white font-bold text-center mb-2">
            Te quedo alguna duda?
          </p>
          <div>
            <ContactSection />
          </div>
        </div>
      </section>
      {/* <div className={` ${isScrolled ? 'opacity-100' : "opacity-0"} transition-all bg-primary z-30 p-2 hover:opacity-80 rounded-full flex items-center right-5 bottom-5 md:right-10 md:bottom-10 fixed`}>
        <button onClick={scrollToTop}><ArrowUpIcon /></button>
      </div> */}
    </div>
  );
}
