import React from 'react'
import { IoIosAdd } from 'react-icons/io'

const AddMemberButton = ({setOpenModal}) => {
  return (
    <div onClick={()=>setOpenModal('Member')}
    className='flex items-center justify-center px-3 h-7 rounded-md bg-[#571845] md:h-8 md:rounded-md lg:h-9'>
        <IoIosAdd className='text-white text-lg lg:text-xl' />
        <p className='text-[12px] text-white font-normal pl-1.5 lg:text-sm lg:pl-2 xl:text-[15px]'>
             Add member 
        </p>
    </div>
  )
}

export default AddMemberButton
