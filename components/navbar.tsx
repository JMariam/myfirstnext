"use client"
import Link from "next/link";
import { useState } from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';

const Navbar = () => {
    const [navShow, setNavShow] = useState(false)
    return ( 
        <div className="">
            <div className="container mx-auto p-6 flex items-center justify-between">
                <div className="flex md:gap-12 lg:gap-16 items-center">
                    <Link href="/" className="text-xl font-bold">Clean<span className="text-blue-600">Dental</span></Link>
                    <div className="hidden md:flex md:gap-4 lg:gap-8 text-sm font-semibold">
                    <Link href="/" onClick ={() => setNavShow(!navShow)} className="hover:text-blue-600 dot">Home</Link>
                    <Link href="/" className="hover:text-blue-600 dot">Service</Link>
                    <Link href="/" className="hover:text-blue-600 dot">Contact</Link>
                    <Link href="/" className="hover:text-blue-600 dot">Blog</Link>
                    </div>
                </div>
                <div className="hidden md:flex md:gap-4 lg:gap-8 text-sm font-semibold items-center">
                    <Link href="/" className="hover:text-blue-600 dot">Login</Link>
                    <Link href="/" className="border border-blue-600 text-blue-600 py-2 px-4 hover:scale-105 transition">Book an appointment</Link>
                </div>
                <FaBars onClick ={() => setNavShow(!navShow)} className="flex md:hidden text-blue-600 text-xl ml-2"/>
            </div>


           {navShow && 
           <div className="absolute right-0 top-0 h-full md:hidden px-4 pt-[21.5px] w-[60%] rounded-tl-2xl rounded-bl-2xl drop-shadow-2xl border border-l-blue-600 border-t-blue-600 border-b-blue-600 bg-white">
           <FaTimes onClick ={() => setNavShow(!navShow)} className="text-blue-600 text-2xl absolute right-6"/>
           <div className="flex flex-col text-blue-800 gap-12 text-xl pt-28">
               <Link href='/' onClick ={() => setNavShow(!navShow)} className="hover:scale-105">Home</Link>
               <Link href='/'onClick ={() => setNavShow(!navShow)} className="hover:scale-105">Service</Link>
               <Link href='/'onClick ={() => setNavShow(!navShow)}  className="hover:scale-105">Contact</Link>
               <Link href='/' onClick ={() => setNavShow(!navShow)} className="hover:scale-105">Blog</Link>
           </div>
           
   </div>} 
        </div> 
     );
}
 
export default Navbar;
