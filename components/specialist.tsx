"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import specialists from '../data/sp.json'
import Link from 'next/link';



export default function Specialists () {
    
    return(
        <>
        <div className="container mx-auto px-6 mt-12">
            <div className="text-center">
                <p className="text-blue-600 text-sm font-semibold">Specialists</p>
                <p className="text-2xl font-bold mt-2 mb-4">Meet our Dentists</p>
            </div>
            
        <Swiper
              breakpoints={{
                250: {
                  width: 250,
                  slidesPerView: 1,
                },
                1234: {
                  width: 1234,
                  slidesPerView: 3,
                },
              }}
           slidesPerView={3}
           spaceBetween={30}
           
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper">
            {specialists.map(({id, name, area, img}) => (
                <SwiperSlide className="mb-10" key={id}>
                <Link href={`/detaisl/${id}`} passHref>
                <img src={img} alt="spImg" className='w-[20rem] h-[20rem] rounded-tl-[20%] rounded-br-[20%]'/>
                <div className="md:text-center mt-6">
                    <p className="text-md font-bold">{name}</p>
                    <p className="text-xs">{area}</p>
                </div>
                </Link>
                </SwiperSlide>
   
            ))}
        </Swiper>
        </div>
        </>
    )
}