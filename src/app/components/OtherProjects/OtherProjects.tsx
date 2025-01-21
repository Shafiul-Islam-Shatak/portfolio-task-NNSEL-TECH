import Image from "next/image";
import otherProjectImg1 from '../../../../public/logoProject1.png'
import otherProjectImg2 from '../../../../public/logoProject2.png'
import otherProjectImg3 from '../../../../public/logoProject3.png'
const OtherProjects = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="font-syne text-[64px] font-bold text-white mt-[200px] mb-[85]">Other Projects</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-center lg:text-left">
                {/* project 1 */}
                <div>
                    <Image
                        className="mx-auto"
                        src={otherProjectImg1}
                        alt={'Logo Project 1'}

                    />
                    <div className='   space-y-3 mt-7 '>
                        <h1 className='font-sora text-2xl font-semibold '>Logo Project 1</h1>
                        <p className='font-rubik text-[18px] text-[#949494] '>Branding</p>
                    </div>
                </div>
                {/* project 2 */}
                <div>
                    <Image
                        className="mx-auto"
                        src={otherProjectImg2}
                        alt={'Logo Project 2'}

                    />
                    <div className='  space-y-3 mt-7 '>
                        <h1 className='font-sora text-2xl font-semibold '>Logo Project 2</h1>
                        <p className='font-rubik text-[18px] text-[#949494] '>Branding</p>
                    </div>
                </div>
                {/* project 3 */}
                <div>
                    <Image
                        className="mx-auto"
                        src={otherProjectImg3}
                        alt={'Logo Project 3'}

                    />
                    <div className='  space-y-3 mt-7 '>
                        <h1 className='font-sora text-2xl font-semibold '>Logo Project 3</h1>
                        <p className='font-rubik text-[18px] text-[#949494] '>Branding</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OtherProjects;