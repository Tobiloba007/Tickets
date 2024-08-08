import React from 'react'
import { IoCloseOutline } from "react-icons/io5";



const ResetPasswordModal = ({setOpenModal}) => {

  const handleProceed = () => {
    setOpenModal(false)
  }

  return (
    <div className='flex flex-col items-start justify-center w-full px-4 py-6 bg-white rounded-lg xl:pt-8 xl:pb-6 xl:px-5'>
           <div className='flex items-center justify-end w-full'>
               <IoCloseOutline onClick={()=>setOpenModal(false)}
               className='text-xl font-bold xl:text-2xl' />
           </div>

           <p className='text-sm font-semibold text-[#262524] mt-2 xl:text-base'>
                 Reset Password 
           </p>

           <p className='text-[11px] font-medium text-[#262524] w-[75%] mt-1 xl:text-sm'>
                 Press link below to send a reset link to the member .
           </p>


           <div onClick={handleProceed} className='flex items-center justify-center h-8 px-7 bg-[#571845] rounded-md mt-5 xl:h-10'>
               <p className='text-[11px] font-normal text-[#ffffff] xl:text-sm'>
                     Send reset link 
               </p>
           </div>

    </div>
  )
}

export default ResetPasswordModal
