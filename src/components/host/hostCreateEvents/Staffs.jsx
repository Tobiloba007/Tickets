import React, { useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import { IoAdd } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";




const Staffs = ({setActiveForm}) => {
    const [select, setSelect] = useState('Percentage')
    const [newStaff, setNewStaff] = useState([1]);


    const handleSelect = (item) => {
        setSelect(item)
    }

    const handleAddStaff = () => {
     setNewStaff([...newStaff, newStaff.length + 1]);
   };

  return (
    <div className='flex flex-col items-start justify-start w-full bg-white rounded-lg px-4 py-5 xl:px-8 xl:py-9'>
         <div className='flex items-center justify-between w-full'>
               <div className='flex flex-col items-start w-full'>
                  <p className='text-sm text-[#571845] font-medium xl:text-lg'>
                       Staff
                  </p>
                  <p className='text-[11px] text-[#331F2D] font-medium pt-1 xl:text-sm'>
                       Create Coupons / Discount on tickets          
                  </p>
               </div>


                    {/* BUTTONS */}
                <div className='hidden md:flex items-center justify-end w-full mt-7'>
                     <div className='flex items-center justify-center w-28 h-8 rounded-md bg-[#EEE8EC] xl:h-9 xl:w-32'>
                         <SlNotebook className='text-[#571845] text-sm' />
                         <p className='text-[11px] text-[#571845] font-medium ml-2 xl:text-xs'>
                              Save as draft    
                         </p>
                     </div>

                     <div onClick={()=>setActiveForm(5)}
                     className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                         <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                              Proceed    
                         </p>
                     </div>
               </div>
         </div>

         <div className='w-full border-[1px] border-[#C6C0C4] mt-3 xl:mt-5'></div>

         <p className='text-xs text-[#571845] font-medium mt-5 xl:text-base'>
                       Staff
         </p>


         {newStaff.map((item, index) => (
         <div className='flex flex-col item-center justify-between w-full mt-5 md:flex-row md:flex-wrap md:mt-0'>
                <div className='w-full md:w-[48.5%] md:mt-5'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                        First name
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='John'
                   />
                </div>

                <div className='w-full md:w-[48.5%] mt-4 md:mt-5'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                        Last name
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='Doe'
                   />
                </div>

                <div className='w-full md:w-[48.5%] mt-4 md:mt-5'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                        Email
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='mail@johndoe.com'
                   />
                </div>

                <div className='w-full md:w-[48.5%] mt-4 md:mt-5'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                        Phone
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='0901 234 5678'
                   />
                </div>

                <div className='w-full border-[0.5px] opacity-40 mt-5 border-[#EEE8EC] xl:mt-7'></div>

          </div>
          ))}


          <div onClick={handleAddStaff}
          className='flex items-center justify-center h-6 px-2 rounded-md bg-[#EEE8EC] mt-4 md:mt-5 lg:h-7 lg:px-3'>
              <IoAdd className='text-[#571845] text-sm' />
              <p className='text-[#571845] text-[9px] ml-[6px] md:text-[10px] xl:text-[11px]'>
                   Add Staff
              </p>
          </div>


          


          {/* BUTTONS */}
          <div className='flex items-center justify-start w-full mt-12 md:hidden'>
              <div className='flex items-center justify-center w-28 h-8 rounded-md bg-[#EEE8EC] xl:h-9 xl:w-32'>
                  <SlNotebook className='text-[#571845] text-sm' />
                  <p className='text-[11px] text-[#571845] font-medium ml-2 xl:text-xs'>
                       Save as draft    
                  </p>
              </div>

              <div onClick={()=>setActiveForm(5)}
              className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                  <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                       Proceed    
                  </p>
              </div>
          </div>

    </div>
  )
}

export default Staffs
