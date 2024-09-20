
"use client"; // This marks the component as a Client Component

import { useState } from "react";
import Image from "next/image";
import VectorImg from "@/public/assets/Vector2.png";

const FeaturedCollection = () => {
  // State to track the parent color
  const [parentColor, setParentColor] = useState("bg-red-700");

  // Function to handle child click and update the parent color
  const handleChildClick = (color: any) => {
    setParentColor(color);
  };

  return (
    <div className="mb-40 relative">
      <div className="w-full">
        <Image className="w-full" src={VectorImg} alt={"VectorImg"} />
      </div>

      {/* Responsive container */}
      <div className="flex flex-col lg:flex-row absolute justify-between w-full top-5 lg:top-7 px-5 lg:px-20">
        <div className="w-full lg:w-2/4 flex flex-col items-center lg:items-start">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Parent with dynamic background color */}
            <div
              className={`parent w-44 h-44 lg:w-[376px] lg:h-[377px] ${parentColor} rounded-2xl`}
            ></div>

            {/* Child elements with onClick handlers */}
            <div className="flex flex-row lg:flex-col gap-5 mt-5 lg:mt-0">
              <div
                className="child w-16 h-16 lg:w-28 lg:h-28 bg-squire1 rounded-2xl cursor-pointer"
                onClick={() => handleChildClick("bg-squire1")}
              ></div>
              <div
                className="child w-16 h-16 lg:w-28 lg:h-28 bg-squire2 rounded-2xl cursor-pointer"
                onClick={() => handleChildClick("bg-squire2")}
              ></div>
              <div
                className="child w-16 h-16 lg:w-28 lg:h-28 bg-squire3 rounded-2xl cursor-pointer"
                onClick={() => handleChildClick("bg-squire3")}
              ></div>
            </div>
          </div>

          {/* Second row of child elements */}
          <div className="flex gap-3 lg:gap-5 mt-5">
            <div
              className="child w-16 h-16 lg:w-28 lg:h-28 bg-squire4 rounded-2xl cursor-pointer"
              onClick={() => handleChildClick("bg-squire4")}
            ></div>
            <div
              className="child w-16 h-16 lg:w-28 lg:h-28 bg-squire5 rounded-2xl cursor-pointer"
              onClick={() => handleChildClick("bg-squire5")}
            ></div>
            <div
              className="child w-16 h-16 lg:w-28 lg:h-28 bg-squire6 rounded-2xl cursor-pointer"
              onClick={() => handleChildClick("bg-squire6")}
            ></div>
            <div
              className="child w-16 h-16 lg:w-28 lg:h-28 bg-squire7 rounded-2xl cursor-pointer"
              onClick={() => handleChildClick("bg-squire7")}
            ></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start justify-center mt-10 lg:mt-0">
          <h3 className="font-extrabold text-3xl lg:text-4xl text-center lg:text-left w-full">
            Collection Featured
          </h3>
          <p className="mt-5 lg:mt-10 text-lg lg:text-2xl font-bold text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tet ut labore et dolore magna aliqurit in voluptate velit
            esse cillumsunt in culpa
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
