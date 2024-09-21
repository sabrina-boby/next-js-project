"use client";
import React, { useState } from "react";

const Carousel = () => {
  const colors = [
    "#D9B4FC",
    "#AFFFD9",
    "#9B17AF",
    "#FFB6C1",
    "#00CED1",
    "#FFD700",
    "#9370DB",
    "#D9B4FC",
    "#AFFFD9",
    "#9B17AF",
    "#FFB6C1",
    "#00CED1",
    "#FFD700",
    "#9370DB",
  ]; // Array of color boxes
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the 3rd item (index 2) in the middle

  // Handle left arrow click
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? colors.length - 1 : prevIndex - 1
    );
  };

  // Handle right arrow click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === colors.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex justify-center items-center w-full py-10">
      {/* Left arrow */}
      <button
        className="absolute left-0 text-3xl bg-gray-100 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full focus:outline-none"
        onClick={handlePrevClick}
      >
        &#8249;
      </button>

      {/* Carousel container */}
      <div className="flex justify-center items-center gap-4 w-full">
        {/* Displaying 5 boxes */}
        {colors
          .slice(currentIndex - 2, currentIndex + 3)
          .map((color, index) => {
            // Determine size based on position relative to the center
            let boxSize = "w-24 h-40"; // Small box size
            let zIndex = "z-0";
            if (index === 2) {
              boxSize = "w-36 h-60"; // Main center box size
              zIndex = "z-10";
            }
            return (
              <div
                key={color}
                className={`transition-all duration-300 ease-in-out ${boxSize} rounded-lg shadow-lg ${zIndex}`}
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
      </div>

      {/* Right arrow */}
      <button
        className="absolute right-0 text-3xl bg-gray-100 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full focus:outline-none"
        onClick={handleNextClick}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
