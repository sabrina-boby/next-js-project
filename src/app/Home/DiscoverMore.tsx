import Image from "next/image";
import Filter from "@/public/assets/ion_filter.png";
import Frame from "@/public/assets/Frame.png";

const DiscoverMore = () => {
  return (
    <div className="mb-32 mt-[600px] lg:mt-96 px-4 ">
      <div>
        <h3 className="font-extrabold text-3xl lg:text-4xl">DISCOVER MORE</h3>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-center">
        <div>
          <ul className="flex flex-wrap gap-4">
            <li className="px-3 py-2 bg-blue-800 text-white rounded-3xl font-semibold">
              All Categories
            </li>
            <li className="px-4 py-2 bg-slate-200 rounded-3xl font-semibold">
              Art
            </li>
            <li className="px-4 py-2 bg-slate-200 rounded-3xl font-semibold">
              Celebrities
            </li>
            <li className="px-4 py-2 bg-slate-200 rounded-3xl font-semibold">
              Gaming
            </li>
            <li className="px-4 py-2 bg-slate-200 rounded-3xl font-semibold">
              Sport
            </li>
            <li className="px-4 py-2 bg-slate-200 rounded-3xl font-semibold">
              Music
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4 lg:mt-0 px-3 py-2 bg-slate-200 rounded-3xl text-blue-800 font-semibold">
          <Image className="w-6 h-6" src={Filter} alt={"filter"} />
          <p>All Filters</p>
        </div>
      </div>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="p-4 lg:p-6 rounded-3xl relative shadow-2xl" key={index}>
            <div className="bg-red-800 h-[200px] lg:h-[250px] rounded-3xl"></div>
            <Image className="w-32 absolute top-[12rem] lg:top-[16rem] left-10" src={Frame} alt={"drop-down-icon"} />
            <p className="mt-8 lg:mt-16 font-extrabold text-xl lg:text-2xl text-purple-500 px-3">Art stuff</p>
            <div className="flex justify-between mt-4 lg:mt-8 px-3">
              <p className="text-purple-500">598 TK</p>
              <p>1 of 09</p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-purple-800 text-white px-4 py-2 rounded-3xl text-sm lg:text-base">DSVBD</button>
              <button className="bg-cyan-400 border-indigo-500 text-white px-4 py-2 rounded-3xl text-sm lg:text-base">DSVBD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMore;
