import { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { PiExportFill } from 'react-icons/pi'
import EventsTable from '../adminBlogs/EventsTable'



const EventsOverview = ({setOpenModal, setCreate}) => {


  return (
    <div className='flex-col items-center justify-center w-full h-full overflow-y-scroll [&>div]:flex-shrink-0 hide-scrollbar'>
        {/* BUTONS */}
       <div className='flex items-center justify-between w-full mt-7 md:mb-2 lg:mb-4 xl:mb-5'>
             <div onClick={()=>setOpenModal(true)}
             className='flex items-center justify-center w-[85px] h-8 rounded-md bg-[#EEE8EC] cursor-pointer md:w-24 md:h-8 md:rounded-md lg:w-32 lg:h-9'>
                 <PiExportFill className='text-[#571845] text-lg lg:text-xl' />
                 <p className='text-[12px] text-[#571845] font-normal pl-1.5 lg:text-sm lg:pl-2 xl:text-[15px]'>
                      Export 
                 </p>
             </div>

             <div onClick={()=>setCreate(1)}
             className='flex items-center justify-center px-3.5 h-8 rounded-md bg-[#571845] cursor-pointer md:h-8 md:rounded-md lg:h-9'>
                 <IoIosAdd className='text-white text-lg lg:text-xl' />
                 <p className='text-[12px] text-white font-normal pl-1.5 lg:text-sm lg:pl-2 xl:text-[15px]'>
                      Create event 
                 </p>
             </div>
       </div>
    
       <div className='flex flex-col items-center justify-start w-full mt-4 md:flex-row md:justify-between md:items-start'>
            <div className='flex items-center justify-between flex-wrap w-full mt-5 md:mt-0 md:flex-nowrap'>
                 <div className='flex flex-col items-start justify-center w-[48.5%] bg-white rounded-md py-3 px-4 md:w-[50%] md:py-4 xl:px-5 xl:py-6'>
                      <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Events</p>
                      <p className='text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4'>2500</p>
                      <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs 28 previous day</p>
                 </div>
   
                 <div className='flex flex-col items-start justify-center w-[48.5%] bg-white rounded-md py-3 px-4 md:mt-0 md:w-[50%] md:ml-3 md:py-4 xl:px-5 xl:ml-4 xl:py-6'>
                      <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Avg Events per week</p>
                      <p className='text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4'>450</p>
                      <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs 28 previous day</p>
                 </div>

                 <div className='flex flex-col items-start justify-center w-[48.5%] bg-white rounded-md py-3 px-4 mt-4 md:mt-0 md:w-[50%] md:ml-3 md:py-4 xl:px-5 xl:ml-4 xl:py-6'>
                      <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Revenue</p>
                      <p className='text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4'>N400,000</p>
                      <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs 28 previous day</p>
                 </div>
            </div>
       </div>


       <div className='flex w-full'>
           <EventsTable />
       </div>


    </div>
  )
}
export default EventsOverview
