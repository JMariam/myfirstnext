import About from "@/components/About";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Service from "@/components/service";
import Special from "@/components/specialist";
import Testimonials from "@/components/testimonials";

export default function Home () {
    return (
        <main className="">
            <Navbar/>
            <Hero/>
            <About/>
            <Service/>
            <Special/>
            <Testimonials/>
            <Footer/>
        </main>
    )
}