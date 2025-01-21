import React from 'react';
import Image from 'next/image'
import cloudShadow from '../../../../public/assets/Vector 8.svg'
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';
const Banner = () => {
    return (
        <div>
            <div className='relative lg:mt-[270px] mt-32'>
                <div>
                    <h1 className="font-syne text-3xl md:text-5xl lg:text-7xl font-semibold text-center">
                        Adaptive Logo Design<br />for Your Brand
                    </h1>
                </div>
                <div className='absolute  top-1/2 left-1/2 transform translate-x-11/12 -translate-y-1/2'>
                    <Image
                        src={cloudShadow}
                        width={500}
                        height={500}
                        alt='shadow'
                    />
                </div>
            </div>

            <Link href={'/works'}>
                <button className='flex items-center justify-center space-x-2 bg-[#FF9142] hover:bg-orange-500 text-white py-4 px-10 rounded-[30px] mx-auto mt-[93px] '>
                    <h1>Expolore Works</h1>
                    <GoArrowRight />
                </button>
            </Link>

        </div>

    );
};

export default Banner;