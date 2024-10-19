import { portfolioProjects } from '@/constants/Projects';
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import SectionHeader from '@/components/SectionHeader';
import { Card } from '@/components/Card';

export const ProjectsSection = () => {
    return (
        <section className='pb-16 lg:py-24' id='projects'>
            <div className='container'>
                <SectionHeader
                    title={'Real-world Results'}
                    subTitle={'Featured Projects'}
                    description={
                        'See how i transformed concepts into engaging digital experiences.'
                    }
                />
                <div className='flex flex-col md:mt-20 mt-10 gap-20'>
                    {portfolioProjects.map(
                        ({ title, company, year, results, link, image }, projectIndex) => (
                            <Card
                                key={title}
                                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16" style={{
                                    top: `calc(64px + ${projectIndex * 44}px )`
                                }}>
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
                            </Card>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};
