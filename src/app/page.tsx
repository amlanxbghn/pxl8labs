import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { FAQs } from "@/components/FAQs";

export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <FAQs/>
      <CallToAction/>
    </>
  );
}
