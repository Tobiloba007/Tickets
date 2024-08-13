import React, { useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import { IoAdd } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";




const CancelBooking = ({setActiveForm}) => {
    const [select, setSelect] = useState('Yes')


    const handleSelect = (item) => {
        setSelect(item)
    }

  return (
    <div className='flex flex-col items-start justify-start w-full bg-white rounded-lg px-4 py-5 xl:px-8 xl:py-9'>
         <div className='flex items-center justify-between w-full'>
               <div className='flex flex-col items-start w-full'>
                  <p className='text-sm text-[#571845] font-medium xl:text-lg'>
                       Cancel Booking
                  </p>
                  <p className='text-[11px] text-[#331F2D] font-medium pt-1 xl:text-sm'>
                       Provide users the access to cancel bookings        
                  </p>
               </div>
         </div>

         <div className='w-full border-[1px] border-[#C6C0C4] mt-3 xl:mt-5'></div>


         <div className='flex flex-col items-start justify-start w-full mt-4 md:w-[40%] md:mt-5 lg:w-[45%]'>
             {/* SELECT FORMAT */}
             <div className='flex flex-col items-start'>
                 <p className='text-xs text-[#16071F] font-medium xl:text-lg'>
                      Allow Cancel Booking 
                 </p>
             </div>

             <div className='flex items-center justify-start w-full mt-2'>
                 <div onClick={()=>handleSelect('No')} className='flex items-center justify-start'>
                      <div className={`flex items-center justify-center h-[13px] w-[13px] rounded-full border-[1.5px] border-[#571845]`}>
                          <div className={`h-[8px] w-[8px] rounded-full ${select === 'No' ? 'bg-[#571845]' : 'bg-white'}`}></div>
                      </div>
                      <p className={`text-[10px] text-[#1A0313] font-medium pl-2 xl:text-xs`}>
                           No
                      </p>
                 </div>

                 <div onClick={()=>handleSelect('Yes')}
                 className='flex items-center justify-start ml-6'>
                      <div className={`flex items-center justify-center h-[13px] w-[13px] rounded-full border-[1.5px] border-[#571845]`}>
                          <div className={`h-[8px] w-[8px] rounded-full ${select === 'Yes' ? 'bg-[#571845]' : 'bg-white'}`}></div>
                      </div>
                      <p className={`text-[10px] text-[#1A0313] font-medium pl-2 xl:text-xs`}>
                           Yes
                      </p>
                 </div>
             </div>

          </div>

          {select === 'Yes' &&
          <div className='flex flex-col item-center justify-between w-full mt-5 md:flex-row xl:mt-7'>
                <div className='w-full md:w-[48.5%] mt-4 md:mt-0'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                       Cancel booking before x days to the event
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='0 days'
                   />
                </div>
          </div>
          }
          


          {/* BUTTONS */}
          <div className='flex items-center justify-start w-full mt-12'>
              <div className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] md:w-24 xl:w-28 xl:h-9'>
                  <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                       Complete    
                  </p>
              </div>
          </div>

    </div>
  )
}

export default CancelBooking
