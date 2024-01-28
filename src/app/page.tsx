import FeaturesIntro from "./component/FeaturesIntro";
import HeroSection from "./component/HeroSection";
import Pricing from "./component/Pricing";
import Header from "./component/nav/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesIntro />
      <Pricing />
    </div>
  )
}
