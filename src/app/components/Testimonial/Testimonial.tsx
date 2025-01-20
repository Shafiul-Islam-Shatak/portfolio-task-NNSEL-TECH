import cloudShadow from '../../../../public/assets/Vector 8.svg'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <div>
            <div className=" relative  flex justify-between items-center ">
                <div className="mt-[166px]">
                    <h1 className="text-7xl font-bold font-syne ">Testimonial</h1>
                    <div className='absolute  top-1/2 left-1/2 transform -translate-x-[140%] -translate-y-[60%]'>
                    <Image
                        src={cloudShadow}
                        width={500}
                        height={500}
                        alt='shadow'
                    />
                </div>
                    <div className="mt-11">
                        <p className="font-rubik text-[#949494]">“Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”</p>

                        <h1 className="font-syne font-semibold text-2xl mt-10">-Martin lee</h1>
                    </div>

                </div>
                <h1 className="font-syne  text-[288px]  font-bold text-left -rotate-180 scale-y-[-1] text-black " style={{ WebkitTextStroke: '1px orange' }}>“</h1>
            </div>

        </div>
    );
};

export default Testimonial;