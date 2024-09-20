
import Image from "next/image";
import bannerImg from "@/public/assets/Vector.png";

const Banner = () => {
  return (
    <div className="container relative mx-auto flex flex-col justify-center items-center">
      <div className="w-full">
        <Image className="w-full" src={bannerImg} alt={"banner-Img"} />
      </div>
      <div className="w-11/12 absolute top-28 flex justify-center items-center gap-5 sm:gap-10 flex-wrap">
        {/* Box 1 */}
        <div className="box w-32 h-32 sm:w-72 sm:h-72 bg-box1 hover:w-40 hover:h-40 sm:hover:w-96 sm:hover:h-96 transition-all"></div>
        {/* Box 2 */}
        <div className="box w-28 h-28 sm:w-64 sm:h-64 bg-box2 hover:w-40 hover:h-40 sm:hover:w-96 sm:hover:h-96 transition-all"></div>
        {/* Box 3 */}
        <div className="box w-32 h-32 sm:w-72 sm:h-72 bg-box3 hover:w-40 hover:h-40 sm:hover:w-96 sm:hover:h-96 transition-all"></div>
        {/* Box 4 */}
        <div className="box w-28 h-28 sm:w-64 sm:h-64 bg-box4 hover:w-40 hover:h-40 sm:hover:w-96 sm:hover:h-96 transition-all"></div>
      </div>
    </div>
  );
};

export default Banner;
