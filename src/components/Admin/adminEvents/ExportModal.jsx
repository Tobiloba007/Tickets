import React, { useState } from 'react'


const ExportModal = ({setOpenModal}) => {
    const [option, setOption] = useState(1)

    const expOption = [
        {
            id: 1,
            title: 'CSV',
            desc: 'Works with Google Sheets and others tools',
        },
        {
            id: 2,
            title: 'PDF File'
        },
    ]


    const handleOption = (itemId) => {
        setOption(itemId)
    }

  return (
    <div className='flex flex-col items-start justify-center w-full px-4 py-6 bg-white rounded-lg xl:pt-8 xl:pb-6 xl:px-5'>

           {expOption.map((item) => (
           <div key={item.id} onClick={()=>handleOption(item.id)}
                className='flex items-center justify-start w-full mb-4 cursor-pointer'>
               <div className={`flex items-center justify-center border-[2px] rounded-full ${option === item.id ? 'border-[#571845]' : 'border-[#C6C0C4]'}`}>
                    <div className={`h-3 w-3 rounded-full border-[2px] border-[#ffffff] ${option === item.id ? 'bg-[#571845]' : 'bg-[#ffffff]'}`}></div>
               </div>

               <div className='flex flex-col items-start justify-start pl-3'>
                    <p className='text-[12px] font-medium text-[#111011] xl:text-sm'>
                         {item.title} 
                    </p>
                    <p className='text-[10px] font-normal text-[#837780] xl:text-sm'>
                         {item.desc}
                    </p>
               </div>
           </div>
           ))}
           
           <div className='flex items-center justify-between w-full'>
                <div onClick={()=>setOpenModal(false)}
                className='flex items-center justify-center h-8 w-[47%] bg-[#571845] rounded-md mt-1.5 cursor-pointer xl:h-10'>
                    <p className='text-[11px] font-normal text-[#ffffff] xl:text-sm'>
                         Download 
                    </p>
                </div>

                <div onClick={()=>setOpenModal(false)}
                className='flex items-center justify-center h-8 w-[47%] bg-[#EEE8EC] rounded-md mt-1.5 cursor-pointer xl:h-10'>
                    <p className='text-[11px] font-normal text-[#571845] xl:text-sm'>
                         Cancel 
                    </p>
                </div>
           </div>

    </div>
  )
}

export default ExportModal
