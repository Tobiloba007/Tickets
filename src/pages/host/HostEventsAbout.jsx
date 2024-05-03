import React, { useState } from 'react'
import image from '../../assets/image10.jpg'
import { GrLocation } from "react-icons/gr";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { TfiTime } from "react-icons/tfi";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import x from '../../assets/icons/x.svg'




const HostEventsAbout = () => {
    const [desc, setDesc] = useState(true)
    const [contact, setContact] = useState(true)
    const [staff, setStaff] = useState(true)

  return (
    <div className='flex flex-col items-center justify-start w-full px-5 mt-4 pb-12 lg:px-6 xl:px-8 xl:mt-7'>
    {/* IMAGE */}
    <div className='flex items-center justify-center w-full'>
         <img className='h-[212px] w-full rounded-md md:h-[325px] xl:h-[475px] lg:rounded-xl' src={image} alt='event_image' />
    </div>

    <div className='flex items-start justify-between w-full flex-wrap'>
         <div className='flex flex-col items-start justify-start w-full md:w-[50%] lg:w-[60%]'>
              
              {/* DETAILS */}
              <div className='flex flex-col items-start justify-start w-full'>
                    <p className='text-sm font-bold text-[#571845] mt-6 lg:hidden'>
                          Flytime Fest, Asake 
                    </p>
                    <div className='flex items-center justify-start w-full mt-3 lg:mt-6 xl:mt-7'>
                        <GrLocation className='text-lg' />
                        <p className='text-xs font-medium text-[#331F2D] ml-3 w-[70%] xl:text-sm xl:w-[90%]'>
                              Eko Convention Center, Eko Hotel & Suites. 1415 Adetokunbo Ademola Street, Victoria Island, Lagos.
                        </p>
                    </div>

                    <div className='flex items-center justify-start w-full mt-3'>
                        <HiOutlineCalendarDays className='text-lg' />
                        <p className='text-xs font-medium text-[#331F2D] ml-3 w-[70%] xl:text-sm xl:w-[90%]'>
                              Saturday, December 23 2023 - Sunday, December 24 2023
                        </p>
                    </div>

                    <div className='flex items-center justify-start w-full mt-3'>
                        <TfiTime  className='text-base' />
                        <p className='text-xs font-medium text-[#331F2D] ml-3 w-[70%] xl:text-sm xl:w-[90%]'>
                              6:00 PM - 1:00 AM WAT
                        </p>
                    </div>
              </div>

              {/* DESCRIPTION */}
              <div className='flex flex-col items-start justify-start w-full mt-6'>
                   <div className='flex items-center justify-between w-full'>
                        <p className='text-sm font-bold text-[#571845]'>
                              Description
                        </p>
                        {desc
                        ?<SlArrowUp onClick={()=>setDesc(false)} className='text-sm lg:hidden' />
                        :<SlArrowDown onClick={()=>setDesc(true)} className='text-sm lg:hidden' />
                        }
                   </div>

                   {desc &&
                   <p className='text-xs font-medium text-[#331F2D] w-[90%] mt-2 xl:text-sm'>
                        Get ready for back-to-back hits as Afrobeats' powerhouse, Asake, returns to the Flytime stage.Guests must be 13 years old and older. 
                        Doors close at 10PM
                   </p>
                   }
              </div>


              {/* CONTACT */}
              <div className='flex flex-col items-start justify-start w-full mt-6'>
                   <div className='flex items-center justify-between w-full'>
                        <p className='text-sm font-bold text-[#571845]'>
                              Contact
                        </p>
                        {contact
                        ?<SlArrowUp onClick={()=>setContact(false)} className='text-sm lg:hidden' />
                        :<SlArrowDown onClick={()=>setContact(true)} className='text-sm lg:hidden' />
                        }
                   </div>

                   {contact &&
                    <div className=' flex flex-col items-center justify-start w-full mt-3'>
                         <div className='flex items-center justify-between w-full'>
                              <div className='flex flex-col items-start w-[48.5%]'>
                                  <p className='text-xs text-[#16071F font-medium'>
                                       First name
                                  </p>
                                  <input className='h-10 border-[1px] border-[#CFCECE] rounded-lg mt-[6px] text-xs text-[#8F8A88] pl-4 w-full' 
                                  value='John'
                                  />
                              </div>

                              <div className='flex flex-col items-start w-[48.5%]'>
                                  <p className='text-xs text-[#16071F font-medium'>
                                       Last name
                                  </p>
                                  <input className='h-10 border-[1px] border-[#CFCECE] rounded-lg mt-[6px] text-xs text-[#8F8A88] pl-4 w-full' 
                                  value='Doe'
                                  />
                              </div>
                         </div>

                         <div className='flex items-center justify-between w-full mt-5'>
                              <div className='flex flex-col items-start w-[48.5%]'>
                                  <p className='text-xs text-[#16071F font-medium'>
                                       Email
                                  </p>
                                  <input className='h-10 border-[1px] border-[#CFCECE] rounded-lg mt-[6px] text-xs text-[#8F8A88] pl-4 w-full' 
                                  value='mail@johndoe.com'
                                  />
                              </div>

                              <div className='flex flex-col items-start w-[48.5%]'>
                                  <p className='text-xs text-[#16071F font-medium'>
                                       Phone
                                  </p>
                                  <input className='h-10 border-[1px] border-[#CFCECE] rounded-lg mt-[6px] text-xs text-[#8F8A88] pl-4 w-full' 
                                  value='0901 234 5678'
                                  />
                              </div>
                         </div>
                    </div>
                   }
              </div>



              {/* STAFF */}
              <div className='flex flex-col items-start justify-start w-full mt-6'>
                   <div className='flex items-center justify-between w-full'>
                        <p className='text-sm font-bold text-[#571845]'>
                              Staff 1
                        </p>
                        {staff
                        ?<SlArrowUp onClick={()=>setStaff(false)} className='text-sm lg:hidden' />
                        :<SlArrowDown onClick={()=>setStaff(true)} className='text-sm lg:hidden' />
                        }
                   </div>

                   {staff &&
                    <div className=' flex flex-col items-center justify-start w-full mt-3'>
                         <div className='flex flex-col items-start justify-between w-full'>
                              <div className='flex flex-col items-start w-full'>
                                  <p className='text-xs text-[#16071F font-medium'>
                                       First name
                                  </p>
                                  <input className='h-10 border-[1px] border-[#CFCECE] rounded-lg mt-[6px] text-xs text-[#8F8A88] pl-4 w-full' 
                                  value='John'
                                  />
                              </div>

                              <div className='flex flex-col items-start w-full mt-3'>
                                  <p className='text-xs text-[#16071F font-medium'>
                                       Last name
                                  </p>
                                  <input className='h-10 border-[1px] border-[#CFCECE] rounded-lg mt-[6px] text-xs text-[#8F8A88] pl-4 w-full' 
                                  value='Doe'
                                  />
                              </div>
                              <div className='flex flex-col items-start w-full mt-3'>
                                  <p className='text-xs text-[#16071F font-medium'>
                                       Email
                                  </p>
                                  <input className='h-10 border-[1px] border-[#CFCECE] rounded-lg mt-[6px] text-xs text-[#8F8A88] pl-4 w-full' 
                                  value='mail@johndoe.com'
                                  />
                              </div>

                              <div className='flex flex-col items-start w-full mt-3'>
                                  <p className='text-xs text-[#16071F font-medium'>
                                       Phone
                                  </p>
                                  <input className='h-10 border-[1px] border-[#CFCECE] rounded-lg mt-[6px] text-xs text-[#8F8A88] pl-4 w-full' 
                                  value='0901 234 5678'
                                  />
                              </div>
                         </div>
                    </div>
                   }
              </div>

         </div>







         <div className='flex flex-col items-start justify-start w-full md:w-[30%]'>
                {/* TICKET */}
              <div className='flex flex-col items-start justify-start w-full mt-6'>
                   <p className='text-sm font-bold text-[#571845]'>
                       Ticket 
                   </p>
                   <p className='text-xs font-medium text-[#331F2D] mt-3'>
                       1. Regular 
                   </p>
                   <p className='text-xs font-medium text-[#331F2D] mt-2'>
                       1. VIP 
                   </p>
              </div>

                {/* CONTACT */}
              <div className='flex flex-col items-start justify-start w-full mt-6'>
                 <p className='text-sm font-bold text-[#571845]'>
                      Share event 
                 </p>

                 <div className='flex items-center justify-start w-full mt-3'>
                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#EEE8EC] mr-3'>
                           <img className='w-3'
                           src={x} alt='x' />
                      </div>

                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#EEE8EC] mr-3'>
                           <img className='w-4'
                           src={facebook} alt='x' />
                      </div>

                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#EEE8EC] mr-3'>
                           <img className='w-4'
                           src={instagram} alt='x' />
                      </div>
                 </div>
     
                 <div className='flex items-center justify-center h-8 w-28 rounded-md bg-[#EEE8EC] mt-5'>
                    <p className="text-xs font-semibold text-[#571845]">
                         Contact us 
                    </p>
                 </div>
               </div>
         </div>

    </div>
    </div>
  )
}

export default HostEventsAbout
