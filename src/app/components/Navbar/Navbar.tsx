'use client'
import Link from "next/link";
import Logo from "../Logo/Logo";
import { NavIteam } from "@/Types";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
        },
        {
            title: 'dashboard',
            path: '/dashboard'
        }
    ]

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleCloseMenu= ()=>{
        setIsOpen(false)
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-[33px] sticky xl:px-0 px-5" >
                {/* Logo */}
                <div>
                    <Logo />
                </div>

                <div className=" justify-center items-center text-white hidden lg:flex">
                    {/* all navlinks */}
                    <div className="space-x-4">
                        {
                            navItems?.map(nav =>
                                <Link key={nav?.path} href={nav?.path}>
                                    <button className="uppercase font-rubik hover:text-blue-500 hover:scale-105 opacity-50 ">
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

                <GiHamburgerMenu className="lg:hidden" onClick={handleMenu} />
            </div>
            {
                isOpen &&
                <div className="relative lg:hidden font-rubik font-semibold bg-gray-400 bg-opacity-30 mt-2 mx-5">
                    <ul className="text-center  p-3">
                        {
                            navItems.map(nav =>
                                <li className="hover:bg-gray-400 hover:text-blue-300 hover:scale-105" key={nav.title}>
                                    <Link href={nav.path}>
                                    <button className="uppercase ">
                                    {nav.title}
                                </button></Link></li>
                            )
                        }
                    </ul>
                    <div className="top-2 left-2 absolute">
                        <RxCross2 onClick={handleCloseMenu}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;