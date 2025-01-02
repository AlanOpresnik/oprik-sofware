import React from "react";
import { PricingCard } from "../pricingSection/Pricing";
import { CheckIcon, XIcon } from "lucide-react";
import { PricingPlan } from "../pricingSection/pricingData";

interface Props {
    plan: PricingPlan
}

const PricingCardPlan = ({plan}: Props) => {
  return (
    <div
      data-view-transition={`card-${plan.type}`}
      className="col-span-1 w-full mt-6 relative"
    >
      <div
        className={`${
          plan.recomended
            ? "absolute right-0 top-[-20px] z-10 bg-primary text-black p-2 rounded-full"
            : ""
        }`}
      >
        <p className="font-semibold">
          {plan.recomended ? "Plan más elegido" : ""}
        </p>
      </div>
      <PricingCard
        key={plan.type}
        className={`!w-full`}
        className1={`!px-0 md:!px-4 !w-full`}
        active={plan.active}
        type={plan.type!}
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
  );
};

export default PricingCardPlan;
