import { IoIosAdd } from 'react-icons/io'


const CreateButton = ({setOpenModal}) => {
  return (
    <div onClick={()=>setOpenModal('create')}
    className='flex items-center justify-center w-[85px] h-7 rounded-md bg-[#571845] md:w-24 md:h-8 md:rounded-md lg:w-32 lg:h-9'>
        <IoIosAdd className='text-white text-lg lg:text-xl' />
        <p className='text-[12px] text-white font-normal pl-1.5 lg:text-sm lg:pl-2 xl:text-[15px]'>
           Create
        </p>
    </div>
  )
}

export default CreateButton
