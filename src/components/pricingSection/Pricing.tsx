import { PropsWithChildren } from "react";
import pricingPlans from "./pricingData";
import Circles from "./Circles";
import Link from "next/link";

export const Pricing = () => {
  return (
    <section className="relative text-white pb-12 pt-20">
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
                son los más elegidos por nuestros clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              className={plan.className}
              active={plan.active}
              type={plan.type}
              price={plan.price}
              recomended={plan.recomended}
              subscription={plan.subscription}
              description={plan.description}
              buttonText={plan.buttonText}
            >
              {plan.features.map((feature, i) => (
                <div key={i} className="flex gap-2">
                  {feature.available ? (
                    <CheckIcon className="text-green-500" />
                  ) : (
                    <XIcon className="text-red-500" />
                  )}
                  {feature.text}
                </div>
              ))}
            </PricingCard>
          ))}
        </div>
      </div>
    </section>
  );
};



export const PricingCard = ({
  children,
  description,
  price,
  type,
  recomended,
  subscription,
  buttonText,
  className1,
  className,
  active,
}: any) => {
  return (
    <>
      <div className={`${className1} relative  w-full md:px-4 md:w-1/2 lg:w-1/3`}>
        <div className={`absolute ${recomended ? 'right-0 top-[-15px]  md:right-[-10px] md:top-[-95px] z-10 bg-primary' : ''} text-black p-2 rounded-full`}><p className='font-semibold'>{recomended ? '¡Plan mas elejido!' : ''}</p></div>
        <div
          className={`${className} relative  mb-10 overflow-hidden rounded-[10px] border-2 border-stroke px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]`}
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
          <Link
            href={`/plans/${type}`}
            className={` ${active
              ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-semibold text-black transition hover:bg-opacity-90"
              : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary  dark:border-dark-3"
              } `}
          >
            {buttonText}
          </Link>
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
              <Circles />
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
