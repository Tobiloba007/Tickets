import { HiTrash } from 'react-icons/hi2'
import { BiSolidEditAlt } from 'react-icons/bi'


const AdminBlogCards = ({data, setOpenModal}) => {
  return (
    <div className='flex flex-col items-center justify-start bg-white p-2 rounded-md w-[48%] mb-4 md:w-[31.5%] md:mb-6 md:p-2.5 md:mr-3 lg:rounded-xl xl:w-[23.5%] xl:rounded-xl xl:mr-4'>
         <div className='relative flex w-full'>
             <img className='w-full h-36 object-cover rounded-md lg:rounded-lg lg:h-40 xl:h-48 xl:rounded-xl'
             src={data.img} alt='blog_preview_image' />
             <button className={`absolute top-2.5 right-2.5 text-center px-3 font-medium text-[10px] h-[25px] rounded-[35px] md:text-[11px] lg:text-xs lg:h-7 lg:px-3.5 
                                xl:top-3.5 xl:right-3.5 xl:text[13px] xl:px-4 ${data.status === 'Pending' ? 'text-[#FFC655] bg-[#FFF9EE]' : 'text-[#4BB543] bg-[#EDF8EC]'}`}>
                 {data.status}
             </button>
         </div>

         <div className='flex flex-col items-start w-full py-2.5 xl:pt-3.5'>
             <p className='text-xs font-medium text-[#766871] w-full md:text-sm xl:text-[15px]'>
                 {data.desc}
             </p>
             <div className='flex items-center justify-start w-full mt-2.5'>
                 <img className='w-7 h-7 rounded-full object-cover md:w-8 md:h-8 xl:w-9 xl:h-9' 
                 src={data.author} alt='author' />
                 <p className='text-[10px] font-medium text-[#331F2D] pl-2 md:text-[12px] md:pl-2.5 xl:text-[13px] xl:pl-3'>
                     {data.name} 
                 </p>
             </div>

             <div className='flex items-center justify-start w-full mt-3.5 xl:mt-4'>
                 <div onClick={()=>setOpenModal('delete')}
                 className='flex items-center justify-center h-6 w-6 rounded-full bg-[#FAFAFA] p-1 md:h-7 md:w-[26px] md:p-0 xl:h-8 xl:w-8 '>
                      <HiTrash className='text-[#571845] text-base xl:text-lg' />
                 </div>
                 <div className='flex items-center justify-center h-6 w-6 rounded-full bg-[#FAFAFA] ml-3.5 p-1 md:h-7 md:w-[26px] md:p-0 md:ml-4 xl:h-8 xl:w-8'>
                      <BiSolidEditAlt className='text-[#571845] text-lg xl:text-xl' />
                 </div>
             </div>
         </div>

    </div>
  )
}

export default AdminBlogCards
