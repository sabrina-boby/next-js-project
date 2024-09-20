import { useState } from "react";

const Carousel = () => {
  const slides = [
    { id: 1, color: "bg-slate-500" },
    { id: 2, color: "bg-red-400" },
    { id: 3, color: "bg-amber-900" },
    { id: 4, color: "bg-slate-300" },
    { id: 5, color: "bg-green-600" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Navigation Buttons */}
      <button
        className="absolute left-0 px-3 py-2 bg-white text-black rounded-md"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 px-3 py-2 bg-white text-black rounded-md"
        onClick={nextSlide}
      >
        Next
      </button>

      {/* Carousel Slides */}
      <div className="relative w-full h-[400px] flex items-center justify-center space-x-3 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isNext =
            index === (activeIndex + 1) % slides.length || index === (activeIndex - 1 + slides.length) % slides.length;

          return (
            <div
              key={slide.id}
              className={`flex-shrink-0 transition-all duration-700 ${
                isActive ? "h-[350px] w-[250px] scale-110" : isNext ? "h-[250px] w-[150px]" : "h-[200px] w-[100px]"
              } ${slide.color} rounded-lg shadow-md`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
