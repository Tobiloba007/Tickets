"use client"
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { recentEvents } from '@/redux/features/EventActions';
import axios from 'axios';


const carousel1= "/img/carousel1.jpg"


export const UserHomeScroll = () => {
  const [recent, setRecent] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recentEvents(setRecent, setLoading, setError))
  }, [dispatch])

  return (
    <div className='flex w-full px-5 mt-7 mb-5 -z-5 lg:px-[22px] lg:mt-6 xl:px-8 xl:mt-9'>
            {
             loading 
            ?<div className='rounded-xl bg-[#c8c8c8] w-full flex items-center justify-center object-cover h-[425px] md:h-[290px] lg:h-[225px] xl:h-[275px] xl:rounded-2xl'>
                <div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full xl:h-9 xl:w-9">
                   <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin xl:h-9 xl:w-9"></div>
                </div>
            </div>
            
            :<Swiper
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
              {recent.map((item) => {
                return(
                  <SwiperSlide className='flex items-center justify-center w-full'>
                        <img className='rounded-xl w-full object-cover h-[425px] md:h-[290px] lg:h-[225px] xl:h-[275px] xl:rounded-2xl'
                        src={item.images[0]} alt="carousel1" />
                        <div className='absolute bottom-5 left-4 flex flex-col items-start justify-center w-full z-30 md:left-8 md:bottom-7 lg:left-7 lg:bottom-4 xl:left-9'>
                             <p className='text-[9px] font-medium text-white md:text-xs xl:text-sm xl:mb-1'>
                                 {item.time_and_date.slice(0, 10)}
                              </p>
                              <p className='text-[17px] font-semibold text-white md:text-2xl lg:text-[25px] xl:text-[30px]'>
                                 {item.event_name}
                              </p>
                        </div>
                        <div className="absolute inset-0 bg-gray-900 opacity-30 rounded-xl xl:rounded-2xl"></div>
                  </SwiperSlide>
                )
              })}

              </Swiper>
            }

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
