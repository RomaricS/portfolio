import SectionHeader from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { Fragment } from 'react';
import { Goals } from '@/constants/Projects';
import { TechIcon } from '@/components/TechIcon';

const goals = Goals;

export const TestimonialsSection = () => {
    return (
        <div className='py-16 lg:py-24'>
            <div className='container'>
                <SectionHeader
                    title={'GOALS'}
                    subTitle={'My plans for the near future'}
                />
                <div className='mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 my-4'>
                    <div className='flex flex-none pr-8 gap-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]'>
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {goals.map(
                                    ({ name, position, text, icon }) => (
                                        <Card
                                            key={name}
                                            className='max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300'>
                                            <div className='flex gap-4 items-center'>
                                                <div className='size-14 inline-flex rounded-full bg-gray-700 items-center justify-center flex-shrink-0'>
                                                    <TechIcon component={icon} />
                                                </div>
                                                <div>
                                                    <div className='font-semibold'>
                                                        {name}
                                                    </div>
                                                    <div className='text-sm text-white/40'>
                                                        {position}
                                                    </div>
                                                </div>
                                            </div>

                                            <p className='mt-4 md:mt-6 text-sm md:text-base'>
                                                {text}
                                            </p>
                                        </Card>
                                    )
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
