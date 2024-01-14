import Image from "next/image"
import img2 from "../public/img2.jpg"
import img4 from "../public/img4.jpg"
import img5 from "../public/img5.jpg"
import img8 from "../public/img8.jpg"

export default function About() {
    return(
        <div className="bg-blue-50 mt-8">
            <div className="container mx-auto p-6 grid md:grid-cols-2 gap-10">
                <div className="grid w-fit grid-cols-2 gap-1 mx-auto">
                <Image src={img2} alt='img2' className="w-[11rem] h-[10rem] rounded-tl-[50%]"/>
                <Image src={img4} alt='img2' className="w-[11rem] h-[10rem] rounded-tr-[50%]"/>
                <Image src={img8} alt='img2' className="w-[11rem] h-[10rem] rounded-bl-[50%]"/>
                <Image src={img5} alt='img2' className="w-[11rem] h-[10rem] rounded-br-[50%]"/>
                </div>
                <div className="">
                    <p className="text-blue-600 text-sm font-semibold">About Us</p>
                    <p className="text-2xl font-bold mt-2 mb-4">Who we are</p>
                    <p className="text-xs font-bold lg:w-2/3 text-justify">When it comes to your dental care, only the best will do. That is why you should trust us with your smile. We'll guide you through every step of thsi ext phase of life, from your first exam to a lifetime of maintenance, we believe that a beautiful smile is important to your quality of life. We will work with you to help achieve the best result possible in a fun and relaxed environment.</p>
                    <p className="text-xs w-fit bg-blue-600 h-8 text-white py-2 px-3 hover:scale-105 transition mt-8">Read More</p>
                </div>
            </div>
        </div>
    )
}