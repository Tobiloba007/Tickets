import { Box, Image, Input, Text, Textarea } from '@mantine/core';
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import ButtonComp from '../../Button';


interface CreateBlogModalType{
  setOpenModal:(val:boolean)=>void
}

const CreateBlogModal = ({setOpenModal}:CreateBlogModalType) => {

  const handleProceed = () => {
    setOpenModal(false)
  }

  return (
    <div className='flex flex-col items-start justify-center w-full px-4 py-6 text-purple bg-white rounded-lg xl:pt-8 xl:pb-6 xl:px-5'>
           <div className='flex items-center justify-between w-full'>
          <Text className='font-medium'>Create a Blog Post</Text>     <IoCloseOutline onClick={()=>setOpenModal(false)}
               className='text-xl font-bold xl:text-2xl text-gray-600 cursor-pointer 
               hover:scale-110
               hover:rotate-[105] transition-all' />
           </div>

           <Box className='mt-5 w-full'>
           <label className='text-sm font-semibold  xl:text-sm'>
                Title
           </label>
           <Input className=' border-[0.5px] w-full rounded '/>
           </Box>


           <Box className='mt-5 w-full'>
           <label className='text-sm font-semibold  xl:text-sm'>
                Description
           </label>
           <Textarea  rows={4} className=' border-[0.5px] w-full rounded '/>
           </Box>
          

           {/* <div className='flex flex-col items-start w-full mt-3'>
                <p className='text-[11px] font-semibold text-[#262524] w-[80%] mt-1 xl:text-sm'>
                    Reason 
                </p>
                <textarea className='bg-[#FAFAFA] rounded-md px-4 py-1 p mt-2 w-full text-[10px] text-[#16071F] outline-[#EEE8EC]' 
                placeholder='Reason for suspension'
                 rows={4}
                />
           </div> */}

<Box className='w-full'>
           <ButtonComp className='gap-x-2' outline titleItems={2} title={<>
            
            <Box className='flex gap-x-3'>

            <Image src={"/img/icons/upload.svg"} className="w-6 h-6 "/>
              <Text className='font-medium'>
          Upload an image
          </Text>
            </Box>
             
            </>}/>
           </Box>

<Box className='justify-end flex w-full'>
           <ButtonComp className='hover:bg-purple' titleItems={1} title={<>
          Publish
            </>}/>
           </Box>

    </div>
  )
}

export default CreateBlogModal
