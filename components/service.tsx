import Image from "next/image"
import img3 from '../public/img3.jpg'

export default function Service(){
    return(
        <div className="container mx-auto p-12">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-10 lg:gap-48">
                <div className="">
                    <p className="text-blue-600 text-sm font-semibold">What we offer</p>
                    <p className="text-2xl font-bold mt-2 mb-4">Conditions we treat</p>
                    <div className="grid gap-8 ml-6">
                        <p className="list text-xs font-semibold">Tooth Decay</p>
                        <p className="list text-xs font-semibold">Gum Diseases</p>
                        <p className="list text-xs font-semibold">Bad Breath</p>
                        <p className="list text-xs font-semibold">Tooth Sensitivity</p>
                        <p className="list text-xs font-semibold">Oral Cancer</p>
                        <p className="list text-xs font-semibold">Mouth Soreness</p>
                    </div>
                </div>
                <div className="">
                <Image src={img3} alt='img2' className="w-[30rem] h-[25rem] rounded-tr-[20%] rounded-bl-[20%] border-4 border-blue-600"/>
                </div>
            </div>
        </div>
    )
}