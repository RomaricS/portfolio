import React from 'react';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { twMerge } from 'tailwind-merge';

const HeroOrbit = ({
    isSparkle,
    iconSize,
    size,
    rotation,
    shouldOrbit = false,
    orbitDuration,
    shouldSpin = false,
    spinDuration,
}: {
    isSparkle: boolean;
    iconSize: number;
    size: number;
    rotation: number;
    shouldOrbit?: boolean;
    shouldSpin?: boolean;
    orbitDuration?: string;
    spinDuration?: string;
}) => {
    return (
        <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-20'>
            <div
                className={twMerge(shouldOrbit && 'animate-spin')}
                style={{
                    animationDuration: orbitDuration,
                }}>
                <div
                    className='flex items-start justify-start'
                    style={{
                        height: `${size}px`,
                        transform: `rotate(${rotation}deg)`,
                        width: `${size}px`,
                    }}>
                    <div
                        className={twMerge(shouldSpin && 'animate-spin')}
                        style={{
                            animationDuration: spinDuration,
                        }}>
                        <div
                            className=' inline-flex'
                            style={{
                                transform: `rotate(${rotation * -1}deg)`,
                            }}>
                            {isSparkle ? (
                                <SparkleIcon
                                    className={`size-${iconSize} text-emerald-300/20`}
                                />
                            ) : (
                                <StarIcon
                                    className={`size-${iconSize} text-emerald-300`}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroOrbit;
