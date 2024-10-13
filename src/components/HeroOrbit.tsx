import React from 'react';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

const HeroOrbit = ({
    isSparkle,
    iconSize,
    size,
    rotation,
}: {
    isSparkle: boolean;
    iconSize: number;
    size: number;
    rotation: number;
}) => {
    return (
        <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
            <div
                className=''
                style={{
                    height: `${size}px`,
                    transform: `rotate(${rotation}deg)`,
                    width: `${size}px`,
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
    );
};

export default HeroOrbit;
