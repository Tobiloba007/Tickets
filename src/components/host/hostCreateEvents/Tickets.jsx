import React, { useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";




const Tickets = ({setActiveForm}) => {
    const [select, setSelect] = useState('Paid')
    const [switchToggle, setSwitchToggle] = useState(true);
    const [inputs, setInputs] = useState([1]);



    const handleSelect = (item) => {
        setSelect(item)
    }

    const handleAddTicket = () => {
        setInputs([...inputs, inputs.length + 1]);
      };

      const handleSwitch = () => {
        setSwitchToggle(!switchToggle)
      }

  return (
    <div className='flex flex-col items-start justify-start w-full bg-white rounded-lg px-4 py-5 xl:px-8 xl:py-9'>
         <div className='flex items-center justify-between w-full'>
               <div className='flex flex-col items-start w-full'>
                  <p className='text-sm text-[#571845] font-medium xl:text-lg'>
                       Ticket
                  </p>
                  <p className='text-[11px] text-[#331F2D] font-medium pt-1 xl:text-sm'>
                       Create Ticket for the event            
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

                     <div onClick={()=>setActiveForm(3)}
                     className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                         <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                              Proceed    
                         </p>
                     </div>
               </div>
         </div>

         <div className='w-full border-[1px] border-[#C6C0C4] mt-3 xl:mt-5'></div>

         <div className='flex flex-col items-start justify-start w-full mt-4 md:w-[40%] md:mt-5 lg:w-[35%]'>
             {/* SELECT FORMAT */}
             <div className='flex flex-col items-start'>
                 <p className='text-xs text-[#16071F] font-medium xl:text-lg'>
                       Type of Ticket
                 </p>
             </div>

             <div className='flex items-center justify-start w-full mt-2'>
                 <div onClick={()=>handleSelect('Free')} className='flex items-center justify-start'>
                      <div className={`flex items-center justify-center h-[13px] w-[13px] rounded-full border-[1.5px] border-[#571845]`}>
                          <div className={`h-[8px] w-[8px] rounded-full ${select === 'Free' ? 'bg-[#571845]' : 'bg-white'}`}></div>
                      </div>
                      <p className={`text-[10px] text-[#1A0313] font-medium pl-2 xl:text-xs`}>
                             Free
                      </p>
                 </div>

                 <div onClick={()=>handleSelect('Paid')}
                 className='flex items-center justify-start ml-6'>
                      <div className={`flex items-center justify-center h-[13px] w-[13px] rounded-full border-[1.5px] border-[#571845]`}>
                          <div className={`h-[8px] w-[8px] rounded-full ${select === 'Paid' ? 'bg-[#571845]' : 'bg-white'}`}></div>
                      </div>
                      <p className={`text-[10px] text-[#1A0313] font-medium pl-2 xl:text-xs`}>
                            Paid
                      </p>
                 </div>
             </div>

          </div>


          {/* MULTI DAY EVENTS TOGGLE */}
          <div className='flex items-center justify-between w-full mt-5 md:w-[40%] md:mt-7 lg:w-[35%]'>
             <div className='flex flex-col items-start'>
                 <p className='text-xs text-[#16071F] font-medium xl:text-lg'>
                      Classes of Ticket
                 </p>
                 <p className='text-[10px] text-[#4F3D49] font-medium pt-1 md:text-[11px] xl:text-sm'>
                      Events that have more than one ticket
                 </p>
             </div>

             <div className='flex items-center'>
                 <div onClick={handleSwitch}
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


          {inputs.map((item, index) => (
          <div key={index} className='flex item-center justify-between w-full mt-4'>
                <input className='h-9 w-[48.5%] border-[1px] border-[#dddddd] rounded-md bg-white  pl-4 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                placeholder='Regular'
                />

                <div className='relative w-[48.5%]'>
                   <input className='h-9 w-full border-[1px] border-[#dddddd] rounded-md bg-white  pl-10 pr-2 text-[11px] outline-[#EEE8EC] xl:h-11 xl:text-[13px]'
                   placeholder='1000'
                   />
                   <TbCurrencyNaira className='absolute top-[10px] left-4 xl:top-[14px]' />
                </div>
          </div>
         ))}

          {switchToggle &&
          <div onClick={handleAddTicket}
          className='flex items-center justify-center h-6 px-2 rounded-md bg-[#EEE8EC] mt-3 md:mt-4 lg:h-7 lg:px-3'>
              <IoAdd className='text-[#571845] text-sm' />
              <p className='text-[#571845] text-[9px] ml-[6px] md:text-[10px] xl:text-[11px]'>
                   Add Ticket
              </p>
          </div>
          }


          {/* BUTTONS */}
          <div className='flex items-center justify-start w-full mt-12 md:hidden'>
              <div className='flex items-center justify-center w-28 h-8 rounded-md bg-[#EEE8EC] xl:h-9 xl:w-32'>
                  <SlNotebook className='text-[#571845] text-sm' />
                  <p className='text-[11px] text-[#571845] font-medium ml-2 xl:text-xs'>
                       Save as draft    
                  </p>
              </div>

              <div onClick={()=>setActiveForm(3)}
              className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                  <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                       Proceed    
                  </p>
              </div>
          </div>

    </div>
  )
}

export default Tickets
