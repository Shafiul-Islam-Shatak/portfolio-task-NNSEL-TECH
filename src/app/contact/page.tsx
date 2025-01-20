import PageHeader from "../components/PageHeader/PageHeader";
import laptop from '../../../public/assets/laptop.png'
import Image from 'next/image'

const contact = () => {
    return (
        <div>
            {/* common header to all page */}
            <PageHeader
                title="Contact Me"
                desciption="For Any Project Knock Us"
            />

            {/* Form*/}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-left'>
                <h1 className='font-syne text-[80px] -tracking-[2.5] font-bold leading-[1.1]'>
                    Get in<br />Touch with<br />Us
                </h1>
                <form action="">
                    {/* name input */}
                    <div className="flex flex-col">
                        <h1 className="font-rubik text-2xl uppercase">NAME</h1>
                        <input type="text" name="name" id="name" placeholder="" className="border-[#e5eaf2] border-b py-3 px-4 w-[80%] bg-transparent"
                        />
                    </div>
                    {/* Subject input */}
                    <div className="flex flex-col mt-12">
                        <h1 className="font-rubik text-2xl uppercase">Subject</h1>
                        <input type="text" name="subject" id="subject" placeholder="" className="border-[#e5eaf2] border-b py-3 px-4 w-[80%] bg-transparent"
                        />
                    </div>
                    {/* Message input */}
                    <div className="flex flex-col  mt-12">
                        <h1 className="font-rubik text-2xl uppercase">message</h1>
                        <input type="text" name="message" id="message" placeholder="" className="border-[#e5eaf2] border-b py-3 px-4 w-[80%] bg-transparent"
                        />
                    </div>
                    <button
                        className="py-2 px-6 mt-12 min-w-fit bg-[#FF9142] text-white rounded-full font-rubik uppercase  hover:bg-orange-500">Send
                    </button>
                </form>


            </div>
           
                <Image
                    className="my-[100px]"
                    src={laptop}
                    alt="laptop-pic" />

           <div className="font-bold text-2xl font-syne w-3/4 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 text-center">
            <h1>Street Avenue 21, CA</h1>
            <h1>+9 0283353</h1>
            <h1 className="underline">info@aaronn.com</h1>
           </div>
        </div>
    );
};

export default contact;