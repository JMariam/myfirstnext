import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPlay, FaTwitter } from "react-icons/fa"

export default function Footer() {
    return(
        <div className="">
            <div className="container mx-auto px-6">
                <div className="bg-blue-200 p-8 text-center">
                    <p className="text-xl md:text-3xl font-bold mt-2 mb-6">Your journey to healthy teeth starts here!</p>
                    <div className="flex items-center justify-center gap-4 ">
                        <Link href="/" className="text-xs bg-blue-600 h-8 text-white py-2 px-3 hover:scale-105 transition">Book an appointment</Link>
                        <Link href="/" className="flex items-center gap-2 border text-xs bg-white border-blue-600 text-blue-600 py-2 px-3 h-8 hover:scale-105 transition">Play Video <FaPlay className='w-2'/></Link>
                    </div>
                </div>
            </div>
            <div className="footer bg-blue-600 text-white my-0 text-center md:text-left pt-6">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between p-6 gap-10">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-[4rem] py-4 lg:px-10">
                        <div className="text-xs grid gap-4 ">
                            <p className="font-bold">Product</p>
                            <p className="">Tour</p>
                            <p className="">Enterprise</p>
                            <p className="">Company</p>
                            <p className="">Testimonials</p>
                            <p className="">Terms of use</p>
                        </div>
                        <div className="text-xs grid gap-4">
                            <p className="font-bold">About</p>
                            <p className="">Company</p>
                            <p className="">Career</p>
                            <p className="">Blog</p>
                            <p className="">Serices</p>
                            <p className="">Partners</p>
                        </div>
                        <div className="text-xs grid gap-4">
                            <p className="font-bold">Legal</p>
                            <p className="">Privacy policy</p>
                            <p className="">Customer agreement</p>
                            <p className="">Security</p>
                            <p className="">Support</p>
                            <p className="">Terms of service</p>
                        </div>
                    </div>
                    <div className="md:text-justify">
                        <div className="">
                            <p className="text-xs mb-1">Subscribe to our newsletter</p>
                            <div className="flex justify-center md:justify-start">
                                <input type="email" className="p-3 border border-white bg-transparent text-xs w-64 text-white outline-none placeholder:text-white" placeholder='Email Address'/>
                                <p className="text-xs p-3 bg-white text-blue-600 w-fit">Subscribe</p>
                            </div>
                        </div>
                        <div className="flex gap-x-6 mt-8 justify-center md:justify-start">
                                <FaFacebook/>
                                <FaTwitter/>
                                <FaInstagram/>
                            </div>
                    </div>
                </div>
                <div className="border-t text-xs py-4 pl-8 border-slate-300 mt-4">&copy; 2022 <span className="ml-4">All Rights Reserved</span> </div>
            </div>
        </div>
    )
}