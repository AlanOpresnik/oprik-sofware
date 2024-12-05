import ClientCard from "@/components/Clients/ClientCard/ClientCard";
import ClientSwiper from "@/components/Clients/ClientSwiper.tsx/ClientSwiper";
import Pricing from "@/components/pricingSection/Pricing";
import Expectation from "@/presentation/Sections/Expectation/Expectation";
import Header from "@/presentation/Sections/Header/Header";
import { Code, Globe } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
    <section className="mt-44">
      <p className="text-3xl  text-white mb-12 font-semibold">Nuestros clientes dicen</p>
      <ClientSwiper />
    </section>
    <div className="mt-6">
      <p className="text-3xl text-white font-semibold">Que vamos a conseguir</p>
      <Expectation/>
    </div>
    <section>
      <Pricing/>
    </section>
  <section>
    <p className="text-3xl text-white font-semibold mb-6">Un poco sobre nosotros</p>
  </section>
    </>
  );
}
