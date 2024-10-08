import { ChevronRightIcon } from "lucide-react"
import ShimmerButton from "./magicui/shimmer-button"
import { Spotlight } from "./ui/spotlight"
import AnimatedShinyText from "./magicui/animated-shiny-text"
import { cn } from "@/lib/utils"

const Hero = () => {
  return (
    <div className="container">
      <div className="pt-16 mt-24 flex flex-col items-center justify-center">

        <div
          className={cn(
            "group rounded-full border light:border-black/5 light:bg-neutral-100 text-base text-white border-white/5 bg-neutral-900",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
            <span>We are Open to Work</span>
          </AnimatedShinyText>
        </div>

        <Spotlight
          className="hidden md:block -top-40 left-0 md:left-30 md:-top-40 lg:left-60 lg:-top-20 mx-auto"
          fill="rgba(255, 255, 255, 0.5)"
        />
        <h1 className="text-center bg-gradient-to-br from-white light:from-black from-30% to-white/40 light:to-black/40 bg-clip-text py-6 mx-auto font-semibold leading-none tracking-tighter text-transparent text-balance text-6xl md:text-7xl lg:text-8xl">
          Crafting Next-Gen<br className="hidden md:block" /> Landing Pages.
        </h1>
        <p className="text-center mb-12 text-lg tracking-tight leading-[30px] text-neutral-400 md:text-xl text-balance mx-auto">
          Helping Founders and Early-Stage Startups build High-Conversion<br className="hidden md:block" /> Landing Pages at a Fraction of the Cost.
        </p>

        <div className="">
          <ShimmerButton
            className="shadow-2xl mb-8"
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#fff]/75 from-white to-slate-900/10 lg:text-lg">
              Book a Call
            </span>
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </ShimmerButton>
        </div>

      </div>
    </div>
  )
}

export default Hero
