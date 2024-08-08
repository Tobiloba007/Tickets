import { useState } from 'react'
import ExportModal from '../../components/Admin/adminEvents/ExportModal'
import EventsOverview from '../../components/Admin/adminEvents/EventsOverview'
import AdminCreateEvents1 from '../../components/Admin/adminEvents/AdminCreateEvents1';
import AdminCreateEvents2 from '../../components/Admin/adminEvents/AdminCreateEvents2';
import AdminCreateEvents3 from '../../components/Admin/adminEvents/AdminCreateEvents3';



const AdminEvents = () => {
  const [openModal, setOpenModal] = useState(false);

  const [create, setCreate] = useState(0);


  return (
    <div className='flex-col items-center justify-center w-full h-full pb-14 overflow-y-scroll [&>div]:flex-shrink-0 hide-scrollbar mt-7 px-5 lg:px-6 lg:pb-16 xl:px-8'>
       {create === 0
        ?<EventsOverview setOpenModal={setOpenModal} setCreate={setCreate} />
        :create === 1 ?
        <AdminCreateEvents1 setCreate={setCreate} />
        :create === 2 ?
        <AdminCreateEvents2 setCreate={setCreate} />
        :create === 3 &&
        <AdminCreateEvents3 setCreate={setCreate} />
       }

       {openModal && <div onClick={()=>setOpenModal(false)} className='fixed h-screen w-full bg-[#A4A4A4] left-0 top-0 opacity-45'></div>}

       <div className='flex items-center justify-center w-full h-full'>
           <div className='fixed flex items-center justify-center w-[70%] top-[30%] md:w-[37%] lg:w-[28%] xl:w-[23.5%]'>
                  {openModal && <ExportModal setOpenModal={setOpenModal} />}
           </div>
        </div>
    </div>
  )
}

export default AdminEvents
