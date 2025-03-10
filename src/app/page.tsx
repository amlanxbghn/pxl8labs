import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { FAQs } from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Features/>
      <FAQs/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
