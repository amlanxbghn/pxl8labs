"use client";

import Particles from "@/components/magicui/particles";
import { FeaturesTable } from "./FeaturesTable";

const Features = () => {
  return (
    <div className="container">
      <div className="relative flex flex-col items-center justify-center my-48">
        <h2 className="pointer-events-none bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-center text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent light:from-black light:to-gray-300/80 md:mb-8">
          What We Offer
        </h2>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        />
        <FeaturesTable />
      </div>
    </div>
  );
};

export default Features;

