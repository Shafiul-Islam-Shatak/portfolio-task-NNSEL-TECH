import cloudShadow from '../../../../public/assets/Vector 8.svg'
import Image from 'next/image'

const PageHeader = ({ title, desciption }: { title: string, desciption: string }) => {
    return (
        <div className='xl:px-0 px-5 '>
            <div className=" relative  flex justify-between items-center  ">
                <div className="mt-[135px]">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-syne ">{title}</h1>
                    <div className='absolute  top-1/2 left-1/2 transform -translate-x-[160%] -translate-y-[40%]'>
                        <Image
                            src={cloudShadow}
                            width={500}
                            height={500}
                            alt='shadow'
                        />
                    </div>
                    <div className="mt-10">
                        <p className="font-rubik text-[#949494] text-[18px]">{desciption}</p>
                    </div>

                </div>

            </div>
            <hr className="w-full  my-[90px]" />

        </div>
    );
};

export default PageHeader;