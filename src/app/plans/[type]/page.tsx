'use client';

import { useParams } from 'next/navigation';
import pricingData from '@/components/pricingSection/pricingData';
import { CheckIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import FadeInWrapper from '@/components/fadeInWrapper/FadeInWrapper';
import { PricingCard } from '@/components/pricingSection/Pricing';

const PlanPage = () => {
  const params = useParams();
  const plan = pricingData.find((item) => item.type === params.type);

  if (!plan) {
    return (
      <div className="text-white">
        <p>El plan especificado no existe.</p>
      </div>
    );
  }



  return (
    <FadeInWrapper>
      <div className="mt-6 md:mt-12 flex flex-col md:grid md:grid-cols-2 md:gap-12 text-white">
        {/* Información del plan */}
        <div className="pr-4">
          <p className="text-4xl font-semibold mb-2">
            Plan <span className="text-primary">{plan.type}</span>
          </p>
          <p>{plan.largeDescription}</p>
          <div className="hidden md:block">
            <div className="pt-4 border-t mt-4">
              <p className="text-2xl font-semibold">Tecnologías que se usarán</p>
            </div>
            <div className="flex max-w-[120px] gap-6 mt-4 py-4">
              {plan.images.map((img, i) => (
                <Image
                  className="w-[30px] md:w-[40px]"
                  key={i}
                  src={img}
                  alt="tecnología usada"
                  width={50}
                  height={60}
                />
              ))}
            </div>
            <div className="mt-4">
              {plan.techs.map((tech, i) => (
                <div key={i} className="my-6">
                  <div className="flex gap-2 items-center">
                    <p className="text-xl font-semibold text-primary border-b">{tech.title}:</p>
                    <p className="mt-1 text-orange-200">{tech.for}</p>
                  </div>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tarjeta del plan */}
        <div
          data-view-transition={`card-${plan.type}`}
          className="col-span-1 w-full mt-6 relative"
        >
          <div
            className={`${
              plan.recomended
                ? 'absolute right-0 top-[-20px] z-10 bg-primary text-black p-2 rounded-full'
                : ''
            }`}
          >
            <p className="font-semibold">
              {plan.recomended ? 'Plan más elegido' : ''}
            </p>
          </div>
          <PricingCard
            key={plan.type}
            className={`!w-full`}
            className1={`!px-0 md:!px-4 !w-full`}
            active={plan.active}
            type={plan.type}
            price={plan.price}
            subscription={plan.subscription}
            description={plan.description}
            buttonText={`Contratar Plan ${plan.type}`}
            href={`/plans/${plan.type}/select-Method-to-buy`}
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
        </div>

        {/* Tecnologías en pantallas pequeñas */}
        <div className="md:hidden">
          <div className="pt-4">
            <p className="text-2xl font-semibold">Tecnologías que se usarán</p>
          </div>
          <div className="flex max-w-[120px] gap-6 mt-4 py-4">
            {plan.images.map((img, i) => (
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
            {plan.techs.map((tech, i) => (
              <div key={i} className="my-6">
                <div className="flex gap-2 items-center">
                  <p className="text-xl font-semibold text-primary border-b">{tech.title}:</p>
                  <p className="mt-1 text-orange-200">{tech.for}</p>
                </div>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default PlanPage;
