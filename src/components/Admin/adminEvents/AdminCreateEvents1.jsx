import React, { useState } from 'react'
import { BsArrowLeft, BsCheckLg } from 'react-icons/bs'


const AdminCreateEvents1 = ({setCreate}) => {

    const [check, setCheck] = useState(false);

    const evetType = ['Online', 'Physical Location']

    const handleEventType = (item) => {
        setCheck(item)
    }

  return (
    <main className='flex flex-col items-start justify-start w-full mt-7'>

         <div onClick={()=>setCreate(0)}
         className='flex items-center justify-start w-full px-3 cursor-pointer md:px-5'>
             <BsArrowLeft className='text-[#571845] text-sm xl:text-base' />
            <p className='text-xs font-medium text-[#571845] pl-1.5 xl:text-[15px] xl:pl-3 xl:font-semibold'>
                Back
            </p>
         </div>

         <div className='w-full py-4 bg-white px-3 rounded-lg mt-5 md:px-5 xl:mt-10 xl:py-6'>
         <p className='text-sm font-medium text-[#571845] pb-2 xl:text-base xl:font-medium'>
            Basic Information
         </p>

         <div className='flex flex-col items-center w-full md:flex-row md:items-start md:justify-between'>
             <div className='flex flex-col items-start justify-start w-full md:w-[47.5%]'>
                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Event name 
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='provide the name of this event '
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Category  
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='select Category'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         City   
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='select City'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Price    
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Input Price'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Time    
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Input Time'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                    <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Description 
                    </p>
                    <textarea className='bg-[#FAFAFA] rounded-md px-4 py-2 mt-1 w-full text-[10px] border-[1px] border-[#EEE8EC] text-[#16071F] outline-[#EEE8EC] 
                                           xl:text-[13px] xl:px-5 xl:mt-2' 
                    placeholder='Type a message'
                     rows={6}
                    />
                  </div>
             </div>

             <div className='flex flex-col items-start justify-start w-full md:w-[47.5%]'>
                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Tags  
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Add tags to this event'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Event Type   
                     </p>

                     <div className='flex items-center justify-start w-full mt-2'>
                         {evetType.map((item) => (
                         <div key={item} onClick={()=>handleEventType(item)}
                         className='flex items-center justify-start mr-4'>
                              <div className={`flex items-center justify-center h-3.5 w-3.5 border-[1px] border-[#E0E5F2] rounded-sm cursor-pointer 
                                               ${check === item ? 'bg-[#571845]' : 'bg-white'}`}>
                                                  <BsCheckLg className='text-white' />
                                               </div>
                              <p className='text-[10px] font-medium text-[#2B2B2B] pl-2'>
                                  {item}  
                              </p>
                         </div>
                        ))}
                     </div>
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         State   
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='select City'
                     />
                 </div>

                 <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Venue Name    
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Provide venue name'
                     />
                 </div>

                 <button className='text-center mt-4 text-xs font-semibold text-[#571845] bg-[#EEE8EC] rounded-md h-8 px-3 md:px-4 md:mt-5 xl:h-9 xl:text-sm xl:mt-7'>
                      Add location on Map 
                 </button>
             </div>

         </div>


         <div className='flex items-center justify-end w-full mt-10 md:mt-6 xl:mt-5'>
               <button onClick={()=>setCreate(2)}
                className='text-center text-sm font-medium text-[#ffffff] bg-[#571845] rounded-md h-8 px-5 md:px-6 xl:h-10 xl:text-[17px] xl:px-7'>
                   Continue  
               </button>
         </div>

         </div>

    </main>
  )
}

export default AdminCreateEvents1
