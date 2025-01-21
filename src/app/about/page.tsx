import React from 'react';
import Image from 'next/image'
import PageHeader from '../components/PageHeader/PageHeader';
import profileImage from '../../../public/assets/Rectangle 361.png'
import profileImage2 from '../../../public/assets/Vector (2).png'
import eclipse from '../../../public/Rectangle 362.png'


const about = () => {
  return (
    <div >
      {/* common header to all page */}
      <PageHeader
        title='About Me'
        desciption='Little Brief About Myself'
      />

      {/* text content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-left xl:px-0 px-5 '>
        <h1 className='font-syne lg:text-[80px] text-3xl md:text-5xl lg:-tracking-[2.5] font-bold lg:leading-[1.1] '>
          My mission <br className='hidden lg:block' />is to make <br className='hidden lg:block' />design<br />easier.
        </h1>
        <p className='font-sans text-[#949494] text-[21px] leading-loose'>Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle. Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.</p>
      </div>

      {/* image section */}
      <div className='flex relative flex-col space-y-5 justify-center items-center lg:flex-row space-x-3 mt-[100px] mx-auto px-5 xl:px-0'>
        <Image
          src={profileImage}

          alt="profile-Image"
        />
        <Image
          src={profileImage2}

          alt="profile-Image2"
        />
        <Image
          className='absolute rotate-90 lg:block  -bottom-[85px] right-7'
          src={eclipse}
          alt='eclipse'
        />
        <Image
          className='absolute hidden lg:block -top-[10px] -left-[75px]'
          src={eclipse}
          alt='eclipse'
        />
      </div>

      {/* Follow me */}
      <div className='mt-[140px] xl:px-0 px-5'>
        <h1 className='font-syne font-semibold text-5xl '>Follow me on:</h1>
        <div className='uppercase font-semibold font-rubik text-[#949494] tracking-[4.06] text-[32px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 mt-6 mb-[220px]'>
          <h1>Dribble</h1>
          <h1>Twitter</h1>
          <h1>Facebook</h1>
          <h1>Instagram</h1>
        </div>
      </div>
    </div>
  );
};

export default about;