import React from 'react'
import { PiExportFill } from "react-icons/pi";
import { SlClock } from "react-icons/sl";
import { LuCalendarX2 } from "react-icons/lu";


const MembershipReport = () => {

  return (
    <div className='flex items-center justify-between w-full mt-20 bg-white py-[18px] px-4 rounded-lg'>
                   <div className='flex flex-col items-start w-full'>
                       <p className='text-[13px] font-medium text-[#1A0313]'>Membership Report</p>
                       <div className='flex items-center justify-start mt-2'>
                           <div className='flex items-center justify-center rounded-2xl bg-[#EDF8EC] py-1 px-4'>
                               <p className='text-[10px] font-medium text-[#4BB543]'>Active</p>
                           </div>
                           <p className='text-[9px] font-medium text-[#571845] ml-2'>Renew Package</p>
                       </div>

                       <div className='flex items-center justify-between w-full mt-4'>
                             <div className='flex flex-col items-start w-[32.2%] bg-[#EEE8EC] rounded-lg px-3 py-2 h-[105px]'>
                                 <SlClock className='text-[#571845] text-sm xl:text-base' />
                                 <p className='text-[9px] font-normal text-[#4F3D49] mt-1'>Expiration Date</p> 
                                 <p className='text-xs font-medium text-[#571845] mt-8'>Unlimited</p> 
                             </div>

                             <div className='flex flex-col items-start w-[32.2%] bg-[#EEE8EC] rounded-lg px-3 py-2 h-[105px]'>
                                 <LuCalendarX2 className='text-[#571845] text-sm' />
                                 <p className='text-[9px] font-normal text-[#4F3D49] mt-1'>Remaining Events</p> 
                                 <p className='text-xs font-medium text-[#571845] mt-8'>Unlimited</p> 
                             </div>

                             <div className='flex flex-col items-start w-[32.2%] bg-[#EEE8EC] rounded-lg px-3 py-2 h-[105px]'>
                                 <LuCalendarX2 className='text-[#571845] text-sm' />
                                 <p className='text-[9px] font-normal text-[#4F3D49] mt-1'>Posted Events</p> 
                                 <p className='text-xs font-medium text-[#571845] mt-8'>0</p> 
                             </div>
                       </div>
                   </div>

    </div>
  )
}

export default MembershipReport
