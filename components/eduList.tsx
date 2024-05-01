import { education } from "@/data/db"

export default function eduList () {
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center mt-6">
            {education.map((education: any) => (
                <div className="drop-shadow-2xl bg-white rounded-tl-[40%] rounded-br-[40%] py-6 px-10" key={education.id}>
                    <p className="font-bold text-lg">{education.title}</p>
                    <p className="pt-3 pb-6 text-xs font-semibold">{education.content}</p>
                    <p className="text-blue-600 font-semibold border border-blue-500 w-fit px-3 py-1 text-xs hover:scale-105 cursor-pointer">{education.read}</p>
                </div>
            ))}
        </div>
    )
}