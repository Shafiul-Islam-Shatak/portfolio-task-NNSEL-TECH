import React from 'react';
import Image from 'next/image'
import cloudShadow from '../../../../public/assets/Vector 8.svg'
import { GoArrowRight } from "react-icons/go";
const Banner = () => {
    return (
        <div>
            <div className='relative mt-[270px]'>
                <div>
                    <h1 className="font-syne text-7xl font-semibold text-center">
                        Adaptive Logo Design<br />for Your Brand
                    </h1>
                </div>
                <div className='absolute  top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2'>
                    <Image
                        src={cloudShadow}
                        alt='shadow'
                    />
                </div>
            </div>

                <button className='flex items-center justify-center space-x-2 bg-[#FF9142] text-white py-4 px-10 rounded-[30px] mx-auto mt-[93px] '>
                    <h1>Expolore Works</h1>
                    <GoArrowRight />
                </button>
           
        </div>

    );
};

export default Banner;