import Header from "./Home/Header";
import MainContent from "./Home/Banner";
import Info from "./Home/info";
import Document from "./Home/document";
import Discover from "./Home/DiscoverMore";
import FeaturedCollection from "./Home/FeaturedCollection";
import Carousel from "./Home/Carousel";

export default function HomePage() {
  return (
    <div>
      <Header />
      <MainContent />
      <div className="container mx-auto px-20">
        <Info />
        <Document />
      </div>
      <div className="container mx-auto">
        <Carousel />
        <FeaturedCollection />
        <Discover />
      </div>
    </div>
  );
}
