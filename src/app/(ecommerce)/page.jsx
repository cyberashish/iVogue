import Image from "next/image";
import Banner from "../Components/HeroSection/Banner";
import PopularProducts from "../Components/HeroSection/PopularProducts";


export default function Home() {
  return (
     <main>
      <Banner/>
      <PopularProducts/>
     </main>
  );
}
