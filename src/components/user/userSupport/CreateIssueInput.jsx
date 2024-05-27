import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import choose from '../../../assets/icons/choose.svg'
import { VscAdd } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { createSupportTicket } from '../../../features/UserActions';



export const CreateIssueInput = ({setCreateIssue}) => {
    const [dropdown, setDropdown] = useState(false)
    const [selected, setSelected] = useState('Ticket')

    const [subject, setSubject] = useState('')
    const [subjectError, setSubjectError] = useState('')

    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const lists = ['Ticket', 'Payment', 'Withdrawal', 'Events', 'Others']

    const handleDropdown = (item) => {
        setSelected(item)
        setDropdown(false)
    }

    const isButtonDisabled = subjectError === true || messageError === true || subject === '' || message === ''

    const values = {'support_title': subject, 'support_message': message}

    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user)

    const details = {name: `${user.last_name} ${user.first_name}`, 'phone': user.phone, 'email': user.email}

    const customerDetails = {'customer_details': details}

    const combinedValues = {...customerDetails, ...values}


    const handleSubmit = () => {
        dispatch(createSupportTicket(combinedValues, setError, setLoading, setSubject, setMessage))
        // setCreateIssue(1)
      }




  return (
    <div className='flex flex-col items-center justify-start w-full h-full mb-6 md:mb-10'>
         <div className='flex items-center justify-between w-full'>
             <div onClick={()=>setCreateIssue(1)}
             className='flex items-center justify-start cursor-pointer'>
                 <BsArrowLeft className='text-[#571845] text-lg' />
                 <p className='text-sm text-[#571845] font-medium ml-2'>Back</p>
             </div>
             <button onClick={()=>setCreateIssue(1)}
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
                 <input className={`w-full h-9 rounded-md border-[1px] border-[#E1DEE0] outline-[#E1DEE0] mt-1 pl-4 text-xs text-[#16071F] 
                                   md:h-10 xl:h-11 xl:text-sm ${subjectError && 'border-red-500'}`}
                 placeholder='Enter Subject'
                 value={subject}
                 onChange={(e)=>setSubject(e.target.value)}
                 required
                 type="text" 
                 onBlur={()=>setSubjectError(subject === '')}
                 />
                 {subjectError && !subject && <p className='text-red-500 text-xs pt-1 xl:text-sm'>Subject is Required</p> }
             </div>

             <div className='w-full mt-3'>
                 <textarea
                   className={`rounded-md border-[1px] border-[#E1DEE0] outline-[#E1DEE0] w-full px-4 py-3 text-xs
                    md:bg-[#FEFCFD] ${messageError && 'border-red-500'}`}
                   placeholder="Write a message"
                   rows={8}
                   value={message}
                   onChange={(e)=>setMessage(e.target.value)}
                   required
                   type="text" 
                   onBlur={()=>setMessageError(message === '')}
                 />
                 {messageError && !message && <p className='text-red-500 text-xs pt-1 xl:text-sm'>Message is Required</p> }
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

                 <div className='flex items-center w-full mt-5'>
                     <button onClick={handleSubmit}
                     disabled={isButtonDisabled}
                             className={`hidden md:flex items-center justify-center text-white cursor-pointer bg-[#571845] rounded-md h-8 px-5 
                             text-xs xl:text-sm xl:h-9 ${isButtonDisabled && 'bg-[#9f969c]'}`}>
                             { loading
                                ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                                   <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                                 </div>
                                : 'Submit Issue'
                               }
                     </button>
                     { error &&
                         <p className='text-xs text-center font-medium text-[#571845] ml-4 xl:text-sm'>
                              {error}
                         </p>
                     }
                 </div>
             </div>

         </div>

    </div>
  )
}

