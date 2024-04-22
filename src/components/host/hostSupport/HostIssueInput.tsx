import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import choose from '../../../assets/icons/choose.svg'
import { VscAdd } from "react-icons/vsc";


interface componentProps {
    setCreateIssue: React.Dispatch<React.SetStateAction<number>>;
}

export const HostIssueInput: React.FC<componentProps> = (props) => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>('Ticket')

    const lists = ['Ticket', 'Payment', 'Withdrawal', 'Events', 'Others']

    const handleDropdown = (item: string) => {
        setSelected(item)
        setDropdown(false)
    }

  return (
    <div className='flex flex-col items-center justify-start w-full h-full mb-6 md:mb-10'>
         <div className='flex items-center justify-between w-full'>
             <div onClick={()=>props.setCreateIssue(1)}
             className='flex items-center justify-start cursor-pointer'>
                 <BsArrowLeft className='text-[#571845] text-lg' />
                 <p className='text-sm text-[#571845] font-medium ml-2'>Back</p>
             </div>
             <button onClick={()=>props.setCreateIssue(1)}
             className='text-white bg-[#571845] rounded-md h-8 px-4 text-xs md:hidden'>
                  Submit Issue
             </button>
         </div>


         <div className='flex flex-col items-start justify-start w-full mt-7 py-5 md:bg-white md:rounded-xl md:py-6 md:px-6 xl:px-8 xl:py-7'>
             <div className='flex flex-col items-start justify-start w-full'>
                <p className='text-[13px] font-medium text-[#16071F] xl:text-sm'>
                    Dispute type
                </p>
                <div onClick={()=>setDropdown(!dropdown)}
                className='flex items-center justify-center h-8 border-[1px] border-[#E1DEE0] w-28 rounded-md mt-1 md:h-9 xl:h-10 xl:w-32'>
                    <p className='text-xs font-medium text-[#16071F]'>
                        {selected}
                    </p>
                    {
                      dropdown
                      ?<SlArrowUp className='text-xs ml-4' />
                      :<SlArrowDown className='text-xs ml-4' />
                    }
                </div>
                {dropdown &&
                <div className='px-3 py-1 z-30 border-[1px] border-[#dddddd] rounded-md w-28 mt-1'>
                    {lists.map((item) => {
                        return(
                    <p key={item} onClick={()=>handleDropdown(item)}
                    className='text-xs py-2 cursor-pointer text-[#16071F]'>
                        {item}
                    </p>
                    )
                    })}
                </div>
                }
             </div>

             <div className='flex flex-col items-start justify-start w-full mt-4 md:mt-5'>
                 <p className='text-[13px] font-medium text-[#16071F] xl:text-sm'>
                     Subject
                 </p>
                 <input className='w-full h-9 rounded-md border-[1px] border-[#E1DEE0] outline-[#E1DEE0] mt-1 pl-4 text-xs text-[#16071F] 
                                   md:h-10 xl:h-11 xl:text-sm'
                 placeholder='Enter Subject'
                 type="text" />
             </div>

             <div className='w-full mt-3'>
                 <textarea
                   className="rounded-md border-[1px] border-[#E1DEE0] outline-[#E1DEE0] w-full px-4 py-3 text-xs md:bg-[#FEFCFD]"
                   placeholder="Write a message"
                   rows={8}
                 />
             </div>

             <div className='flex flex-col items-start justify-start w-full mt-3'>
                 <p className='text-[13px] font-medium text-[#16071F] xl:text-sm'>
                     Attachments
                 </p>
                 <div className='flex items-center justify-start w-full'>
                    <div className='flex items-center justify-center h-8 border-[1px] border-[#E1DEE0] w-[120px] cursor-pointer rounded-md mt-2 md:h-9 
                                    xl:h-10 xl:w-32'>
                         <img className='w-4' src={choose} alt="choose" />
                         <p className='text-xs font-medium text-[#571845] ml-2'>
                             Choose a file
                         </p>
                    </div>

                    <div className='flex items-center justify-center h-8 mt-2 ml-6 cursor-pointer md:h-9 xl:h-10'>
                         <VscAdd className='text-xs' />
                         <p className='text-xs font-medium text-[#571845] ml-2'>
                             Add more
                         </p>
                    </div>
                 </div>
                 <button onClick={()=>props.setCreateIssue(1)}
                         className='hidden md:flex items-center justify-center mt-5 text-white cursor-pointer bg-[#571845] rounded-md h-8 px-5 text-xs xl:text-sm xl:h-9'>
                       Submit Issue
                 </button>
             </div>

         </div>

    </div>
  )
}

