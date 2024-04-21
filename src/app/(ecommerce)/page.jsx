import Image from "next/image";
import Banner from "../Components/HeroSection/Banner";
import PopularProducts from "../Components/HeroSection/PopularProducts";
import BannerSlide from "../Components/HeroSection/BannerSlider";
import FeatureCollections from "../Components/HeroSection/FeatureCollections";
import Instafeed from "../Components/HeroSection/InstaFeed";
import LatestBlog from "../Components/HeroSection/LatestBlog";
import Newsletter from "../Components/HeroSection/Newsletter";
import WhyBuy from "../Components/HeroSection/Whybuy";


export default function Home() {
  return (
     <main>
      <Banner/>
      <PopularProducts/>
      <BannerSlide/>
      <FeatureCollections/>
      <Instafeed/>
      <LatestBlog/>
      <Newsletter/>
      <WhyBuy/>
     </main>
  );
}
