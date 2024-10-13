import { portfolioProjects } from '@/constants/Projects';
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ProjectsSection = () => {
    return (
        <section className='pb-16 lg:py-24'>
            <div className='container'>
                <div className='flex justify-center'>
                    <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
                        Real-world Results
                    </p>
                </div>
                <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>
                    Featured Projects
                </h2>
                <p className='text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto'>
                    See how i transformed concepts into engaging digital
                    experiences.
                </p>
                <div className='flex flex-col md:mt-20 mt-10 gap-20'>
                    {portfolioProjects.map(
                        ({ title, company, year, results, link, image }) => (
                            <div
                                key={title}
                                className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                                <div
                                    className='absolute inset-0 -z-10 opacity-5'
                                    style={{
                                        backgroundImage: `url(${grainImage.src})`,
                                    }}></div>
                                <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                                    <div className='lg:pb-16'>
                                        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                                            <span>{company}</span>
                                            <span>&bull;</span>
                                            <span>{year}</span>
                                        </div>
                                        <h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5'>
                                            {title}
                                        </h3>
                                        <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                                        <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                                            {results.map(({ title }) => (
                                                <li
                                                    key={title}
                                                    className='flex gap-2 text-sm text-white/50 md:text-base'>
                                                    <CheckCircleIcon className='size-5  md:size-6' />
                                                    <span>{title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a href={link}>
                                            <button className='bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6'>
                                                <span>Visit live site</span>
                                                <ArrowUpRight className='size-4' />
                                            </button>
                                        </a>
                                    </div>
                                    <div className='relative'>
                                        <Image
                                            src={image}
                                            className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                                            alt={`${company} illustration`}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};
