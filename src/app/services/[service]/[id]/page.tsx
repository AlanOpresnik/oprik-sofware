import Image from "next/image";
import FadeInWrapper from "@/components/fadeInWrapper/FadeInWrapper";
import { Metadata } from "next";
import TechsPlan from "@/components/techsPlan/TechsPlan";
import serviceData from "@/mock/serviceData";
import ServiceCardPlan from "@/components/serviceCard/ServiceCardPlan";

type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = (await params).id;

  // fetch data
  const data = serviceData.find((s) => s.id.toString() === id);

  return {
    title: `Servicio ${data?.type} OPRIK SOFTWARE`,
  };
}

const ServicePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const servicio = serviceData.find((item) => item.id.toString() === id);

  if (!servicio) {
    return (
      <div className="text-white">
        <p>El Servicio especificado no existe.</p>
      </div>
    );
  }

 

 
  return (
    <FadeInWrapper>
      <div className="mt-6 md:mt-12 flex flex-col md:grid md:grid-cols-2 md:gap-12 text-white">
        {/* Información del plan */}
        <div className="pr-4">
          <p className="text-4xl font-semibold mb-2">
           <span className="">{servicio.type}</span>
          </p>
          <p>{servicio.largeDescription}</p>
          <div className="hidden md:block">
            <div className="pt-4 border-t mt-4">
              <p className="text-2xl font-semibold">
                Tecnologías que se usarán
              </p>
            </div>
            <div className="flex max-w-[120px] gap-6 mt-4 py-4">
              {servicio.images.map((img, i) => (
                <Image
                  className="w-[30px] h-fit md:w-[40px]"
                  key={i}
                  src={img}
                  alt="tecnología usada"
                  width={50}
                  height={60}
                />
              ))}
            </div>
            <TechsPlan plan={servicio} />
          </div>
        </div>

        {/* Tarjeta del plan */}
        <ServiceCardPlan plan={servicio} />

        {/* Tecnologías en pantallas pequeñas */}
        <div className="md:hidden">
          <div className="pt-4">
            <p className="text-2xl font-semibold">Tecnologías que se usarán</p>
          </div>
          <div className="flex max-w-[120px] gap-6 mt-4 py-4">
            {servicio.images.map((img, i) => (
              <Image
                className="w-[30px]"
                key={i}
                src={img}
                alt="tecnología usada"
                width={50}
                height={60}
              />
            ))}
          </div>
          <div className="mt-4">
            {servicio.techs.map((tech, i) => (
              <div key={i} className="my-6">
                <div className="flex gap-2 items-center">
                  <p className="text-xl font-semibold text-primary border-b">
                    {tech.title}:
                  </p>
                  <p className="mt-1 text-orange-200">{tech.for}</p>
                </div>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/*
        <div className="mt-2">
          <p className="text-4xl font-semibold">
            Proyectos Realizados con este plan
          </p>
          <div className="flex items-center gap-6 mt-6">
            {CATEGORY_CLIENTS_MATCH.map((c) => (
              <div className="hover:border p-2 rounded-xl">
                <Link target="_blank" href={c.web} className="  rounded-xl">
                  <Image
                    className="rounded-md "
                    src={c.webImg}
                    width={600}
                    height={400}
                    alt={c.name}
                  />
                  <div className="flex flex-col gap-1 ">
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-semibold mt-4">
                        {c.personRole}
                      </p>
                      <ExternalLink size={20} className="mr-2 mt-2" />
                    </div>
                    <p className="text-primary">{c.plan}</p>
                    <p className="line-clamp-3">{c.overview}</p>
                    <p className="text-primary font-semibold hover:underline">
                      Visitar web
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>*/}
       
      </div>
    </FadeInWrapper>
  );
};

export default ServicePage;
