import React, { forwardRef } from 'react';

// Define the types for the props
type Props = {
  id: string;
  image: React.ReactNode;
  title: string;
  overview: string;
};

// Define the component with forwardRef
const ExpectationCard = forwardRef<HTMLDivElement, Props>(({ id, image, title, overview }: Props, ref) => {
  return (
    <div
      id={id}
      ref={ref}
      className="border rounded-lg text-white flex text-center flex-col glass_bg items-center w-auto sm:w-[170px] h-[300px] md:w-[310px] md:h-[200px] justify-center p-6"
    >
      <div>{image}</div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold py-2">{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
});

// Set the display name for the component
ExpectationCard.displayName = "ExpectationCard";

export default ExpectationCard;
