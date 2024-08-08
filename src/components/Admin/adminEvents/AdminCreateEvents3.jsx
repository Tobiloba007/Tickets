import React, { useState } from 'react'
import { BsArrowLeft, BsCheckLg } from 'react-icons/bs'
import { HiOutlineCalendarDays } from 'react-icons/hi2';


const AdminCreateEvents3 = ({setCreate}) => {

    const [ticketCheck, setTicketCheck] = useState(false);

    const [cancelCheck, setCancelCheck] = useState(false);

    const ticketType = ['Free', 'Paid']

    const cancel = ['No', 'Yes']

    const handleEventType = (item) => {
        setTicketCheck(item)
    }

    const handleCancelBooking = (item) => {
        setCancelCheck(item)
    }

  return (
    <main className='flex flex-col items-start justify-start w-full mt-7'>

         <div onClick={()=>setCreate(2)}
         className='flex items-center justify-start w-full px-3 cursor-pointer md:px-5'>
             <BsArrowLeft className='text-[#571845] text-sm xl:text-base' />
            <p className='text-xs font-medium text-[#571845] pl-1.5 xl:text-[15px] xl:pl-3 xl:font-semibold'>
                Back
            </p>
         </div>

         <div className='w-full py-4 bg-white px-3 rounded-lg mt-5 md:px-5 xl:mt-10 xl:py-6'>
         <p className='text-sm font-medium text-[#571845] pb-2 xl:text-base xl:font-medium'>
             Event Information
         </p>

         <div className='flex flex-col items-center w-full md:flex-row md:items-start md:justify-between'>
             <div className='flex flex-col items-start justify-start w-full md:w-[47.5%]'>
                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Ticket type    
                     </p>

                     <div className='flex items-center justify-start w-full mt-2'>
                         {ticketType.map((item) => (
                         <div key={item} onClick={()=>handleEventType(item)}
                         className='flex items-center justify-start mr-5'>
                              <div className={`flex items-center justify-center h-3.5 w-3.5 border-[1px] border-[#E0E5F2] rounded-sm cursor-pointer 
                                               ${ticketCheck === item ? 'bg-[#571845]' : 'bg-white'}`}>
                                                  <BsCheckLg className='text-white' />
                                               </div>
                              <p className='text-[11px] font-medium text-[#2B2B2B] pl-2 md:text-xs xl:text-sm'>
                                  {item}  
                              </p>
                         </div>
                        ))}
                     </div>
                 </div>

                 <div className='flex flex-col items-start w-full mt-5 md:mt-5 xl:mt-6'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                          Purchase ticket from 
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Select.....'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         External Link   
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Provide external url'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Seat type    
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Select.....'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Time     
                     </p>
                     <div className='relative w-full'>
                         <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                         placeholder='Select.....'
                         />
                         <HiOutlineCalendarDays className='absolute right-3.5 top-3.5 text-lg text-[#8993A4]' />
                     </div>
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Calendar Option    
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Select.....'
                     />
                 </div>

             </div>



             <div className='flex flex-col items-start justify-start w-full mt-6 md:mt-0 md:w-[47.5%]'>
                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Coupon (Optional)  
                     </p>
                     <div className='flex items-center justify-start w-full mt-1.5 xl:mt-2.5'>
                         <button className='text-center text-xs font-semibold text-[#571845] bg-[#EEE8EC] rounded-md h-7 px-5 md:px-7 xl:h-9 xl:text-sm'>
                             Generate Code   
                         </button>
                     </div>
                 </div>

                 <div className='flex flex-col items-start w-full mt-4 md:mt-5 xl:mt-6'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Staff contact info   
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Provide  username'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Allow Cancel Booking    
                     </p>

                     <div className='flex items-center justify-start w-full mt-2'>
                         {cancel.map((item) => (
                         <div key={item} onClick={()=>handleCancelBooking(item)}
                         className='flex items-center justify-start mr-5'>
                              <div className={`flex items-center justify-center h-3.5 w-3.5 border-[1px] border-[#E0E5F2] rounded-sm cursor-pointer 
                                               ${cancelCheck === item ? 'bg-[#571845]' : 'bg-white'}`}>
                                                  <BsCheckLg className='text-white' />
                                               </div>
                              <p className='text-[11px] font-medium text-[#2B2B2B] pl-2 md:text-xs xl:text-sm'>
                                  {item}  
                              </p>
                         </div>
                        ))}
                     </div>
                 </div>

                 <div className='flex flex-col items-start w-full mt-4 md:mt-5 xl:mt-6'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Cancel booking before x days  
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='0 days'
                     />
                 </div>

             </div>

         </div>


         <div className='flex items-center justify-end w-full mt-10 md:mt-6 xl:mt-5'>
               <button onClick={()=>setCreate(0)}
                className='text-center text-sm font-medium text-[#ffffff] bg-[#571845] rounded-md h-8 px-5 md:px-6 xl:h-10 xl:text-[17px] xl:px-7'>
                   Continue  
               </button>
         </div>

         </div>

    </main>
  )
}

export default AdminCreateEvents3
