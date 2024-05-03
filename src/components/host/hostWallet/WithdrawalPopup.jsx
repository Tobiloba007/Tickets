import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import Bank from '../../../assets/zenith.svg'
import { AiOutlineDollarCircle } from "react-icons/ai";



const WithdrawalPopup = ({setOpen, setSuccess}) => {

  const handleProceed = () => {
    setOpen(false)
    setSuccess(true)
  }

  return (
    <div className='flex flex-col items-center justify-center w-full px-4 pt-6 pb-4 bg-white rounded-lg xl:pt-8 xl:pb-6 xl:px-5'>
           <div className='flex items-center justify-between w-full'>
               <p className='text-base font-medium text-[#1A0313] xl:text-xl'>
                    Withdrawal
               </p>
               <IoCloseOutline onClick={()=>setOpen(false)}
               className='text-xl font-semibold xl:text-2xl' />
           </div>

           <div className='flex flex-col items-start justify-start w-full'>
                 <div className='flex items-center justify-start w-full bg-[#EEE8EC] rounded-md px-4 py-2 mt-6'>
                      <img className='w-12 xl:w-14'
                      src={Bank} alt='Bank logo' />
                      <div className='flex flex-col items-start justify-center w-full ml-2 xl:ml-3'>
                          <p className='text-sm font-extrabold text-[#571845] xl:text-base xl:font-bold'>
                                 KEJI ADEDEJI
                          </p>
                          <p className='text-xs font-normal text-[#4F3D49] mt-1 xl:text-sm xl:mt-0'>
                                 0011223344
                          </p>
                      </div>
                 </div>
                 <p className='text-xs font-medium text-[#571845] mt-2 xl:text-sm'>
                      Change Payout?
                 </p>
           </div>

           <div className='relative flex items-center justify-start w-full mt-5 xl:mt-7'>
                <input className='h-10 w-full border-[2px] border-[#EEE8EC] rounded-md text-xs pl-11 outline-[#EEE8EC] xl:text-sm xl:h-11 xl:pl-12'
                  placeholder='Enter Amount'
                />
                <AiOutlineDollarCircle className='absolute left-3 text-xl xl:text-2xl' />
           </div>

           <div className='flex items-center justify-between w-full mt-7'>
               <div onClick={()=>setOpen(false)} 
               className='flex items-center justify-center h-8 w-[48%] bg-[#EEE8EC] rounded-md xl:h-10'>
                   <p className='text-xs font-medium text-[#571845] xl:text-sm'>
                       Cancel
                   </p>
               </div>

               <div onClick={handleProceed} className='flex items-center justify-center h-8 w-[48%] bg-[#571845] rounded-md xl:h-10'>
                   <p className='text-xs font-medium text-[#ffffff] xl:text-sm'>
                        Proceed
                   </p>
               </div>
           </div>

    </div>
  )
}

export default WithdrawalPopup
