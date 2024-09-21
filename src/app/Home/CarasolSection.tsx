import React from "react";
import Carousel from "./Carousel";
const CarasolSection = () => {
  return (
    <div className="flex relative flex-col-reverse lg:flex-row justify-between w-full lg:h-[600px] mt-52 lg:mt-52 py-10 lg:py-20 bg-bgColor2">
      <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-start justify-center text-lg lg:text-2xl font-bold px-5 lg:px-0">
        <h3 className="font-extrabold text-3xl lg:text-4xl text-center lg:text-left w-full">
          Collection Featured
        </h3>
        <p className="text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="absolute w-full -top-60 right-0">
        <Carousel />
      </div>
    </div>
  );
};

export default CarasolSection;
