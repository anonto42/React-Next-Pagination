import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Pricing from "@/components/Pricing";
import ProductShowCase from "@/components/ProductShowCase";
import Testmonial from "@/components/Testmonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowCase />
      <Pricing />
      <Testmonial />
      <CallToAction />
      <Footer />
    </div>
  );
}
