import React from 'react'
import { HiMiniCheckCircle } from "react-icons/hi2";
import Avatar from '../../../assets/avatar.jpg'
import ticket from '../../../assets/Ticket.svg'
import barCode from '../../../assets/bar-code.svg'
import barCodeMobile from '../../../assets/bar-code2.svg'




const HostCheckInModal = ({setProceed}) => {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg px-3 py-5 md:px-5 xl:rounded-xl bg-[#ffffff] w-full xl:px-7'>
          <div className='flex flex-col items-center justify-center w-full'>
               <HiMiniCheckCircle className='text-[36px] text-[#4BB543] xl:text-[45px]' />
               <p className='text-xs font-medium text-[#4F3D49] pt-[2px] xl:text-base'>The Attendee is on the list</p>
          </div>

          <div className='flex items-center justify-center w-full mt-5 md:justify-start md:mt-4'>
               <img className='w-11 h-11 rounded-full object-cover xl:h-14 xl:w-14'
               src={Avatar} alt='success icon' />
               <div className='flex flex-col items-start pl-2 xl:pl-3'>
                   <p className='text-xs font-medium text-[#1A0313] xl:text-base'>
                       Muniah Mudi
                   </p>
                   <p className='text-[10px] font-medium text-[#1A0313] pt-[2px] xl:text-xs'>
                       1x Regular
                   </p>
               </div>
          </div>

          <div className='flex flex-col items-center justify-start w-full mt-4 md:items-start'>
               <div className='flex flex-col items-start justify-center md:flex-row'>
                   <img className='w-52 md:w-48 xl:w-60'
                   src={ticket}  alt='ticket_image'/>

                   <div className='flex flex-col items-center justify-start mt-3 md:ml-5 md:flex-row xl:ml-7'>
                         <img className='hidden md:flex w-[33px] md:mr-[-24px] xl:w-[45px] xl:mr-[-28px]'
                         src={barCode}  alt='ticket_image'/>
                           {/* MOBILE */}
                         <img className='flex w-[180px] md:mr-[-24px] xl:w-[45px] xl:mr-[-28px] md:hidden'
                         src={barCodeMobile}  alt='ticket_image'/>
                         <p className='text-base text-[#837780] font-normal md:-rotate-90 mt-1 md:text-[10px] xl:text-[13px]'>0123456789101112</p>
                   </div>
               </div>

               <div onClick={()=>setProceed(false)}
               className='flex items-center justify-center w-full h-9 rounded-lg bg-[#571845] mt-5 xl:mt-7 xl:h-12'>
                    <p className='text-[11px] text-[#ffffff] font-normal xl:text-sm'>Check In</p>
               </div>
          </div>

    </div>
  )
}

export default HostCheckInModal
