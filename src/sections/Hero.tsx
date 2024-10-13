import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import HeroOrbit from '@/components/HeroOrbit';
import { HeroRings, Stars } from '@/constants/Hero';

export const HeroSection = () => {
    const stars = Stars.map(({ id, isSparkle, iconSize, size, rotation }) => (
        <HeroOrbit
            key={id}
            isSparkle={isSparkle}
            iconSize={iconSize}
            size={size}
            rotation={rotation}
        />
    ));

    const rings = HeroRings.map((ring: string) => (
        <div
            key={ring}
            className={`hero-ring size-[${ring}]`}></div>
    ));

    return (
        <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
            {/* BG & stars */}
            <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
                <div
                    className='absolute inset-0 -z-30 opacity-5'
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}></div>
                {rings}
                {stars}
            </div>

            <div className='container'>
                {/* Pic & availability */}
                <div className='flex flex-col items-center'>
                    <Image
                        src={memojiImage}
                        className='size-[100px]'
                        alt='emoji of person working on a computer'
                    />
                    <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                        <div className='bg-green-500 size-2.5 rounded-full'></div>
                        <div className='text-sm font-semibold'>
                            Available for new adventures
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className='max-w-lg mx-auto'>
                    <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
                        Helping digitalize your ideas
                    </h1>
                    <p className='mt-4 text-center text-white/60 md:text-lg'>
                        My expertise lies in utilizing HTML, CSS, and JavaScript
                        to develop user-friendly interfaces that enhance the
                        overall user experience
                    </p>
                </div>

                {/* CTA */}
                <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
                    <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
                        <span className='font-semibold'>Explore my world</span>
                        <ArrowDown className='size-4' />
                    </button>
                    <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl'>
                        <span>👋</span>
                        <span className='font-semibold'>Let&apos;s Connect</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
