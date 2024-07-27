import React, { useEffect, useState } from 'react'
import HostCheckInModal from '../components/host/hostCheckIn/HostCheckInModal'


const HostCheckIn = () => {
      const [proceed, setProceed] = useState(false);

  return (
    <div className='flex flex-col items-center justify-start w-full h-full mt-12 bg-[#FAFAFA] lg:mt-8 xl:mt-11'>
    <div className='flex flex-col items-center justify-start w-full px-5 bg-[#FAFAFA] lg:px-6 xl:px-8'>
           <p className='text-base font-bold text-[#571845] w-full text-start md:hidden'>Check In System</p>

           <div className='relative flex flex-col items-center justify-start w-full bg-[#FAFAFA] md:hidden'>
               <div className='flex items-end justify-center w-full h-[30rem] rounded-2xl border-[#dddddd] border-[1px] bg-[#ffe9e9] mt-5'>
                     <div className='absolute flex items-center justify-center rounded-md mb-3 h-10 bg-white px-5'>
                         <p className='text-sm font-normal text-[#1A0313]'>Scanning starts automatically</p>
                     </div>
               </div>

               <div className='flex items-center justify-center w-full mt-5'>
                     <p className='text-[11px] font-normal text-[#837780]'>-------- OR --------</p>
               </div>
           </div>

           <div className='flex items-start justify-between w-full mt-5 bg-[#FAFAFA]'>
                 <div className='flex flex-col items-start w-full py-5 px-3 rounded-lg bg-white mb-10 md:w-[48.8%] md:px-5 xl:py-7 xl:w-[48.5%] xl:rounded-xl'>
                      <p className='text-xs font-normal text-[#1A0313] xl:text-sm'>Ticket ID</p>
                      <p className='text-[10px] font-normal text-[#1A0313] pt-[2px] xl:text-xs'>Enter the Ticket ID to check in attendees</p>
                      <input className='h-9 w-full rounded-md border-[1px] border-[#EEE8EC] mt-[10px] pl-4 text-[10px] outline-[#571845] xl:mt-3 xl:h-11 xl:text-xs' 
                      placeholder='Enter the Ticket ID'
                      />
                      <div onClick={()=>setProceed(true)}
                      className='flex items-center justify-center px-5 h-8 rounded-md bg-[#571845] mt-5 xl:mt-6 xl:h-10 xl:px-7 xl:rounded-lg'>
                             <p className='text-[11px] font-normal text-[#ffffff] xl:text-sm'>Proceed</p>
                      </div>
                 </div>

                 {proceed &&
                 <div className='hidden md:flex items-center justify-center w-[48.8%] xl:w-[48.5%]'>
                       <HostCheckInModal setProceed={setProceed} />
                 </div>
                 }

           </div>

    </div>

    {proceed &&
      <div onClick={()=>setProceed(false)} className='fixed h-full w-full bg-[#A4A4A4] left-0 top-0 opacity-45 md:hidden'></div>
      }

      {proceed && 
        <div className='absolute flex items-center justify-center w-[75%] top-[40%] md:hidden'>
             <HostCheckInModal setProceed={setProceed}  />
        </div>
      }

    </div>
  )
}

export default HostCheckIn
