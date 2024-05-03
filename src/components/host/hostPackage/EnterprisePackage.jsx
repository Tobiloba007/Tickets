import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";



const EnterprisePackage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-white border-2 border-[#EEE8EC] rounded-xl pt-6 pb-1 px-5 ml-[10px] md:flex-row md:items-start md:justify-between xl:px-6 xl:rounded-2xl md:ml-0 md:mt-5 xl:mt-6'>
          <div className='flex flex-col items-center w-full md:items-start md:w-[40%]'>
               <p className='text-base font-bold text-[#571845] lg:text-sm xl:text-base'>Enterprise</p>
               <p className='text-[11px] font-normal text-[#331F2D] text-center mt-2 leading-4 md:text-start lg:mt- xl:text-xs xl:font-medium'>
                      Ideal for getting started with mobile <br />funnels and achieving your first successes.
               </p>

               <div className='flex items-center justify-center rounded-md h-7 px-6 bg-[#571845] mt-6 md:mt-4 lg:mt-5 xl:px-7 xl:h-8 xl:mt-6'>
                    <p className='text-[11px] font-medium text-[#ffffff]'>Get Started</p>
               </div>
          </div>

          <div className='flex flex-col items-start justify-start w-full mt-5 md:mt-0 md:flex-row md:justify-end md:w-[60%]'>
               <div className='flex flex-col items-start justify-center w-full'>
                   <div className='flex items-center justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 lg:text-[11px] xl:text-[13px]'>Paid Events</p>
                   </div>
                   <div className='flex items-start justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 lg:text-[11px] xl:text-[13px]'>Fee paid per ticket (4.5% + ₦50)</p>
                   </div>
                   <div className='flex items-start justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 lg:text-[11px] xl:text-[13px]'>Free Events</p>
                   </div>
                   <div className='flex items-start justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 lg:text-[11px] xl:text-[13px]'>Onsite personnel</p>
                   </div>
                   <div className='flex items-start justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 w-[75%] lg:text-[11px] xl:text-[13px]'>Unlimited Available no. of tickets per event</p>
                   </div>
               </div>

               <div className='flex flex-col items-center justify-center w-full md:ml-4'>
                   <div className='flex items-start justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 lg:text-[11px] xl:text-[13px]'>Unlimited Event listings/types</p>
                   </div>
                   <div className='flex items-start justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 lg:text-[11px] xl:text-[13px]'>Premium customer support</p>
                   </div>
                   <div className='flex items-start justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 lg:text-[11px] xl:text-[13px]'>Advanced event promotion<br />
                            <span className='font-normal text-[11px] lg:text-[10px] xl:text-xs'>Event listing on the platform <br />Social media promotion<br /> Email Campaigns<br /> Targeted advertising</span>
                        </p>
                   </div>
                   <div className='flex items-start justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 lg:text-[11px] xl:text-[13px]'>Data reporting & analytics</p>
                   </div>
                   <div className='flex items-start justify-start w-full mb-4 xl:mb-5'>
                        <IoCheckmarkCircleSharp className='text-base text-[#571845] xl:text-lg' />
                        <p className='text-xs font-medium text-[#571845] ml-3 lg:text-[11px] xl:text-[13px]'>Financial Summary</p>
                   </div>
               </div>

          </div>

    </div>
  )
}

export default EnterprisePackage
