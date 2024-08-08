import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'


const AdminCreateEvents2 = ({setCreate}) => {

  return (
    <main className='flex flex-col items-start justify-start w-full mt-7'>

         <div onClick={()=>setCreate(1)}
         className='flex items-center justify-start w-full px-3 cursor-pointer md:px-5'>
             <BsArrowLeft className='text-[#571845] text-sm xl:text-base' />
            <p className='text-xs font-medium text-[#571845] pl-1.5 xl:text-[15px] xl:pl-3 xl:font-semibold'>
                Back
            </p>
         </div>

         <div className='w-full py-4 bg-white px-3 rounded-lg mt-5 md:px-5 xl:mt-10 xl:py-6'>
         <p className='text-sm font-medium text-[#571845] pb-2 xl:text-base xl:font-medium'>
             Contact Information
         </p>

         <div className='flex flex-col items-center w-full md:flex-row md:items-start md:justify-between'>
             <div className='flex flex-col items-start justify-start w-full md:w-[47.5%]'>
                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Name 
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Provide contact name'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Phone number   
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Provide  phone number'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Email    
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='provide your email address'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Social Media     
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Select.....'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Facebook URL    
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Enter URL.'
                     />
                 </div>

                 <button className='text-center mt-4 text-xs font-semibold text-[#571845] bg-[#EEE8EC] rounded-md h-7 px-5 md:px-7 md:mt-5 xl:h-9 xl:text-sm xl:mt-7'>
                      Add more URL
                 </button>

             </div>


             
             <div className='flex flex-col items-start justify-start w-full mt-6 md:mt-0 md:w-[47.5%]'>
                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Event Image   
                     </p>
                     <div className='flex items-center justify-start w-full mt-1.5 xl:mt-2.5'>
                         <button className='text-center text-xs font-semibold text-[#571845] bg-[#EEE8EC] rounded-md h-7 px-5 md:px-7 xl:h-9 xl:text-sm'>
                             Upload Image 
                         </button>
                         <p className='text-[10px] font-medium text-[#FB2621] pl-2 xl:text-xs'>
                              Recommended size 1920x739 px
                         </p>
                     </div>
                 </div>

                 <div className='flex flex-col items-start w-full mt-4 md:mt-5 xl:mt-6'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Gallery (Optional)  
                     </p>
                     <div className='flex items-center justify-start w-full mt-1.5 xl:mt-2.5'>
                         <button className='text-center text-xs font-semibold text-[#571845] bg-[#EEE8EC] rounded-md h-7 px-5 md:px-7 xl:h-9 xl:text-sm'>
                             Upload Image 
                         </button>
                     </div>
                 </div>

                 <div className='flex flex-col items-start w-full mt-4 md:mt-5 xl:mt-6'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Video URL   
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Provide URL'
                     />
                 </div>
             </div>

         </div>


         <div className='flex items-center justify-end w-full mt-10 md:mt-6 xl:mt-5'>
               <button onClick={()=>setCreate(3)}
                className='text-center text-sm font-medium text-[#ffffff] bg-[#571845] rounded-md h-8 px-5 md:px-6 xl:h-10 xl:text-[17px] xl:px-7'>
                   Continue  
               </button>
         </div>

         </div>

    </main>
  )
}

export default AdminCreateEvents2
