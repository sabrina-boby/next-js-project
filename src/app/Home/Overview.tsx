"use client";  // Add this line at the top

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct module import
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // Import Swiper's navigation module styles
import 'swiper/css/effect-coverflow';
import { EffectCoverflow} from 'swiper/modules';

const Carousel = () => {
//   const slides = [
//     { id: 1, color: "bg-slate-500" },
//     { id: 2, color: "bg-red-400" },
//     { id: 3, color: "bg-amber-900" },
//     { id: 4, color: "bg-slate-300" },
//     { id: 5, color: "bg-green-600" },
//   ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Swiper
        modules={[Navigation,EffectCoverflow]} // Ensure the correct import of the Navigation module
        spaceBetween={10}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        navigation={true} 
        effect={'coverflow'}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}// Enables prev/next buttons
      >
        <SwiperSlide className="w-96 h-96 bg-red-700"/>
        <SwiperSlide className="w-96 h-96 bg-red-700"/>
        <SwiperSlide className="w-96 h-96 bg-red-700"/>
        <SwiperSlide className="w-96 h-96 bg-red-700"/>
        <SwiperSlide className="w-96 h-96 bg-red-700"/>
      </Swiper>
    </div>
  );
};

export default Carousel;
