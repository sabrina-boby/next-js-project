// import Image from "next/image";
// import photo1 from "@/public/assets/photo1.png";
// import photo2 from "@/public/assets/photo2.png";
// import photo3 from "@/public/assets/photo3.png";
// import pic1 from "@/public/assets/Ellipse1.png";
// import pic2 from "@/public/assets/Ellipse2.png";
// import pic3 from "@/public/assets/Ellipse3.png";

// const info = () => {
//   return (
//     <div className="flex justify-between w-full	h-[650px] mt-80">
//       <div className="w-2/4 relative">
//         <div>
//           <Image className="w-64 h-72 absolute" src={photo1} alt={"photo"} />
//           <Image className="absolute left-56 top-60" src={pic1} alt={"photo"} />
//         </div>
//         <div>
//           <Image
//             className="w-56 h-60 absolute top-40 left-96"
//             src={photo2}
//             alt={"photo"}
//           />
//           <Image
//             className="absolute left-[570px] top-[350px]"
//             src={pic2}
//             alt={"photo"}
//           />
//         </div>
//         <div>
//           <Image
//             className="w-52 h-56 absolute top-96 left-14"
//             src={photo3}
//             alt={"photo"}
//           />
//           <Image
//             className="absolute left-56 top-[560px]"
//             src={pic3}
//             alt={"photo"}
//           />
//         </div>
//       </div>
//       <div className="w-2/5 flex flex-col items-center justify-center text-2xl font-bold">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore e.
//           </p>
//           <button className="mt-12 outline rounded-3xl px-7 py-3 outline-1 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">Sign Up</button>
//       </div>
//     </div>
//   );
// };

// export default info;

import Image from "next/image";
import photo1 from "@/public/assets/photo1.png";
import photo2 from "@/public/assets/photo2.png";
import photo3 from "@/public/assets/photo3.png";
import pic1 from "@/public/assets/Ellipse1.png";
import pic2 from "@/public/assets/Ellipse2.png";
import pic3 from "@/public/assets/Ellipse3.png";

const Info = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full h-auto lg:h-[650px] mt-96 lg:mt-80 px-5 lg:px-0">
      {/* Image Section */}
      <div className="w-full lg:w-2/4 relative mb-10 lg:mb-0">
        <div>
          <Image
            className="w-40 h-48 lg:w-64 lg:h-72 absolute"
            src={photo1}
            alt={"photo"}
          />
          <Image
            className="absolute left-36 top-36 lg:left-56 lg:top-60"
            src={pic1}
            alt={"photo"}
          />
        </div>
        <div>
          <Image
            className="w-36 h-44 lg:w-56 lg:h-60 absolute top-40 left-72 lg:top-40 lg:left-96"
            src={photo2}
            alt={"photo"}
          />
          <Image
            className="absolute left-56 top-[296px] lg:left-[570px] lg:top-[350px]"
            src={pic2}
            alt={"photo"}
          />
        </div>
        <div>
          <Image
            className="w-32 h-40 lg:w-52 lg:h-56 absolute top-80 left-10 lg:top-96 lg:left-14"
            src={photo3}
            alt={"photo"}
          />
          <Image
            className="absolute left-36 top-[450px] lg:left-56 lg:top-[560px]"
            src={pic3}
            alt={"photo"}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-section mt-[600px] lg:mt-12 w-full lg:w-2/5 flex flex-col items-center justify-center text-lg lg:text-2xl font-bold">
  <p className="text-center px-5 lg:px-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore e.
  </p>
  <button className="mt-8 lg:mt-12 outline rounded-3xl px-5 py-2 lg:px-7 lg:py-3 outline-1 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
    Sign Up
  </button>
</div>

    </div>
  );
};

export default Info;
