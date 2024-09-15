"use client";

import Particles from "@/components/magicui/particles";
import { FeaturesTable } from "./FeaturesTable";

const Features = () => {
  return (
    <div className="relative flex flex-col items-center justify-center my-16">
      <span className="pointer-events-none bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-center text-5xl md:text-7xl font-semibold text-transparent light:from-black light:to-gray-300/80 mb-8">
        What We Offer
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <FeaturesTable/>
    </div>
  );
};

export default Features;

