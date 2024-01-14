import Link from "next/link"
import Image from "next/image"
import img1 from "../public/img1.jpg"
import { FaPlay } from "react-icons/fa"
import Education from "./education"

export default function Hero () {
    return (
        <>
            <div className="container mx-auto p-6 hero-bg">
                <div className="grid lg:grid-cols-2  gap-12 place-items-center mb-6">
                    <div className="md:w-5/6">
                        <p className="text-4xl font-bold">We Make Your <br/><span className="border-2 border-blue-600 rounded-[50%]">Smile</span> Our Priority.</p>
                        <p className="text-sm font-semibold mt-4 mb-8 text-justify">At Dentalliance, we are dedicated to one thing - your smile. With over 50 years of experience and more than 150 carefully selected deantal practices. we are uniquelly equipped to take care of your dental needs</p>
                        <div className="flex items-center gap-4">
                        <Link href="/" className="text-xs bg-blue-600 h-8 text-white py-2 px-3 hover:scale-105 transition">Book an appointment</Link>
                        <Link href="/" className="flex items-center gap-2 border text-xs bg-white border-blue-600 text-blue-600 py-2 px-3 h-8 hover:scale-105 transition">Play Video <FaPlay className='w-2'/></Link>
                        </div>
                    </div>
                    <div className="">
                        <Image src={img1} alt='img1' className="w-[30rem] h-[25rem] md:h-[25rem] border-4 rounded-br-[20%] rounded-bl-[20%] border-blue-600"/>
                    </div>
                </div> 
                <div className="hidden md:flex items-center justify-between md:px-28 lg:px-40 lg:w-[75%] mx-auto -mb-14 rounded bg-blue-600">
                    <div className="text-white text-center p-2">
                        <p className="text-lg">5000+</p>
                        <p className="text-[0.7rem]">Patients</p>
                    </div>
                    <div className="text-white text-center p-2">
                        <p className="text-lg">64</p>
                        <p className="text-[0.7rem]">Branches</p>
                    </div>
                    <div className="text-white text-center p-2">
                        <p className="text-lg">700+</p>
                        <p className="text-[0.7rem]">Outlets</p>
                    </div>
                    <div className="text-white text-center p-2">
                        <p className="text-lg">500+</p>
                        <p className="text-[0.7rem]">Employees</p>
                    </div>
                </div>
            </div>
            <Education/>
        </>
    )
}
