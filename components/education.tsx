import EduList from "./eduList";

export default function Education () {
    return(
        <div className="mt-12 container mx-auto p-6">
            <div className="text-center">
                <p className="text-blue-600 text-xs font-bold">Education</p>
                <p className="font-bold text-xl my-2">About tooth disease and decay</p>
                <p className="text-xs mx-auto md:w-2/3 lg:w-1/3">Dental carics (tooth decay) remains the most prevalent chronic disease in both children and adults, even though it is largely preventable.</p>
            </div>
            <EduList/>
        </div>
    )
}