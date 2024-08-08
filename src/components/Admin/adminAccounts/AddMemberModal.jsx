import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { SlCloudUpload } from 'react-icons/sl';



const AddMemberModal = ({setOpenModal}) => {

  const handleProceed = () => {
    setOpenModal(false)
  }

  return (
    <div className='flex flex-col items-start justify-center w-full px-4 py-7 bg-white rounded-lg xl:pt-6 xl:pb-6 xl:px-5'>

           <div className='flex items-center justify-end w-full'>
               <IoCloseOutline onClick={()=>setOpenModal(false)} className='text-xl font-bold xl:text-2xl' />
           </div>

           <div className='flex flex-col items-start w-full mt-1'>
               <p className='text-sm font-semibold text-[#262524] xl:text-lg'>
                     Add Member 
               </p>
               <p className='text-xs font-medium pt-1 text-[#262524] xl:text-sm xl:pt-1.5'>
                    Provide details to create new member 
               </p>
           </div>


           <div className='flex flex-col items-start w-full mt-3'>
                <p className='text-[11px] font-semibold text-[#262524] w-[80%] mt-1 xl:text-sm'>
                    Name  
                </p>
                <input className='bg-[#ffffff] rounded-md px-4 py-1 p mt-2 w-full h-9 border-[1px] border-[#EEE8EC] text-[10px] text-[#16071F] outline-[#EEE8EC]' 
                placeholder='Provide name'
                />
           </div>

           <div className='flex flex-col items-start w-full mt-3'>
                <p className='text-[11px] font-semibold text-[#262524] w-[80%] mt-1 xl:text-sm'>
                    Email   
                </p>
                <input className='bg-[#ffffff] rounded-md px-4 py-1 p mt-2 w-full h-9 border-[1px] border-[#EEE8EC] text-[10px] text-[#16071F] outline-[#EEE8EC]' 
                placeholder='mail@johndoe.com'
                />
           </div>


           <div onClick={handleProceed} className='flex items-center justify-center h-8 px-6 bg-[#571845] cursor-pointer rounded-md mt-9 xl:h-10'>
               <p className='text-xs font-medium text-[#ffffff] xl:text-sm'>
                    Add member 
               </p>
           </div>

    </div>
  )
}

export default AddMemberModal
