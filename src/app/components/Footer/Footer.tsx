import React from 'react';

// react icons
import { BsInstagram,  BsTwitter, BsFacebook } from "react-icons/bs";
import logo from '../../../../public/assets/Brand-logo.svg'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='max-w-[1145px] mx-auto mt-[120px] m py-[100px] font-syne font-semibold'>
            <div className=' text-center'>
                <h2 className='text-[#FF9142] text-2xl  mt-6 '>Get in Touch With Us</h2>
                <h2 className='underline  text-3xl md:text-5xl lg:text-6xl'>info@aaronn.com</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 space-y-4 text-2xl mt-[200px] text-center lg:text-left'>
                <div className='flex justify-center items-center'>
                    <div>
                        <Image
                            src={logo}
                            width={250}
                            height={150}
                            alt='logo'
                        />

                    </div>
                </div>
                <div>
                    <h1>Street Avenue 21, CA</h1>
                    <h1>0-8-00-888- <br className='hidden lg:block' />000</h1>
                </div>
                <div>
                    <h1>+9 0283353</h1>
                    <div className='flex items-center justify-center lg:justify-normal  space-x-2'>
                        <BsFacebook />
                        <BsTwitter />
                        <BsInstagram />
                    </div>
                </div>
            </div>
            <hr className='mt-[113px]' />
            <h1 className='md:text-2xl text-sm mt-9 text-center
            '>© 2023. Ideapeel. All rights reserved. </h1>
        </div>
    );
};

export default Footer;