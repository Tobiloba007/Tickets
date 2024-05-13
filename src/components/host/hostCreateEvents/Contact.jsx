import React, { useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import EventMedia from './EventMedia';



const Contact = ({setActive, active, setActiveForm}) => {
    const [dropdown, setDropdown] = useState(false)
    const [chooseSocials, setChooseSocials] = useState('')


    const socials = ['Instagram', 'Facebook', 'Snapchat', 'X']

    const handleCategory = (item) => {
        setChooseSocials(item)
        setDropdown(false)
    }



  return (
    <div className='flex flex-col items-start justify-start w-full bg-white rounded-lg py-5 xl:py-9'>
          <div className='flex flex-col items-start w-full md:flex-row md:items-center md:justify-between'>
              <div className='flex flex-col items-start w-full'>
                 <p className='text-sm text-[#571845] font-medium xl:text-lg'>
                       3. Contact
                 </p>
                 <p className='text-[11px] text-[#331F2D] font-medium pt-1 xl:text-sm'>
                      This is a filler for the text going here            
                 </p>
              </div>

              {active !== 3 &&
              <div onClick={()=>setActive(3)}
              className='flex items-center justify-center h-6 px-4 rounded-md bg-[#EEE8EC] mt-2 md:h-7 md:px-5 xl:h-8 xl:px-6'>
                   <p className='text-[10px] text-[#571845] font-medium md:text-[11px] xl:text-xs'>
                         Edit
                   </p>
              </div>
              }
          </div>

          <div className='w-full border-[1px] border-[#C6C0C4] mt-3 xl:mt-5'></div>

          {active === 3 &&
          <div className='flex flex-col items-start justify-start w-full'>

          <div className='flex flex-col items-start w-full md:flex-row md:flex-wrap md:justify-between'>
               {/* FIRST NAME */}
               <div className='flex flex-col items-start w-full mt-3 md:w-[49%] xl:mt-4'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-[13px]'>
                        First name        
                   </p>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='John'
                    />
               </div>

               {/* LAST NAME */}
               <div className='flex flex-col items-start w-full mt-2 md:w-[49%] md:mt-3 xl:mt-5'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-[13px]'>
                        Last name     
                   </p>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='Doe'
                    />
               </div>

               {/* EMAIL */}
               <div className='flex flex-col items-start w-full mt-2 md:w-[49%] xl:mt-5'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-[13px]'>
                        Email     
                   </p>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='mail@johndoe.com'
                    />
               </div>

               {/* PHONE */}
               <div className='flex flex-col items-start w-full mt-2 md:w-[49%] xl:mt-5'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-[13px]'>
                        Phone      
                   </p>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='0901 234 5678'
                    />
               </div>

               {/* SOCIALS */}
               <div className='ralative flex flex-col items-start w-full mt-2 md:w-[49%] xl:mt-5'>
                     <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-[13px]'>
                        Phone      
                     </p>
                     <div className='relative flex flex-col items-start w-full'>
                         <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md bg-white  pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                          placeholder='Enter the name of the event'
                          value={chooseSocials === '' ? 'Select App to connect' : chooseSocials}
                          disabled
                      />
                         {
                          dropdown
                          ?<SlArrowUp onClick={()=>setDropdown(false)} className='absolute right-4 top-3 text-sm xl:top-4' />
                          :<SlArrowDown onClick={()=>setDropdown(true)} className='absolute right-4 top-3 text-sm xl:top-4' />
                         }
                     </div>
                     {dropdown &&
                     <div className='absolute mt-[60px] z-30 flex flex-col items-start justify-center w-[78%] py-1 rounded-md bg-[#EEE8EC] cursor-pointer md:w-[30%] lg:w-[15%] xl:mt-[75px]'>
                         {socials.map((item, index) => {
                           return(
                           <p onClick={()=>handleCategory(item)} key={index} 
                           className='text-[11px] text-[#16071F] font-medium py-2 px-3 cursor-pointer w-full hover:bg-[#dddddd] xl:text-xs'>
                                {item}        
                           </p>
                           )
                          })}
                     </div>
                     }
                </div>

                {/* SOCIAL MEDIA LINKS */}
               <div className='flex flex-col items-start w-full mt-3 md:w-[49%] md:mt-6 xl:mt-10'>
                  <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                  placeholder='Enter Username/@'
                   />
                </div>
          </div>




              {/* BUTTONS */}
          <div className='flex items-center justify-start w-full mt-8 md:mt-10'>
               <div className='flex items-center justify-center w-28 h-8 rounded-md bg-[#EEE8EC] xl:h-9 xl:w-32'>
                   <SlNotebook className='text-[#571845] text-sm' />
                   <p className='text-[11px] text-[#571845] font-medium ml-2 xl:text-xs'>
                        Save as draft    
                   </p>
               </div>

               <div onClick={()=>setActive(4)}
               className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                   <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                        Proceed    
                   </p>
               </div>
          </div>

          </div>
        }


        {active !== 3 && <EventMedia setActive={setActive} active={active} setActiveForm={setActiveForm} />}

    </div>
  )
}

export default Contact
