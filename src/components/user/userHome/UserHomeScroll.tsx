import React from 'react'
import carousel1 from '../../../assets/carousel1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';


export const UserHomeScroll: React.FC = () => {
  return (
    <div className='flex w-full px-5 mt-7 mb-5 -z-5 lg:px-[22px] lg:mt-6 xl:px-8 xl:mt-9'
        >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="flex flex-row items-center justify-center w-full"
              >
                <SwiperSlide className='flex items-center justify-center w-full'>
                    <img className='rounded-xl w-full object-cover h-[425px] md:h-[290px] lg:h-[225px] xl:h-[275px] xl:rounded-2xl'
                    src={carousel1} alt="carousel1" />
                    <div className='absolute bottom-5 left-4 flex flex-col items-start justify-center w-full z-30 md:left-8 md:bottom-7 lg:left-7 lg:bottom-4 xl:left-9'>
                          <p className='text-[9px] font-medium text-white md:text-xs xl:text-sm xl:mb-1'>
                              Thurs Dec 21st, 2023
                          </p>
                          <p className='text-[17px] font-semibold text-white md:text-2xl lg:text-[25px] xl:text-[30px]'>
                              Soundland Concert
                          </p>
                    </div>
                    <div className="absolute inset-0 bg-gray-900 opacity-30 rounded-xl xl:rounded-2xl"></div>
                </SwiperSlide>

              </Swiper>

              {/* <div className=' relative flex items-center justify-center w-full bg-cover bg-center rounded-xl object-cover h-[425px] md:h-[290px] lg:h-[225px] 
                              xl:h-[275px] xl:rounded-2xl' style={{backgroundImage: `url(${carousel1})`}}>
                    <div className='h-full rounded-xl left-4 flex flex-col items-start justify-end w-full px-7 py-6'>
                          <p className='text-[9px] font-medium text-white md:text-xs xl:text-sm xl:mb-1'>
                              Thurs Dec 21st, 2023
                          </p>
                          <p className='text-[17px] font-semibold text-white md:text-2xl lg:text-[25px] xl:text-[30px]'>
                              Soundland Concert
                          </p>
                    </div>
                    <div className="absolute h-full w-full inset-0 bg-gray-900 opacity-40 rounded-xl xl:rounded-2xl"></div>
             </div> */}
    </div>
  )
}
