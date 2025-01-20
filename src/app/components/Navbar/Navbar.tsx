import Link from "next/link";
import Logo from "../Logo/Logo";
import { NavIteam } from "@/Types";


const Navbar = () => {

    const navItems: NavIteam[] = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About ME',
            path: '/about'
        },
        {
            title: 'my works',
            path: '/works'
        }
    ]


    return (
        <div className="flex justify-between items-center mt-[33px] sticky" >
            {/* Logo */}
            <div>
                <Logo />
            </div>

            <div className="flex justify-center items-center text-white ">
                {/* all navlinks */}
                <div className="space-x-3">
                    {
                        navItems?.map(nav =>
                            <Link key={nav?.path} href={nav?.path}>
                                <button className="uppercase font-rubik opacity-50 ">
                                    {nav.title}
                                </button>
                            </Link>
                        )
                    }
                </div>
                {/* contact btn */}
                <Link href={'/contact'}>
                    <button className="ml-5 uppercase font-rubik  px-9 py-4  border border-green-50 rounded-[30px] bg-[#1A1A1A]">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;