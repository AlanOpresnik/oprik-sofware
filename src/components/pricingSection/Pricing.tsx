import { PropsWithChildren } from "react";

const Pricing = () => {
  return (
    <section className="relative  text-white pb-12 pt-20 ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 md:mb-[120px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Tabla de precios
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Planes pensados para vos
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Contamos con diferentes planes para desarrollar una web, estos
                son los mas elejidos por nuestros clientes,x
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            <PricingCard
              clasName={"mb-12"}
              active={false}
              type="Personal"
              price="$79.990"
              subscription="unico pago"
              description="Perfecto para un sitio web personal, por ejemplo un portfolio web"
              buttonText="Plan Personal"
            >
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Diseño personalizado{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Dominio .com / .com.ar{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Certificado de Seguridad SSL{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Boton de Watshapp en la pagina{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Formulario de contacto por correo{" "}
              </div>

              <div className="flex gap-2">
                <XIcon className={"text-red-500"} />
                Panel de adminsitracion{" "}
              </div>
              <div className="flex gap-2">
                <XIcon className={"text-red-500"} />
                Ecommerce / Tienda online{" "}
              </div>
            </PricingCard>
            <PricingCard
              className={"md:top-[-80px]"}
              type="Emprendimiento"
              price="$170.000"
              subscription="Unico pago"
              description="Perfecto para una tienda Online, para poder gestionar ventas, ordenes y stock"
              buttonText="Plan Emprendimiento"
              active
            >
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Diseño personalizado{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Dominio .com / .com.ar{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Certificado de Seguridad SSL{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Boton de Watshapp en la pagina{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Formulario de contacto por correo{" "}
              </div>

              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Panel de adminsitracion{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Ecommerce / Tienda online{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Mercado pago{" "}
              </div>
              <div className="flex gap-2">
                <XIcon className={"text-red-500"} />
                Sistema de cotizacion de envios{" "}
              </div>
              <div className="flex gap-2">
                <XIcon className={"text-red-500"} />
                Sistema de descuento por cupones{" "}
              </div>
            </PricingCard>
            <PricingCard
              active={false}
              type="Personalizado"
              price="Precio a cotizar"
              subscription=""
              description="Perfecto para empresas o emprendimientos que necesiten un sitio web con todas las prestaciones"
              buttonText="Choose Professional"
            >
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Diseño personalizado{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Dominio .com / .com.ar{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Certificado de Seguridad SSL{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Boton de Watshapp en la pagina{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Formulario de contacto por correo{" "}
              </div>

              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Panel de adminsitracion{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Ecommerce / Tienda online{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Mercado pago{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Sistema de cotizacion de envios{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />
                Sistema de descuento por cupones{" "}
              </div>
              <div className="flex gap-2">
                <CheckIcon className={"text-green-500"} />Y mucho mas...{" "}
              </div>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  className,
  active,
}: any) => {
  return (
    <>
      <div className={`${className}  w-full px-4 md:w-1/2 lg:w-1/3`}>
        <div
          className={`${className} relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]`}
        >
          <span className="mb-3 block text-lg font-semibold text-primary">
            {type}
          </span>
          <h2 className="mb-5 text-[40px] font-bold text-dark dark:text-white">
            {price}
            <span className="text-base font-medium text-body-color dark:text-dark-6">
              / {subscription}
            </span>
          </h2>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
          <a
            href="/#"
            className={` ${
              active
                ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-semibold text-black transition hover:bg-opacity-90"
                : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary  dark:border-dark-3"
            } `}
          >
            {buttonText}
          </a>
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

const List = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};
