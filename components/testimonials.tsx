'use client'
import testimonials from '../data/ts.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Testimonials() {
    return(
        <>
        <div className="container mx-auto px-6 py-12">
              <div className="text-center">
                <p className="text-blue-600 text-sm font-semibold">Testimonials</p>
                <p className="text-2xl font-bold mt-2 mb-4">What our patients say about us</p>
            </div>
            <Swiper
           slidesPerView={1}
           
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper">
            {testimonials.map((testimonial: any) => (
                <SwiperSlide className="my-12" key={testimonial.id}>
                    <div className="grid place-items-center place-content-center lg:w-[60%] bg-white shadow-2xl lg:mx-[20%] py-10 px-2 md:p-10">
                        <img src={testimonial.img} alt="tsImg" className='relative w-14 h-14 rounded-[50%] -mt-20'/>
                        <div className="md:text-center mt-3">
                            <p className="text-md font-bold">{testimonial.name}</p>
                            <p className="text-xs">{testimonial.city}</p>
                        </div>
                        <p className='text-xs md:text-sm text-justify md:text-center mt-6 md:mt-12 md:w-5/6'>{testimonial.test}</p>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>


        </div>
        </>
    )
}