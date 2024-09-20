import Image from "next/image";
import dropDown from "@/public/assets/mingcute_down_fill.png";
import searchIcon from "@/public/assets/flowbite_search-outline.png";

const Header = () => {
  return (
    <header className="container mx-auto bg-customGray">
      <nav className="flex justify-between items-center h-24 px-5 sm:px-10 lg:px-20">
        <ul className="flex gap-5 sm:gap-10 lg:gap-20">
          <li className="flex items-center gap-2 sm:gap-4 text-white text-sm sm:text-base lg:text-lg">
            Home <Image src={dropDown} alt={"drop-down-icon"} />
          </li>
          <li className="flex items-center gap-2 sm:gap-4 text-white text-sm sm:text-base lg:text-lg">
            Event <Image src={dropDown} alt={"drop-down-icon"} />
          </li>
          <li className="flex items-center gap-2 sm:gap-4 text-white text-sm sm:text-base lg:text-lg">
            Contact <Image src={dropDown} alt={"drop-down-icon"} />
          </li>
          <li className="flex items-center gap-2 sm:gap-4 text-white text-sm sm:text-base lg:text-lg">
            Blog <Image src={dropDown} alt={"drop-down-icon"} />
          </li>
        </ul>
        <div className="flex items-center bg-white h-10 sm:h-12 px-5 sm:px-7 rounded-3xl">
          <input
            className="bg-white outline-none text-black text-sm sm:text-base w-full"
            type="search"
            name="search"
            placeholder="search"
          />
          <Image src={searchIcon} alt={"search-icon"} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

