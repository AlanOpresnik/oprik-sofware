import { ExternalLink, Phone } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col-reverse md:grid place-items-center  md:h-[80vh] md:grid-cols-2">
      <div>
        <p className="text-white mb-2  text-4xl  md:text-5xl font-semibold">
          Nuestros Servicios personalizados para vos
        </p>
        <p className="text-white mt-4">
          contamos con servicios especializados para cada
          situacion.
        </p>
        <div className="flex flex-col text-sm md:text-base gap-4">
          <Link
            href={"/services/e-commerce-complete"}
            className="md:hover-effect flex gap-2 text-primary font-semibold mt-4"
          >
            Servicio creacion de Tienda Web / E-commerce completo
            <ExternalLink size={16} />
          </Link>
          <Link
            href={"/services/turnos-app"}
            className="md:hover-effect text-primary flex gap-2 font-semibold mt-2"
          >
            Servicio creacion Web/App Para gestión de turnos
            <ExternalLink size={16} />
          </Link>
          <Link
            href={"/services/marketing-digital-ads"}
            className="md:hover-effect text-primary flex gap-2 font-semibold mt-2"
          >
            Marketing digital / Facebook ADS / Campañas de anuncios
            <ExternalLink size={16} />
          </Link>
          <button className="before:ease relative mt-2 md:w-[500px] p-2 py-3 flex justify-center overflow-hidden bg-primary  md:bg-primary/70 font-semibold   transition-all before:absolute before:top-full before:h-0 before:w-[900px] before:origin-center before:-translate-x-0 before:rotate-45  before:bg-primary before:duration-500 rounded-xl hover:text-black  hover:before:h-[600px] hover:before:-translate-y-64 !before:!w-full">
            <span className="relative  flex items-center gap-2">
              <Phone size={20} /> Contactar a WhatsApp por un servicio personalizado
            </span>
            <div className="absolute inset-0 z-0 animate-shine"></div>
          </button>
        </div>
      </div>
      <div className="relative ">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[300px] h-[400px] md:w-[400px] md:h-[700px] bg-gradient-to-tl from-primary/30 to-transparent blur-3xl -z-10"></div>
          <Image
            className="drop-shadow-xl fade-out-image mt-6  shadow-primary"
            src={"/mujer-services.png"}
            width={400}
            height={600}
            alt="work girl"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
