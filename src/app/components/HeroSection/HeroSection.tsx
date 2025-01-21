import React from 'react';
import Image from 'next/image'
import cloudShadow from '../../../../public/assets/Vector 8.svg'
import profileImage from '../../../../public/assets/Rectangle 361.png'
import eclipse from '../../../../public/Rectangle 362.png';
const HeroSection = () => {

    return (
        <div className="w-full h-full rounded-md lg:mt-[230px] mt-32">

            {/* header */}
            <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3">
                <div className="px-8 w-3/4 mx-auto mt-8 lg:mt-0  lg:w-[50%] relative">
                    <h1 className="text-[40px] md:text-5xl lg:text-[56px] leading-[45px] lg:leading-[65px] font-semibold font-syne">Let’s get know<br></br>about me closer</h1>
                    <p className="text-[18px] mt-[26px] font-rubik text-[#A8A8A8]">Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.</p>
                    <div className='absolute  top-1/2 left-1/2 transform -translate-x-[140%] -translate-y-[120%]'>
                        <Image
                        className='hidden lg:block '
                            src={cloudShadow}
                            width={500}
                            height={500}
                            alt='shadow'
                        />
                    </div>

                    <div className="flex items-center flex-wrap gap-[20px] mt-[72px]">
                        <button
                            className="py-4 px-10 min-w-fit bg-[#FF9142] text-white rounded-full  hover:bg-orange-500">Discover More About Me
                        </button>
                    </div>
                </div>

                {/* image */}
                <div className="w-3/4 mx-auto lg:w-[50%] relative">
                    <Image
                        src={profileImage}
                        alt="profile-Image"
                    />
                    <Image
                    className='absolute hidden lg:block  bottom-14 -left-10'
                    src={eclipse}
                    alt='eclipse'
                    />
                    <Image
                    className='absolute hidden lg:block  rotate-90 -top-24 right-44'
                    src={eclipse}
                    alt='eclipse'
                    />
                </div>
            </header>
        </div>
    );
};

export default HeroSection;