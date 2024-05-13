import React, { useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import Contact from './Contact';


const EventFormat = ({setActive, active, setActiveForm}) => {
    const [select, setSelect] = useState('Physical')

    const handleSelect = (item) => {
        setSelect(item)
    }


  return (
    <div className='flex flex-col items-start justify-start w-full bg-white rounded-lg py-5 xl:py-9'>
          <div className='flex flex-col items-start w-full md:flex-row md:items-center md:justify-between'>
              <div className='flex flex-col items-start w-full'>
                 <p className='text-sm text-[#571845] font-medium xl:text-lg'>
                       2. Event Format
                 </p>
                 <p className='text-[11px] text-[#331F2D] font-medium pt-1 xl:text-sm'>
                       This is a filler for the text going here            
                 </p>
              </div>

              {active !== 2 &&
              <div onClick={()=>setActive(2)}
              className='flex items-center justify-center h-6 px-4 rounded-md bg-[#EEE8EC] mt-2 md:h-7 md:px-5 xl:h-8 xl:px-6'>
                   <p className='text-[10px] text-[#571845] font-medium md:text-[11px] xl:text-xs'>
                         Edit
                   </p>
              </div>
              }
          </div>

          <div className='w-full border-[1px] border-[#C6C0C4] mt-3 xl:mt-5'></div>

          {active === 2 &&
          <div className='flex flex-col items-start justify-start w-full'>

          
          <div className='flex flex-col items-start justify-start w-full mt-4 md:w-[40%] md:mt-5 lg:w-[35%]'>
             {/* SELECT FORMAT */}
             <div className='flex flex-col items-start'>
                 <p className='text-xs text-[#571845] font-medium xl:text-lg'>
                     Select the format
                 </p>
             </div>

             <div className='flex items-center justify-start w-full mt-2'>
                 <div onClick={()=>handleSelect('Physical')} className='flex items-center justify-start'>
                      <div className={`flex items-center justify-center h-[13px] w-[13px] rounded-full border-[1.5px] border-[#571845]`}>
                          <div className={`h-[8px] w-[8px] rounded-full ${select === 'Physical' ? 'bg-[#571845]' : 'bg-white'}`}></div>
                      </div>
                      <p className={`text-[10px] text-[#1A0313] font-medium pl-2 xl:text-xs`}>
                            Physical
                      </p>
                 </div>

                 <div onClick={()=>handleSelect('Virtual')}
                 className='flex items-center justify-start ml-6'>
                      <div className={`flex items-center justify-center h-[13px] w-[13px] rounded-full border-[1.5px] border-[#571845]`}>
                          <div className={`h-[8px] w-[8px] rounded-full ${select === 'Virtual' ? 'bg-[#571845]' : 'bg-white'}`}></div>
                      </div>
                      <p className={`text-[10px] text-[#1A0313] font-medium pl-2 xl:text-xs`}>
                            Virtual
                      </p>
                 </div>
             </div>

          </div>


          <div className='flex flex-col items-center w-full'>
               {/* NAME OF VENUE */}
               <div className='flex flex-col items-start w-full mt-3 xl:mt-4'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-[13px]'>
                        Name of Venue         
                   </p>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='Enter the name of the event'
                    />
               </div>

               {/* NAME OF VENUE */}
               <div className='flex flex-col items-start w-full mt-2 xl:mt-5'>
                   <p className='text-[10px] text-[#16071F] font-medium pt-1 xl:text-[13px]'>
                        Location of Venue     
                   </p>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md mt-1 pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='Enter the location of the event'
                    />
               </div>
          </div>


              {/* BUTTONS */}
          <div className='flex items-center justify-start w-full mt-20 xl:mt-28'>
               <div className='flex items-center justify-center w-28 h-8 rounded-md bg-[#EEE8EC] xl:h-9 xl:w-32'>
                   <SlNotebook className='text-[#571845] text-sm' />
                   <p className='text-[11px] text-[#571845] font-medium ml-2 xl:text-xs'>
                        Save as draft    
                   </p>
               </div>

               <div onClick={()=>setActive(3)}
               className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                   <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                        Proceed    
                   </p>
               </div>
          </div>

          </div>
        }


        {active !== 2 && <Contact setActive={setActive} active={active} setActiveForm={setActiveForm} />}


    </div>
  )
}

export default EventFormat
