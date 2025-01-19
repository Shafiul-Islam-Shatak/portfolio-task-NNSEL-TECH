import cloudShadow from '../../../public/assets/Vector 8.svg'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='relative border border-red-400 mt-[270px]'>
            <div >
                <h1 className="font-syne text-7xl font-semibold text-center">Adaptive Logo Design<br />for Your Brand</h1>
            </div>
            <div className='absolute max-w-[520px] top-0 right-2 translate-x-3 border border-green-300'>
                <Image
                    src={cloudShadow}
                    alt='shadow'
                />
            </div>
        </div>
    );
};

export default Banner;