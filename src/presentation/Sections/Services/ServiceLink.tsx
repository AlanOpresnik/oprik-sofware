import { serviceInterface } from "@/interface/serviceInterface";
import { ExternalLink } from "lucide-react";
import { Link } from "next-view-transitions";

import React from "react";
interface Props {
  service: serviceInterface;
}
const ServiceLink = ({ service }: Props) => {
    const href = service.type.replace(/[\s/]+/g, '-').toLowerCase();
    return (
    <Link
      href={`/services/${href}/${service.id}`}
      className="md:hover-effect flex gap-2 text-primary font-semibold mt-4"
    >
      Servicio creacion de Tienda Web / E-commerce completo
      <ExternalLink size={16} />
    </Link>
  );
};

export default ServiceLink;
