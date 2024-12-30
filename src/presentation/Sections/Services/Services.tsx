import { Phone } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="grid place-items-center grid-cols-2">
      <div>
        <p className="text-white mb-2    text-5xl font-semibold">
          No estas para los planes?
        </p>
        <p className="text-white">
          No te preocupes, contamos con servicios especializados para cada
          situacion.
        </p>
        <div className="flex flex-col gap-4">
          <Link
            href={"/services/e-commerce-complete"}
            className="hover-effect text-primary font-semibold mt-4"
          >
            Tienda Web / E-commerce completo
          </Link>
          <Link
            href={"/services/turnos-app"}
            className="hover-effect text-primary font-semibold mt-2"
          >
            Web Para gestión de turnos
          </Link>
          <Link
            href={"/services/marketing-digital-ads"}
            className="hover-effect text-primary font-semibold mt-2"
          >
            Marketing digital / Facebook ADS
          </Link>
          <button className="bg-primary mt-4 p-2 py-3 rounded-xl font-semibold flex justify-center items-center gap-2">
            <Phone size={20} /> Contactar a WhatsApp por un servicio
            personalizado
          </button>
        </div>
      </div>
      <div>
        <Image
          src={"/mujer-services.png"}
          width={400}
          height={600}
          alt="work girl"
        />
      </div>
    </div>
  );
};

export default Services;
