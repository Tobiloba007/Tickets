import React, { useState } from 'react'
import { PiExportFill } from "react-icons/pi";
import { SlClock } from "react-icons/sl";
import { LuCalendarX2 } from "react-icons/lu";
import WithdrawalPopup from '../components/host/hostWallet/WithdrawalPopup';
import WithdrawalSuccess from '../components/host/hostWallet/WithdrawalSuccess';
import MembershipReport from '../components/host/hostOverview/MembershipReport';
import TotalSalesTable from '../components/host/hostOverview/TotalSalesTable';
import UpcomingEventsTable from '../components/host/hostOverview/UpcomingEventsTable';




const HostOverview = () => {
    const [view, setView] = useState(false);
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)


    const handleClose = () => {
        setView(false)
        setOpen(false)
        setSuccess(false)
    }

  return (
    <div className='flex flex-col items-center justify-start w-full h-full mt-12 lg:mt-10 xl:mt-12'>
         <p className='text-base font-bold text-[#571845] w-full text-start px-5 lg:hidden'>Good day, Maimunah</p>

         <div className='hidden md:flex justify-end w-full px-5 lg:px-6 xl:px-8'>
             <div className='flex items-center justify-center bg-[#EEE8EC] h-7 px-5 rounded-md ml-3 md:h-[30px] md:ml-2 lg:px-6 xl:h-10 xl:ml-3'>
                      <PiExportFill className='hidden md:flex text-[#571845] text-base xl:text-xl' />
                      <p className='text-[#571845] text-xs font-medium md:ml-2 xl:text-sm xl:ml-3'>Export</p>
             </div>
         </div>

         <div className='flex flex-col items-center justify-start w-full mt-4 px-5 md:flex-row-reverse md:justify-between md:items-start lg:px-6 xl:px-8'>
              <div className='flex items-center justify-between w-full bg-white py-[18px] px-4 rounded-lg md:w-[49%] md:h-[215px] lg:h-[219px] xl:h-[256.5px] 
                              xl:px-5 xl:py-[19px]'>
                   <div className='flex flex-col items-start w-full'>
                       <p className='text-[13px] font-medium text-[#1A0313] xl:text-base'>Membership Report</p>
                       <div className='flex items-center justify-start mt-2'>
                           <div className='flex items-center justify-center rounded-2xl bg-[#EDF8EC] py-1 px-4'>
                               <p className='text-[10px] font-medium text-[#4BB543] xl:text-xs'>Active</p>
                           </div>
                           <p className='hidden md:flex text-[9px] font-medium text-[#571845] ml-2 xl:text-[11px]'>Renew Package</p>
                       </div>

                       <div className='hidden md:flex items-center justify-between w-full mt-4 lg:mt-5'>
                             <div className='flex flex-col items-start w-[32.2%] bg-[#EEE8EC] rounded-lg px-3 py-2 xl:py-4 xl:px-4'>
                                 <SlClock className='text-[#571845] text-sm xl:text-base' />
                                 <p className='text-[9px] font-normal text-[#4F3D49] mt-1 lg:text-[10px] xl:text-xs xl:font-medium'>Expiration Date</p> 
                                 <p className='text-xs font-medium text-[#571845] mt-12 xl:text-base'>Unlimited</p> 
                             </div>

                             <div className='flex flex-col items-start w-[32.2%] bg-[#EEE8EC] rounded-lg px-3 py-2 xl:py-4 xl:px-4'>
                                 <LuCalendarX2 className='text-[#571845] text-sm xl:text-base' />
                                 <p className='text-[9px] font-normal text-[#4F3D49] mt-1 lg:text-[10px] xl:text-xs xl:font-medium'>Remaining Events</p> 
                                 <p className='text-xs font-medium text-[#571845] mt-12 xl:text-base'>Unlimited</p> 
                             </div>

                             <div className='flex flex-col items-start w-[32.2%] bg-[#EEE8EC] rounded-lg px-3 py-2 xl:py-4 xl:px-4'>
                                 <LuCalendarX2 className='text-[#571845] text-sm xl:text-base' />
                                 <p className='text-[9px] font-normal text-[#4F3D49] mt-1 lg:text-[10px] xl:text-xs xl:font-medium'>Posted Events</p> 
                                 <p className='text-xs font-medium text-[#571845] mt-12 xl:text-base'>0</p> 
                             </div>
                       </div>
                   </div>

                   <p onClick={()=>setView(true)} className='text-[13px] font-medium text-[#571845] md:hidden'>View</p>

              </div>

              {/* RIGHT CARD */}
             <div className='flex flex-col items-center justify-start w-full md:w-[49%] mt-5 md:mt-0'>
                  {/* WITHDRAW CARD */}
                  <div className='flex flex-col items-start justify-center h-[150px] w-full rounded-lg bg-[#571845] px-4 md:flex-row md:items-center md:justify-between 
                                   md:h-[100px] xl:h-[120px] xl:px-5'>
                       <div className='flex flex-col items-start justify-center'>
                         <p className='text-xs font-light text-white xl:text-sm'>
                              Current Balance
                         </p>
                         <p className='text-lg font-semibold text-white mt-[10px] xl:text-2xl xl:mt-5'>
                                NGN 9,200,000
                           </p>
                       </div>
   
                       <div onClick={()=>setOpen(true)}
                           className='flex items-center justify-center w-full rounded-md h-9 bg-white mt-5 cursor-pointer md:w-[90px] md:mt-0 md:h-8 xl:h-9 xl:w-[120px]'>
                           <p className='text-xs font-bold text-[#571845] md:text-[11px] lg:text-xs xl:text-sm'>
                               Withdraw
                           </p>
                        </div>
                  </div>

                   {/* PROFIT CARD */}
                   <div className='flex flex-col items-center justify-start w-full mt-5 md:flex-row md:mt-4 xl:mt-5'>
                       <div className='flex flex-col items-start justify-center w-full bg-white rounded-md py-3 px-4 md:w-[50%] md:py-4 xl:px-5'>
                            <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Revenue</p>
                            <p className='text-lg font-bold text-[#331F2D] mt-2 xl:text-xl xl:mt-4'>NGN200,000</p>
                            <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs previous day</p>
                       </div>
   
                       <div className='flex flex-col items-start justify-center w-full bg-white rounded-md py-3 px-4 mt-3 md:mt-0 md:w-[50%] md:ml-3 md:py-4 xl:px-5 xl:ml-4'>
                            <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Sales</p>
                            <p className='text-lg font-bold text-[#331F2D] mt-2 xl:text-xl xl:mt-4'>2456</p>
                            <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs previous day</p>
                       </div>
                   </div>

             </div>

         </div>


         <div className='flex flex-col items-center justify-start w-full md:flex-row-reverse md:justify-between md:mt-4 xl:mt-5'>
               <UpcomingEventsTable />
               <TotalSalesTable />
         </div>


            {view | open | success && <div onClick={handleClose} className='fixed h-full w-full bg-[#A4A4A4] left-0 top-0 opacity-45'></div>}

            {view && 
                <div className='fixed flex items-center justify-center w-[90%] top-[20%] md:hidden'>
                     <MembershipReport   />
                </div>
            }

            {open && 
                <div className='fixed flex items-center justify-center w-[85%] top-[30%] md:w-[45%] lg:w-[35%] xl:w-[30%]'>
                     <WithdrawalPopup setOpen={setOpen} setSuccess={setSuccess}  />
                </div>
            }

            {success && 
                <div className='absolute flex items-center justify-center w-[80%] top-[20%] md:w-[40%] lg:w-[35%] xl:w-[25%]'>
                        <WithdrawalSuccess setSuccess={setSuccess} />
                </div>
             }
           
    </div>
  )
}

export default HostOverview
