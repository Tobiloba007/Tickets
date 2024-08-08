import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { SlCloudUpload } from 'react-icons/sl';



const CreateBlogModal = ({setOpenModal}) => {

  const handleProceed = () => {
    setOpenModal(false)
  }

  return (
    <div className='flex flex-col items-end justify-center w-full px-4 py-4 bg-white rounded-lg xl:pt-6 xl:pb-6 xl:px-5'>
           <div className='flex items-center justify-between w-full'>
               <p className='text-sm font-semibold text-[#262524] xl:text-sm'>
                   Create a Blog Post 
               </p>

               <IoCloseOutline onClick={()=>setOpenModal(false)}
               className='text-xl font-bold xl:text-2xl' />
           </div>


           <div className='flex flex-col items-start w-full mt-3'>
                <p className='text-[11px] font-semibold text-[#262524] w-[80%] mt-1 xl:text-sm'>
                     Title 
                </p>
                <input className='bg-[#ffffff] rounded-md px-4 py-1 p mt-2 w-full h-9 border-[1px] border-[#EEE8EC] text-[10px] text-[#16071F] outline-[#EEE8EC]' 
                placeholder='Reason for suspension'
                />
           </div>

           <div className='flex flex-col items-start w-full mt-3'>
                <p className='text-[11px] font-semibold text-[#262524] w-[80%] mt-1 xl:text-sm'>
                     Description 
                </p>
                <textarea className='bg-[#ffffff] rounded-md px-4 py-1 p mt-2 w-full text-[10px] border-[1px] border-[#EEE8EC] text-[#16071F] outline-[#EEE8EC]' 
                placeholder='Type your article here'
                 rows={4}
                />
           </div>


           <div className='flex items-center justify-start w-full mt-4 xl:mt-5'>
                 <div className='flex items-center justify-center border-[1px] border-[#571845] cursor-pointer rounded-md bg-white h-8 px-3'>
                     <SlCloudUpload className='text-base text-[#571845]' />
                     <p className='text-xs font-semibold text-[#571845] pl-2.5 xl:text-[13px]'>
                          Upload an image  
                     </p>
                 </div>
           </div>


           <div onClick={handleProceed} className='flex items-center justify-center h-8 px-7 bg-[#571845] cursor-pointer rounded-md mt-5 xl:h-10'>
               <p className='text-[11px] font-normal text-[#ffffff] xl:text-sm'>
                   Publish
               </p>
           </div>

    </div>
  )
}

export default CreateBlogModal
