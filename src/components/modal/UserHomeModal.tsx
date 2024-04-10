import React from 'react'
import Event from '../../assets/event.jpg'
import location from '../../assets/icons/location.svg'
import calendar from '../../assets/icons/calendar-2.svg'
import clock from '../../assets/icons/clock.svg'
import x from '../../assets/icons/x.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'


export const UserHomeModal:React.FC = () => {
  return (
    <div className='absolute top-24 flex flex-col items-start justify-start z-50 bg-white rounded-lg w-[90%] px-4 py-4 mb-36 md:w-[80%] 
                    md:p-5 md:rounded-xl lg:w-[55%] xl:w-[45%] xl:p-6 xl:rounded-2xl xl:top-14'>
        <div className='relative flex flex-col items-center justify-center w-full h-40 md:h-[225px]'>
           <img className='w-full h-full rounded-md md:rounded-lg xl:rounded-xl'
           src={Event} alt="event_image" />
           <div className='absolute flex flex-col items-center justify-center w-full z-50 mt-2'>
                <button className='text-center text-[11px] text-[#2F2623] font-semibold bg-[#FFDE9C] rounded-md px-3 h-6 md:h-8 
                                   md:px-5 md:text-xs lg:h-7 xl:h-8 xl:text-sm'>
                      In 3 days 
                </button>
                <p className='text-white text-center text-xl mt-3 font-semibold w-[50%] md:text-2xl lg:text-[24px] lg:w-[40%] lg:mt-1 xl:text-[26px] xl:w-[35%]'>
                    Flytime Fest, Asake
                </p>
           </div>
           <div className='absolute h-full w-full bg-black rounded-md opacity-30'></div>
        </div>

        <div className='flex flex-col items-start justify-start w-full mt-7 md:flex-row md:justify-between'>
            <div className='flex flex-col items-start justify-start w-full md:flex-1 mr-4'>
                <p className='text-base font-bold text-[#571845] lg:text-sm xl:text-base'>
                     Flytime Fest, Asake 
                </p>

                <div className='flex flex-col items-start justify-start w-full mt-3'>
                    <div className='flex items-center justify-start w-full mb-4 lg:mb-3'>
                        <img className='w-5'
                         src={location} alt="location" />
                         <p className='text-sm text-[#331F2D] ml-3 lg:text-[13px]'>
                              Eko Convention Center, Eko Hotel & Suites. 1415 Adetokunbo Ademola Street, Victoria Island, Lagos.
                         </p>
                    </div>
                    <div className='flex items-center justify-start w-full mb-4 lg:mb-3'>
                        <img className='w-5'
                         src={calendar} alt="location" />
                         <p className='text-sm text-[#331F2D] ml-3 lg:text-[13px]'>
                              Saturday, December 23 2023 - Sunday, December 24 2023
                         </p>
                    </div>
                    <div className='flex items-center justify-start w-full mb-4 lg:mb-3'>
                        <img className='w-5'
                         src={clock} alt="location" />
                         <p className='text-sm text-[#331F2D] ml-3 lg:text-[13px]'>
                              6:00 PM - 1:00 AM WAT
                         </p>
                    </div>
                </div>

                <div className='flex flex-col items-start justify-start w-full mt-2'>
                    <p className='text-base font-bold text-[#571845] lg:text-sm xl:text-base'>
                         Description
                    </p>
                    <p className='text-sm text-[#331F2D] mt-2 lg:text-[13px]'>
                         Get ready for back-to-back hits as Afrobeats' powerhouse, Asake, returns to the Flytime stage.Guests must be 13 years old and older. Doors close at 10PM
                    </p>
                    <button className='text-center text-sm font-semibold rounded-md text-[#571845] bg-[#EEE8EC] h-10 px-10 mt-4 lg:h-9'>
                        Contact us 
                    </button>
                </div>
            </div>

            <div className='flex flex-col items-start justify-start w-full mt-6 md:w-[35%] md:mt-0 md:ml-3'>
                <p className='text-base font-bold text-[#571845] lg:text-sm xl:text-base'>
                    Ticket
                </p>
                <div className='flex items-center justify-between w-full mt-1 md:flex-col md:items-start'>
                    <p className='text-sm text-[#331F2D] mt-2 font-medium md:mb-3 lg:text-xs'>
                        1 x VIP Ticket
                    </p>
                    <button className='text-sm text-center text-white font-semibold bg-[#571845] rounded-lg h-9 px-5 lg:text-xs lg:h-8 xl:h-9'>
                        Download Ticket
                    </button>
                </div>
                <div className='flex flex-col items-start justify-start w-full mt-7 md:mt-5'>
                    <p className='text-base font-bold text-[#571845] lg:text-sm xl:text-base'>
                        Share event 
                    </p>
                    <div className='flex items-center justify-start w-full mt-[10px]'>
                        <div className='flex items-center justify-center w-11 h-11 rounded-full bg-[#EEE8EC] mr-4 lg:h-10 lg:w-10'>
                            <img className='w-4' src={x} alt="x" />
                        </div>

                        <div className='flex items-center justify-center w-11 h-11 rounded-full bg-[#EEE8EC] mr-4 lg:h-10 lg:w-10'>
                            <img className='w-5' src={facebook} alt="x" />
                        </div>

                        <div className='flex items-center justify-center w-11 h-11 rounded-full bg-[#EEE8EC] mr-4 lg:h-10 lg:w-10'>
                            <img className='w-5' src={instagram} alt="x" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
