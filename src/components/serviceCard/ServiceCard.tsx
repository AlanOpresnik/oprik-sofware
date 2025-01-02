'use client'
import { useEffect } from "react";
import Circles from "../pricingSection/Circles";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { PricingCardProps } from "../pricingSection/Pricing";

export const ServiceCard = ({
    children,
    description,
    price,
    type,
    id,
    recomended,
    subscription,
    buttonText,
    className1,
    className,
    active,
    href
  }: PricingCardProps) => {
    const router = useTransitionRouter();
    const pathname = usePathname();
  
    const handleCardClick = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      e.preventDefault();
  
      // Reemplazar espacios y barras en `type` para las URLs
      const formattedType = type!.replace(/[\s/]+/g, '-');
  
      // Evitar animación y navegación si ya estamos en la página del plan o servicio
      if (
        pathname === `/plans/${formattedType}` ||
        pathname === `/services/${formattedType}`
      ) {
        // Si estás en la página de servicio, redirige a la página select-method-to-buy
        if (pathname === `/services/${formattedType}`) {
          router.push('/select-method-to-buy');
        } else {
          router.push(href || `/plans/${formattedType}`); // Navegar sin animación
        }
        return;
      }
      // Animación de salida
      gsap.to(`[data-view-transition="card-${formattedType}"]`, {
        y: '-100%',
        x: '50%',
        opacity: 1,
        duration: 6,
        ease: 'power3.out',
      });
      
      // Navegar después de un pequeño delay para completar la animación
      setTimeout(() => {
        router.push(`/services/${formattedType}/${id}/select-method-to-buy`);
      }, 100);
    };
  
    useEffect(() => {
      // Animación de entrada
      gsap.fromTo(
        `[data-view-transition="card-${type}"]`,
        { y: '50%', x: '-50%', opacity: 1 },
        { y: '0%', x: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }, [type]);
  
    return (
      <div data-view-transition={`card-${type}`} className={`${className1} relative  w-full md:px-4 md:w-1/2 lg:w-1/3`}>
        <div className={`absolute ${recomended ? 'right-0 top-[-15px]  md:right-[-10px] md:top-[-95px] z-10 bg-primary' : ''} text-black p-2 rounded-full`}>
          <p className='font-semibold'>{recomended ? '¡Plan más elegido!' : ''}</p>
        </div>
        <div className={`${className} relative  mb-10 overflow-hidden rounded-[10px] border-2 border-stroke px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]`}>
          <span className="mb-3 block text-lg font-semibold text-primary">{type}</span>
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
          <button
            onClick={handleCardClick}
            className={` ${active
              ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-semibold text-black transition hover:bg-opacity-90"
              : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary  dark:border-dark-3"
              } `}
          >
            {buttonText}
          </button>
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
    );
  };
  
  
