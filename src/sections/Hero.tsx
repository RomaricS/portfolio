import memojiImage from "@/assets/images/man-pc.png";
import Github from "@/assets/icons/github.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import { HeroRings, Stars } from "@/constants/Hero";

export const HeroSection = () => {
    const stars = Stars.map(
        ({
            id,
            isSparkle,
            iconSize,
            size,
            rotation,
            shouldOrbit,
            orbitDuration,
            shouldSpin,
            spinDuration,
        }) => (
            <HeroOrbit
                key={id}
                isSparkle={isSparkle}
                iconSize={iconSize}
                size={size}
                rotation={rotation}
                shouldOrbit={shouldOrbit}
                orbitDuration={orbitDuration}
                shouldSpin={shouldSpin}
                spinDuration={spinDuration}
            />
        )
    );

    const rings = HeroRings.map((ring: string) => (
        <div
            key={ring}
            className="hero-ring"
            style={{
                height: `${ring}`,
                width: `${ring}`,
            }}
        ></div>
    ));

    return (
        <div
            className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
            id="home"
        >
            {/* BG & stars */}
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}
                ></div>
                {rings}
                {stars}
            </div>

            <div className="container">
                {/* Pic & availability */}
                <div className="flex flex-col items-center">
                    <Image
                        src={memojiImage}
                        className="size-[100px]"
                        alt="emoji of person working on a computer"
                    />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                        <div className="bg-green-500 size-2.5 rounded-full relative">
                            <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
                        </div>
                        <div className="text-sm font-semibold">
                            Available for new adventures
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="max-w-lg mx-auto">
                    <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                        Helping digitalize your ideas
                    </h1>
                    <p className="mt-4 text-center text-white/60 md:text-lg">
                        My expertise lies in utilizing HTML, CSS, and JavaScript to develop
                        user-friendly interfaces that enhance the overall user experience
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-10">
                    <a target="_blank" href="https://github.com/RomaricS">
                        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-0">
                            <span className="font-semibold">Github</span>
                            <Github className="size-4" />
                        </button>
                    </a>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/10b4h4l1xK6NfYLv2GhblxZ2p7yj-8-4W/view?usp=drive_link"
                    >
                        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl z-0">
                            <span>👋</span>
                            <span className="font-semibold">Download my CV</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
