import React from "react";

interface Props {
  image: React.ReactElement;
  title: string;
  overview: string;
}

const ExpectationCard = ({ image, title, overview }: Props) => {
  return (
    <div className="border rounded-lg text-white flex text-center flex-col items-center w-auto sm:w-[170px] h-[300px] md:w-[290px]  md:h-[200px] justify-center p-6">
      <div>{image}</div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold py-2">{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default ExpectationCard;
