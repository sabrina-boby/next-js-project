// "use client";
// import React, { useState } from "react";

// const Carousel = () => {
//   const colors = [
//     "#D9B4FC",
//     "#AFFFD9",
//     "#9B17AF",
//     "#FFB6C1",
//     "#00CED1",
//     "#FFD700",
//     "#9370DB",
//   ]; // Array of color boxes
//   const [currentIndex, setCurrentIndex] = useState(2); // Start with the 3rd item (index 2) in the middle

//   // Function to get the correct index in a circular manner
//   const getIndex = (index: number) => {
//     return (index + colors.length) % colors.length;
//   };

//   // Handle left arrow click
//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => getIndex(prevIndex - 1));
//   };

//   // Handle right arrow click
//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => getIndex(prevIndex + 1));
//   };

//   return (
//     <div className="relative flex justify-center items-center w-full py-10">
//       {/* Left arrow */}
//       <button
//         className="absolute left-0 text-3xl bg-gray-100 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full focus:outline-none"
//         onClick={handlePrevClick}
//       >
//         &#8249;
//       </button>

//       {/* Carousel container */}
//       <div className="flex justify-center items-center gap-4 w-full">
//         {/* Displaying 5 boxes in an infinite loop */}
//         {[...Array(5)].map((_, index) => {
//           const adjustedIndex = getIndex(currentIndex - 2 + index);
//           const color = colors[adjustedIndex];

//           // Determine size based on position relative to the center
//           let boxSize = "w-48 h-60"; // Small box size
//           let zIndex = "z-0";
//           if (index === 2) {
//             boxSize = "w-64 h-96"; // Main center box size
//             zIndex = "z-10";
//           }

//           return (
//             <div
//               key={adjustedIndex}
//               className={`transition-all duration-300 ease-in-out ${boxSize} rounded-lg shadow-lg ${zIndex}`}
//               style={{ backgroundColor: color }}
//             ></div>
//           );
//         })}
//       </div>

//       {/* Right arrow */}
//       <button
//         className="absolute right-0 text-3xl bg-gray-100 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full focus:outline-none"
//         onClick={handleNextClick}
//       >
//         &#8250;
//       </button>
//     </div>
//   );
// };

// export default Carousel;


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
  ]; // Array of color boxes
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the 3rd item (index 2) in the middle

  // Function to get the correct index in a circular manner
  const getIndex = (index: number) => {
    return (index + colors.length) % colors.length;
  };

  // Handle left arrow click
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => getIndex(prevIndex - 1));
  };

  // Handle right arrow click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => getIndex(prevIndex + 1));
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
        {/* Displaying 5 boxes in an infinite loop */}
        {[...Array(5)].map((_, index) => {
          const adjustedIndex = getIndex(currentIndex - 2 + index);
          const color = colors[adjustedIndex];

          // Determine size based on position relative to the center
          let boxSize = "w-20 h-28 sm:w-28 sm:h-36 md:w-36 md:h-48"; // Small box size for mobile/tablet/desktop
          let zIndex = "z-0";
          if (index === 2) {
            boxSize = "w-28 h-36 sm:w-40 sm:h-56 md:w-64 md:h-96"; // Main center box size
            zIndex = "z-10";
          }

          return (
            <div
              key={adjustedIndex}
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
