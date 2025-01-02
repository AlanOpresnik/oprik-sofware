import React from "react";
import { PricingPlan } from "../pricingSection/pricingData";
interface Props {
    plan: PricingPlan; 
}
const TechsPlan = ({plan}: Props) => {
  return (
    <div className="mt-4">
      {plan.techs.map((tech, i) => (
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
  );
};

export default TechsPlan;
