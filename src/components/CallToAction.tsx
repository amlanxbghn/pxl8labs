import { ChevronRightIcon } from "lucide-react";
import { MagicCard } from "./magicui/magic-card"
import ShimmerButton from "./magicui/shimmer-button";

export const CallToAction = () => {
    return (
        <section className="py-20 md:py-24 container">
            <div className="mx-auto max-w-7xl">
                <MagicCard
                    className="flex items-center justify-center border border-white/10 py-24 rounded-3xl shadow-[inset_0_-8px_10px_#ffffff1f] container"
                    gradientColor="#262626"
                >
                    <h2 className="text-center bg-gradient-to-br from-white light:from-black from-30% to-white/40 light:to-black/40 bg-clip-text mx-auto font-semibold leading-none tracking-tighter text-transparent text-balance text-5xl md:text-6xl lg:text-7xl pb-8">
                        Start building with us.
                    </h2>
                    <p className="text-center mb-12 text-lg tracking-tight leading-[30px] text-gray-400 md:text-xl text-balance mx-auto max-w-[300px] md:max-w-[700px]">
                        Book a Free Call in under a minute to find out if we are a good fit.<br /> We'll get back to you promptly.
                    </p>

                    <div className="flex justify-center mt-8">
                        <ShimmerButton
                            className="shadow-2xl"
                        >
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#fff]/75 from-white to-slate-900/10 lg:text-lg">
                                Book a Call
                            </span>
                            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </ShimmerButton>
                    </div>

                </MagicCard>
            </div>
        </section>
    );
};
