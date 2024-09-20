// import Image from "next/image";
// import Group from "@/public/assets/Group.png";

// const document = () => {
//   return (
//     <div className="flex justify-between w-full mt-20 py-20">
//       <div className="w-2/4 flex flex-col items-center justify-center text-2xl font-bold">
//         <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  qui officia deserunt mollit anim id est laborum.
//         </p>
//         <button className="mt-20 outline rounded-3xl px-7 py-3 outline-1 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
//         Explore Now
//         </button>
//       </div>
//       <div className="w-[450px]">
//         <Image className="" src={Group} alt={"photo"} />
//       </div>
//     </div>
//   );
// };

// export default document;


import Image from "next/image";
import Group from "@/public/assets/Group.png";

const Document = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between w-full mt-10 lg:mt-20 py-10 lg:py-20">
      {/* Text Section */}
      <div className="w-full lg:w-2/4 flex flex-col items-center lg:items-start justify-center text-lg lg:text-2xl font-bold px-5 lg:px-0">
        <p className="text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="mt-10 lg:mt-20 outline rounded-3xl px-5 py-2 lg:px-7 lg:py-3 outline-1 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
          Explore Now
        </button>
      </div>
      {/* Image Section */}
      <div className="w-full lg:w-[450px] flex justify-center lg:justify-end mt-10 lg:mt-0">
        <Image className="w-[300px] lg:w-[450px]" src={Group} alt={"photo"} />
      </div>
    </div>
  );
};

export default Document;
