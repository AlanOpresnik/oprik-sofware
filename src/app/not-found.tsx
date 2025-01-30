import React from "react";
import Image from "next/image"; // Si usas Next.js, usa el componente Image
import { Link } from "next-view-transitions";

const NotFoundPage = () => {
  return (
    <div className="h-[80vh] text-white flex items-center justify-center px-5 lg:px-0">
      <div className="max-w-2xl flex flex-col items-center justify-center mx-auto gap-[40px] text-center">
        {/* Imagen 404 */}
        <div className="">
          <div className="max-w-[312px] w-full h-[160px] relative flex justify-center items-center mx-auto">
           <p className="text-primary text-9xl font-bold">404</p>
          </div>
        </div>

        {/* Título */}
        <div>
          <h3 className="text-6xl font-semibold leading-[64px] text-white">
            Pagina no encontrada
          </h3>
        </div>


        {/* Mensaje + Botón */}
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <p className="text-base leading-6 tracking-wider font-sans">
              La pagina que buscas podria haber sido eliminada, tener otro nombre, o estar temporalmente no disponible.
            </p>
          </div>
          <div>

            <Link href={'/'} className="bg-primary text-black p-3  max-w-[146px] w-full h-[48px] rounded-[100px] font-semibold ">
              Volver a la pagina principal
            </Link>
          </div>



        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
