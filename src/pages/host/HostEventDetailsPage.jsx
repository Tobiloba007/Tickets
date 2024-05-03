import React, { useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { PiExportFill } from "react-icons/pi";
import EventDetailsTable from '../../components/host/hostEvents/EventDetailsTable';
import HostEventsAbout from './HostEventsAbout';




const HostEventDetailsPage = ({setNext}) => {
    const [active, setActive] = useState('Bookings')

  return (
    <div className='flex flex-col items-center justify-start w-full'>
        <div className='flex items-center justify-between w-full px-5 lg:px-6 lg:mt-4 xl:px-8'>
             <div onClick={()=>setNext(1)}
             className='flex items-center justify-start cursor-pointer lg:-mt-16 xl:-mt-20'>
                 <IoIosArrowRoundBack className='text-xl text-[#571845] xl:text-3xl' />
                 <p className='text-[#571845] text-xs font-medium pl-1 xl:text-base'>Back</p>
             </div>

             <div className='flex items-center justify-end'>
                  <div className='flex items-center justify-center bg-[#EEE8EC] h-7 px-3 rounded-md md:px-4 md:h-[30px] lg:px-6 xl:h-10'>
                      <CiEdit className='hidden md:flex text-[#571845] text-base lg:text-lg xl:text-2xl' />
                      <p className='text-[#571845] text-[10px] font-medium md:ml-2 xl:text-sm xl:ml-3'>Edit Event</p>
                  </div>

                  <div className='flex items-center justify-center bg-[#571845] h-7 px-3 rounded-md ml-3 md:px-4 md:h-[30px] md:ml-2 lg:px-6 xl:h-10 xl:ml-3'>
                      <PiExportFill className='hidden md:flex text-[#ffffff] text-base xl:text-xl' />
                      <p className='text-[#ffffff] text-[10px] font-medium md:ml-2 xl:text-sm xl:ml-3'>Export</p>
                  </div>
             </div>
        </div>


        <div className='flex flex-col items-start w-full mt-5 px-5 lg:px-6 xl:px-8'>
              <p className='text-[#571845] text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl'>Flytime Fest, Asake</p>

              <div className='flex items-center justify-start w-full mt-2 md:mt-3 xl:mt-5'>
                  <div onClick={()=>setActive('Bookings')}
                  className={`flex items-center justify-center h-7 rounded-md px-4 cursor-pointer md:px-5 xl:h-9 xl:px-6 ${active === 'Bookings' ? 'bg-[#571845]' : 'bg-[#EEE8EC]'}`}>
                       <p className={`text-[10px] font-normal xl:text-sm ${active === 'Bookings' ? 'text-[#ffffff]' : 'text-[#571845]'}`}>Bookings Info</p>
                  </div>

                  <div onClick={()=>setActive('About')}
                  className={`flex items-center justify-center h-7 rounded-md px-4 ml-2 cursor-pointer md:px-5 xl:h-9 xl:px-6 xl:ml-3 ${active === 'About' ? 'bg-[#571845]' : 'bg-[#EEE8EC]'}`}>
                       <p className={`text-[#571845] text-[10px] font-medium xl:text-sm ${active === 'About' ? 'text-[#ffffff]' : 'text-[#571845]'}`}>About</p>
                  </div>
              </div>
        </div>


        { active === 'Bookings' 
        ?<div className='flex flex-col items-start justify-center w-full'>
             <div className='flex flex-col items-center justify-start w-full mt-6 px-5 md:flex-row lg:px-6 xl:px-8'>
                     <div className='flex flex-col items-start justify-center w-full bg-white rounded-md py-3 px-4 md:w-[200px] md:py-4 xl:px-5'>
                          <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Revenue</p>
                          <p className='text-lg font-bold text-[#331F2D] mt-2 xl:text-xl xl:mt-4'>NGN200,000</p>
                          <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs previous day</p>
                     </div>

                     <div className='flex flex-col items-start justify-center w-full bg-white rounded-md py-3 px-4 mt-3 md:mt-0 md:w-[200px] md:ml-3 md:py-4 xl:px-5 xl:ml-4'>
                          <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Sales</p>
                          <p className='text-lg font-bold text-[#331F2D] mt-2 xl:text-xl xl:mt-4'>2456</p>
                          <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs previous day</p>
                     </div>
             </div>


             <div className='flex items-center justify-center w-full'>
                  <EventDetailsTable />
             </div>
         </div>
        :active === 'About' &&  <HostEventsAbout />
        }

    </div>
  )
}

export default HostEventDetailsPage
