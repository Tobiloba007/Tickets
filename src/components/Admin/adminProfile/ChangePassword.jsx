import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { SlCloudUpload } from 'react-icons/sl';



const ChangePassword = ({setOpenModal}) => {

  const handleProceed = () => {
    setOpenModal(false)
  }

  return (
    <div className='flex flex-col items-start justify-center w-full px-4 py-7 bg-white rounded-lg xl:pt-6 xl:pb-6 xl:px-5'>

           <div className='flex items-center justify-between w-full'>
               <p className='text-sm font-semibold text-[#262524] xl:text-lg'>
                    Change Password  
               </p>
               <IoCloseOutline onClick={()=>setOpenModal(false)} className='text-xl font-bold xl:text-2xl' />
           </div>


           <div className='flex flex-col items-start w-full mt-7'>
                <p className='text-[11px] font-semibold text-[#262524] w-[80%] mt-1 xl:text-sm'>
                    Old password   
                </p>
                <input className='bg-[#ffffff] rounded-md px-4 py-1 p mt-2 w-full h-9 border-[1px] border-[#EEE8EC] text-[10px] text-[#16071F] outline-[#EEE8EC]' 
                placeholder='********'
                />
           </div>

           <div className='flex flex-col items-start w-full mt-3'>
                <p className='text-[11px] font-semibold text-[#262524] w-[80%] mt-1 xl:text-sm'>
                    New password    
                </p>
                <input className='bg-[#ffffff] rounded-md px-4 py-1 p mt-2 w-full h-9 border-[1px] border-[#EEE8EC] text-[10px] text-[#16071F] outline-[#EEE8EC]' 
                placeholder='********'
                />
           </div>

           <div className='flex flex-col items-start w-full mt-3'>
                <p className='text-[11px] font-semibold text-[#262524] w-[80%] mt-1 xl:text-sm'>
                    Confirm password    
                </p>
                <input className='bg-[#ffffff] rounded-md px-4 py-1 p mt-2 w-full h-9 border-[1px] border-[#EEE8EC] text-[10px] text-[#16071F] outline-[#EEE8EC]' 
                placeholder='********'
                />
           </div>


           <div className='flex items-center justify-end w-full mt-8'>
                <button onClick={()=>setOpenModal(false)}
                 className='text-center mt-2 text-xs font-semibold text-[#571845] bg-[#EEE8EC] rounded-md h-8 px-9 md:px-10 md:mt-3 xl:h-9 xl:text-sm xl:mt-4'>
                    Cancel    
                </button>

                <button className='text-center mt-2 text-xs font-semibold text-[#ffffff] bg-[#571845] rounded-md h-8 ml-4 px-5 md:px-6 md:mt-3 xl:h-9 xl:text-sm xl:mt-4'>
                    Save Changes   
                </button>
           </div>

    </div>
  )
}

export default ChangePassword
