import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Pricing from "@/components/Pricing";
import ProductShowCase from "@/components/ProductShowCase";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowCase />
      <Pricing />
    </div>
  );
}
