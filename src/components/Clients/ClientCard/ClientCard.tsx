import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  overview: string;
  image: string;
  personRole: string;
  web: string;
  founder: string;
}

const ClientCard = ({
  name,
  overview,
  image,
  personRole,
  web,
  founder,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-white h-[420px]">
      <div
        key={name}
        className="flex flex-col border p-4 rounded-xl text-center gap-4"
      >
        <div className="flex justify-center items-center h-[120px]">
          <Image loading="eager" src={image} alt={name} width={200} height={300} />
        </div>
        <p className="">" {overview} "</p>
        <p className="font-semibold text-xl">{name}</p>
        <div className="flex justify-center gap-1">
          <p>{founder}</p>
          <p className="text-primary italic font-semibold">{personRole}</p>
        </div>
        <a href={web} target="_blank" rel="noopener noreferrer">
          <button className="px-5 py-2 text-white border rounded-xl text-normal hover:bg-slate-50 transition-colors hover:!text-black font-semibold">
            Visitar sitio web
          </button>
        </a>
      </div>
    </div>
  );
};

export default ClientCard;
