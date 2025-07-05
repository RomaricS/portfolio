"use client";
import { Card } from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import BookImage from '@/assets/images/book-cover.jpg';
import Image from 'next/image';
import MapImage from '@/assets/images/maps.png';
import Memoji from '@/assets/images/jay.png';
import { CardHeader } from '@/components/CardHeader';
import { hobbies, toolboxItems } from '@/constants/About';
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
    const constraintRef = useRef(null);
    return (
        <div className='py-20 lg:py-28' id='about'>
            <div className='container'>
                <SectionHeader
                    title={'About me'}
                    subTitle={'A glimpse into my world'}
                    description={'Learn more aout me.'}
                />

                <div className='mt-20 flex flex-col gap-8'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
                        {/* G1 */}
                        <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
                            <CardHeader
                                title={'My reads'}
                                className='text-center'
                                description={
                                    'A book I recommend'
                                }
                            />
                            <div className='w-40 mx-auto mt-2 md:mt-0'>
                                <Image
                                    src={BookImage}
                                    alt='Book cover'
                                />
                            </div>
                        </Card>
                        <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
                            <CardHeader
                                title={'My toolbox'}
                                description={
                                    'Explore the technologies and tools I use to craft exceptional digital experiences.'
                                }
                                className=''
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className=''
                                itemWrapperclassName='animate-move-left [animation-duration:30s]'
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className='mt-6'
                                itemWrapperclassName='-translate-x-1/2 animate-move-right [animation-duration:45s]'
                            />
                        </Card>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3'>
                        {/* G2 */}
                        <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
                            <CardHeader
                                title={'Beyond the code'}
                                description={
                                    'Explore my interests and hobbies beyond the code.'
                                }
                                className='px-6 py-6'
                            />
                            <div className='relative flex-1' ref={constraintRef}>
                                {hobbies.map(({ title, emoji, left, top }) => (
                                    <motion.div
                                        key={title}
                                        className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                                        style={{
                                            left: left,
                                            top: top,
                                        }} 
                                        drag 
                                        dragConstraints={constraintRef}
                                        >
                                        <span className='font-medium text-gray-950'>
                                            {title}
                                        </span>
                                        <span>{emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
                            <Image
                                src={MapImage}
                                alt='My location'
                                className='h-full w-full object-cover object-left-top'
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                                <Image
                                    className='max-w-16 mx-auto'
                                    src={Memoji}
                                    alt='Smile emoji'
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
