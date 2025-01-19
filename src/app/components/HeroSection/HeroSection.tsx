import React from 'react';
import Image from 'next/image'
import profileImage from '../../../../public/assets/Rectangle 361.png'
const HeroSection = () => {

    return (
        <div className="w-full h-full rounded-md mt-[230px]">
             
            {/* header */}
            <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3">
                <div className="px-8 mt-8 lg:mt-0 w-full lg:w-[50%]">
                    <h1 className="text-[40px] lg:text-[56px] leading-[45px] lg:leading-[65px] font-semibold font-syne">Let’s get know<br></br>about me closer</h1>
                    <p className="text-[18px] mt-[26px] font-rubik text-[#A8A8A8]">Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.</p>

                    <div className="flex items-center flex-wrap gap-[20px] mt-[72px]">
                        <button
                            className="py-4 px-10 min-w-fit bg-[#FF9142] text-white rounded-full  hover:bg-orange-500">Discover More About Me
                        </button>                       
                    </div>
                </div>

                {/* image */}
                <div className="w-full lg:w-[50%]">
                    <Image
                    src={profileImage}
                    alt="profile-Image"
                    />
                </div>
            </header>
        </div>
    );
};

export default HeroSection;