import { IoCamera } from 'react-icons/io5'
import avatar from '../../assets/avatar.jpg'
import { useState } from 'react';
import ChangePassword from '../../components/Admin/adminProfile/ChangePassword';



const AdminProfile = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-[#FAFAFA] pt-10 pb-5 px-5 md:items-end md:px-0 md:py-0'>
             <div className='flex flex-col items-start w-full h-screen rounded-lg px-4 pt-8 bg-white md:w-[45%] md:rounded-none md:px-6 md:pt-20 lg:px-7 xl:px-9 xl:w-[35%]'>
                    {/* PROFILE PICTURE */}
                   <div className='flex items-center justify-center w-full'>
                       <div className='relative flex items-center justify-center'>
                           <img className='h-16 w-16 rounded-full object-cover xl:w-20 xl:h-20' src={avatar} alt='profile' />
                           <div className='absolute h-16 w-16 rounded-full bg-[#A4A4A4] opacity-40 xl:w-20 xl:h-20'></div>
                           <div className='absolute flex items-center justify-center h-16 w-16 xl:w-20 xl:h-20'>
                               <IoCamera className='text-white text-lg xl:text-xl' />
                           </div>
                       </div>
                   </div>

                   <div className='flex flex-col items-start w-full mt-8 md:mt-9 xl:mt-11'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Name    
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Provide name'
                     />
                   </div>

                   <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Email Address    
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='Example@email.com'
                     />
                   </div>

                   <div className='flex flex-col items-start w-full mt-3.5 md:mt-4 xl:mt-5'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Phone number     
                     </p>
                     <input className='mt-1 border-[1px] border-[#dddddd] rounded-md h-9 px-3.5 text-[10px] w-full outline-[#EEE8EC] xl:h-11 xl:mt-2 xl:text-[13px] xl:px-5' 
                     placeholder='070 0000 0000'
                     />
                   </div>

                   <div className='flex flex-col items-start w-full mt-5 md:mt-6 xl:mt-7'>
                     <p className='text-[11px] font-medium text-[#16071F] md:text-xs xl:text-sm'>
                         Security      
                     </p>
                     <button onClick={()=>setOpenModal(true)}
                     className='text-center mt-2 text-xs font-semibold text-[#571845] bg-[#EEE8EC] rounded-md h-8 px-4 md:px-5 md:mt-3 xl:h-9 xl:text-sm xl:mt-4'>
                         Change password  
                     </button>
                   </div>


                   <div className='flex justify-end w-full mt-12 lg:mt-9'>
                       <button className='text-center mt-2 text-xs font-semibold text-[#ffffff] bg-[#571845] rounded-md h-8 px-5 md:px-6 md:mt-3 xl:h-9 xl:text-sm xl:mt-4'>
                             Save Changes   
                       </button>
                   </div>
             </div>




        {openModal && <div onClick={()=>setOpenModal(false)} className='fixed h-screen w-full bg-[#A4A4A4] left-0 top-0 opacity-45'></div>}

        {openModal &&
        <div className='flex items-center justify-center w-full h-full'>
           <div className='fixed flex items-center justify-center w-[85%] top-[25%] md:w-[45%] lg:w-[35%] xl:w-[30%]'>
                  { openModal && <ChangePassword setOpenModal={setOpenModal} /> }
           </div>
        </div>
        }

    </div>
  )
}

export default AdminProfile
