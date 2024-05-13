import React, { useState } from 'react'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IoAddOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import EventFormat from './EventFormat';




const Basic = ({setActiveForm}) => {
    const [active, setActive] = useState(1)

    const [toggleCat, setTogleCat] = useState(false)
    const [chooseCat, setChooseCat] = useState('')

    const [toggleCity, setTogleCity] = useState(false)
    const [chooseCity, setChooseCity] = useState('')

    const [switchToggle, setSwitchToggle] = useState(true);

    const category = ['example 1', 'example 2', 'example 3', 'example 4', 'example 5']

    const cities = ['Adamawa', 'Osun', 'Delta', 'Abuja', 'Lagos']

    const handleCategory = (item) => {
        setChooseCat(item)
        setTogleCat(false)
    }

    const handleCity = (item) => {
        setChooseCity(item)
        setTogleCity(false)
    }

  return (
    <div className='flex flex-col items-start justify-start w-full bg-white rounded-lg px-4 py-5 xl:px-8 xl:py-9'>
          <div className='flex flex-col items-start w-full md:flex-row md:items-center md:justify-between'>
              <div className='flex flex-col items-start w-full'>
                 <p className='text-sm text-[#571845] font-medium xl:text-lg'>
                       1. Basic Information
                 </p>
                 <p className='text-[11px] text-[#331F2D] font-medium pt-1 xl:text-sm'>
                       Provide basic information of the events            
                 </p>
              </div>

              {active !== 1 &&
              <div onClick={()=>setActive(1)}
              className='flex items-center justify-center h-6 px-4 rounded-md bg-[#EEE8EC] mt-2 md:h-7 md:px-5 xl:h-8 xl:px-6'>
                   <p className='text-[10px] text-[#571845] font-medium md:text-[11px] xl:text-xs'>
                         Edit
                   </p>
              </div>
              }
          </div>

          <div className='w-full border-[1px] border-[#C6C0C4] mt-3 xl:mt-5'></div>

          {active === 1 &&
          <div className='flex flex-col items-start justify-start w-full'>
           {/* EVENT NAME */}
          <div className='flex flex-col items-start w-full mt-3 xl:mt-5'>
              <p className='text-[11px] text-[#16071F] font-medium pt-1 xl:text-sm'>
                   Event Name         
              </p>
              <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
              placeholder='Enter the name of the event'
               />
          </div>

          <div className='flex flex-col items-center w-full md:flex-row md:justify-between'>
                   {/* CATEGORY */}
                <div className='ralative flex flex-col items-start w-full mt-4 md:w-[49%]'>
                  <div className='relative flex flex-col items-start w-full'>
                      <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md bg-white  pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                       placeholder='Enter the name of the event'
                       value={chooseCat === '' ? 'Select Category' : chooseCat}
                       disabled
                   />
                      {
                       toggleCat
                       ?<SlArrowUp onClick={()=>setTogleCat(false)} className='absolute right-4 top-3 text-sm xl:top-4' />
                       :<SlArrowDown onClick={()=>setTogleCat(true)} className='absolute right-4 top-3 text-sm xl:top-4' />
                      }
                  </div>
                  {toggleCat &&
                  <div className='absolute mt-10 z-30 flex flex-col items-start justify-center w-[78%] py-1 rounded-md bg-white cursor-pointer md:w-[30%] lg:w-[15%] xl:mt-12'>
                      {category.map((item, index) => {
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

                {/* CITY IN NIGERIA */}
                <div className='flex flex-col items-start w-full mt-4 md:w-[49%]'>
                  <div className='relative flex flex-col items-start w-full'>
                      <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md bg-white  pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                       placeholder='Enter the name of the event'
                       value={chooseCity === '' ? 'Select City in Nigeria' : chooseCity}
                       disabled
                   />
                      {
                       toggleCity
                       ?<SlArrowUp onClick={()=>setTogleCity(false)} className='absolute right-4 top-3 text-sm xl:top-4' />
                       :<SlArrowDown onClick={()=>setTogleCity(true)} className='absolute right-4 top-3 text-sm xl:top-4' />
                      }
                  </div>
                  {toggleCity &&
                  <div className='absolute mt-10 z-30 flex flex-col items-start justify-center w-[78%] py-1 rounded-md bg-white cursor-pointer md:w-[30%] lg:w-[15%] xl:mt-12'>
                      {cities.map((item, index) => {
                        return(
                        <p onClick={()=>handleCity(item)} key={index} 
                        className='text-[11px] text-[#16071F] font-medium py-2 px-3 cursor-pointer w-full hover:bg-[#dddddd] xl:text-xs'>
                             {item}        
                        </p>
                        )
                       })}
                  </div>
                   }
                </div>
          </div>


          {/* MULTI DAY EVENTS TOGGLE */}
          <div className='flex items-center justify-between w-full mt-4 md:w-[40%] md:mt-5 lg:w-[35%]'>
             <div className='flex flex-col items-start'>
                 <p className='text-xs text-[#571845] font-medium xl:text-lg'>
                      Multi Day Events
                 </p>
                 <p className='text-[9px] text-[#4F3D49] font-medium pt-1 md:text-[11px] xl:text-sm'>
                        Events that are more than one day         
                 </p>
             </div>

             <div className='flex items-center'>
                 <div onClick={()=>setSwitchToggle(!switchToggle)}
                 className={`flex items-center w-7 h-4 px-[2px] rounded-xl ${switchToggle === true ? 'justify-end bg-[#571845]' : 'justify-start bg-[#A4A4A4]'}`}>
                     <div className='h-3 w-3 rounded-full bg-white'></div>
                 </div>

                 <p className='text-xs pl-2'>
                      {
                        switchToggle ? 'On' : 'Off'
                      }
                 </p>
             </div>
          </div>


          {/* TIME AND DAY */}
          <div className='flex flex-col items-center w-full md:flex-row md:justify-between'>
               <div className='flex flex-col items-start w-full mt-2 md:w-[49%] xl:mt-4'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-sm'>
                        Select Date         
                   </p>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='dd/mm/yy'
                    />
               </div>
               
               <div className='flex flex-col items-start w-full mt-2 md:w-[49%] xl:mt-4'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-sm'>
                        Time of Day     
                   </p>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='07:00 PM'
                    />
               </div>
          </div>

          {switchToggle === true &&
            <div className='flex items-center justify-between h-6 px-2 w-[75px] rounded-md bg-[#EEE8EC] mt-3 md:h-7 lg:w-[80px] xl:w-[85px] xl:h-8'>
                <IoAddOutline className='text-[#571845] text-sm lg:text-base' />
                <p className='text-[10px] text-[#571845] font-medium md:text-[11px] xl:text-xs'>
                          Add day
                </p>
            </div>
          }



                    {/* DESCRIPTION */}
          <div className='flex flex-col items-start w-full mt-2 xl:mt-4'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-sm'>
                        Description     
                   </p>
                   <textarea className='w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 px-2 pt-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   rows="6" cols="50"
                   placeholder='Describe the event'
                    />
          </div>


                    {/* TAGS */}
          <div className='flex flex-col items-start w-full mt-2 xl:mt-4'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-sm'>
                      Tags     
                   </p>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder=''
                    />
                    <div className='flex items-center justify-start w-full mt-2'>
                         <button className='text-center h-7 px-3 rounded-md bg-[#FFC655] text-[#1A0313] text-[10px] font-medium mr-[6px] xl:text-xs'>
                              Sports
                         </button>

                         <button className='text-center h-7 px-3 rounded-md bg-[#FFC655] text-[#1A0313] text-[10px] font-medium mr-[6px] xl:text-xs'>
                              Online
                         </button>

                         <button className='text-center h-7 px-3 rounded-md bg-[#FFC655] text-[#1A0313] text-[10px] font-medium mr-[6px] xl:text-xs'>
                              Chess
                         </button>
                    </div>

                    <p className='text-[10px] text-[#837780] font-normal mt-2 xl:text-[11px]'>
                        (maximum 6 tags)    
                   </p>
          </div>


                    {/* BUTTONS */}
          <div className='flex items-center justify-start w-full mt-7'>
               <div className='flex items-center justify-center w-28 h-8 rounded-md bg-[#EEE8EC] xl:h-9 xl:w-32'>
                   <SlNotebook className='text-[#571845] text-sm' />
                   <p className='text-[11px] text-[#571845] font-medium ml-2 xl:text-xs'>
                        Save as draft    
                   </p>
               </div>

               <div onClick={()=>setActive(2)}
               className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                   <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                        Proceed    
                   </p>
               </div>
          </div>

          </div>
        }


        {active !== 1 && <EventFormat active={active} setActive={setActive} setActiveForm={setActiveForm} />}

    </div>
  )
}

export default Basic
