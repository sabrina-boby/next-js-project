import Header from "./Home/Header";
import MainContent from "./Home/Banner";
import Info from "./Home/info";
import Document from "./Home/document";
import Discover from "./Home/DiscoverMore";
import FeaturedCollection from "./Home/FeaturedCollection";
import CarasolSection from "./Home/CarasolSection";

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
        <CarasolSection/>
        <FeaturedCollection />
        <Discover />
      </div>
    </div>
  );
}
