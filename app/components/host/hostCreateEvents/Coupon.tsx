import React, { useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import { IoAdd } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";




const Coupon = ({setActiveForm}) => {
    const [select, setSelect] = useState('Percentage')
    const [coupon, setCoupon] = useState([1]);



    const handleSelect = (item) => {
        setSelect(item)
    }

    const handleAddCoupon = () => {
     setCoupon([...coupon, coupon.length + 1]);
   };

  return (
    <div className='flex flex-col items-start justify-start w-full bg-white rounded-lg px-4 py-5 xl:px-8 xl:py-9'>
         <div className='flex items-center justify-between w-full'>
               <div className='flex flex-col items-start w-full'>
                  <p className='text-sm text-[#571845] font-medium xl:text-lg'>
                       Coupon
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

                     <div onClick={()=>setActiveForm(4)}
                     className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                         <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                              Proceed    
                         </p>
                     </div>
               </div>
         </div>

         <div className='w-full border-[1px] border-[#C6C0C4] mt-3 xl:mt-5'></div>


         <div className='flex flex-col item-center justify-between w-full mt-5 md:flex-row xl:mt-7'>
                <div className='w-full md:w-[48.5%]'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                         Name
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='OFF10'
                   />
                </div>

                <div className='relative w-full md:w-[48.5%] mt-4 md:mt-0'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                         Expiration Date
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='dd/mm/yyyy'
                   />
                   <BsCalendar4Week className='absolute bottom-2 right-3 text-sm text-[#16071F] xl:bottom-3 xl:text-xl xl:right-4' />
                </div>
          </div>


         <div className='flex flex-col items-start justify-start w-full mt-4 md:w-[40%] md:mt-5 lg:w-[45%]'>
             {/* SELECT FORMAT */}
             <div className='flex flex-col items-start'>
                 <p className='text-xs text-[#16071F] font-medium xl:text-lg'>
                       Discount Type
                 </p>
             </div>

             <div className='flex items-center justify-start w-full mt-2'>
                 <div onClick={()=>handleSelect('Percentage')} className='flex items-center justify-start'>
                      <div className={`flex items-center justify-center h-[13px] w-[13px] rounded-full border-[1.5px] border-[#571845]`}>
                          <div className={`h-[8px] w-[8px] rounded-full ${select === 'Percentage' ? 'bg-[#571845]' : 'bg-white'}`}></div>
                      </div>
                      <p className={`text-[10px] text-[#1A0313] font-medium pl-2 xl:text-xs`}>
                           Percentage (%)
                      </p>
                 </div>

                 <div onClick={()=>handleSelect('Amount')}
                 className='flex items-center justify-start ml-6'>
                      <div className={`flex items-center justify-center h-[13px] w-[13px] rounded-full border-[1.5px] border-[#571845]`}>
                          <div className={`h-[8px] w-[8px] rounded-full ${select === 'Amount' ? 'bg-[#571845]' : 'bg-white'}`}></div>
                      </div>
                      <p className={`text-[10px] text-[#1A0313] font-medium pl-2 xl:text-xs`}>
                           Specific Amount
                      </p>
                 </div>
             </div>

          </div>

          {coupon.map((item, index) => (
          <div key={index} className='flex flex-col item-center justify-between w-full mt-5 md:flex-row xl:mt-7'>
                {select === 'Percentage' &&
                <div className='w-full md:w-[48.5%]'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                         Percentage (%)
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='Enter Value'
                   />
                </div>
                }

                {select === 'Amount' &&
                <div className='w-full md:w-[48.5%]'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                        Specific Amount
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='Enter Specific Amount'
                   />
                </div>
                }

                <div className='w-full md:w-[48.5%] mt-4 md:mt-0'>
                   <p className='text-[11px] text-[#16071F] mb-[2px] font-medium xl:text-xs xl:mb-1'>
                        Usage Limit (Number of times the coupon can be used)
                   </p>
                   <input className='h-8 w-full border-[1px] border-[#dddddd] rounded-md bg-white pl-4 pr-2 text-[10px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='Usage limit'
                   />
                </div>
          </div>
          ))}

          <div onClick={handleAddCoupon}
          className='flex items-center justify-center h-6 px-2 rounded-md bg-[#EEE8EC] mt-4 md:mt-5 lg:h-7 lg:px-3'>
              <IoAdd className='text-[#571845] text-sm' />
              <p className='text-[#571845] text-[9px] ml-[6px] md:text-[10px] xl:text-[11px]'>
                   Add Coupon
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

              <div onClick={()=>setActiveForm(4)}
              className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                  <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                       Proceed    
                  </p>
              </div>
          </div>

    </div>
  )
}

export default Coupon
