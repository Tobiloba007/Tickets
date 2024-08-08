import CreateButton from '../../components/Admin/adminBlogs/CreateButton'
import AdminBlogCards from '../../components/Admin/adminBlogs/AdminBlogCards'
import { blogData } from '../../components/Admin/adminBlogs/blogData'
import { useState } from 'react'
import CreateBlogModal from '../../components/Admin/adminBlogs/CreateBlogModal'
import DeleteBlogs from '../../components/Admin/adminBlogs/DeleteBlogs'


const AdminBlogs = () => {
  const [openModal, setOpenModal] = useState();

  return (
    <div className='flex flex-col items-center justify-start w-full h-full bg-[#FAFAFA] pt-14 pb-5 px-5 md:pb-7 md:pt-16 lg:pb-9 lg:px-6 xl:px-8'>

        <div className='flex items-center justify-end w-full cursor-pointer'>
            <CreateButton setOpenModal={setOpenModal} />
        </div>


        <div className='flex items-center justify-between w-full flex-wrap mt-9 md:justify-start lg:mt-11 xl:mt-12'>
            {blogData.map((item) => (
            <AdminBlogCards data={item} setOpenModal={setOpenModal}  />
            ))}
        </div>

        {openModal && <div onClick={()=>setOpenModal(false)} className='fixed h-screen w-full bg-[#A4A4A4] left-0 top-0 opacity-45'></div>}

        <div className='flex items-center justify-center w-full h-full'>
           <div className='fixed flex items-center justify-center w-[85%] top-[30%] md:w-[40%] lg:w-[30%] xl:w-[25%]'>
                  {
                     openModal === 'create' ? <CreateBlogModal setOpenModal={setOpenModal} />
                    :openModal === 'delete' && <DeleteBlogs setOpenModal={setOpenModal} />
                  }
           </div>
        </div>

    </div>
  )
}

export default AdminBlogs
