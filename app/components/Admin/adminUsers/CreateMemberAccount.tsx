import { Box, Image, Input, Text, Textarea } from '@mantine/core';
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import ButtonComp from '../../Button';


interface CreateBlogModalType{
  setOpenModal:(val:boolean)=>void
}

const CreateMemberAccount = ({setOpenModal}:CreateBlogModalType) => {

  const handleProceed = () => {
    setOpenModal(false)
  }

  return (
    <div className='flex flex-col items-start justify-center w-full px-4 py-6 text-purple bg-white rounded-lg xl:pt-8 xl:pb-6 xl:px-5'>
           <div className='flex items-center justify-end w-full'>
             <IoCloseOutline onClick={()=>setOpenModal(false)}
               className='text-xl font-bold xl:text-2xl text-gray-600 cursor-pointer 
               hover:scale-110
               hover:rotate-[105] transition-all' />
           </div>
<header>  <Text className='font-semibold text-[#262524] text-2xl'>Add Member</Text></header>
<Text className='font-medium text-[#16071F]'>Provide details to create new member </Text>
           <Box className='mt-5 w-full font-outfit'>
           <label className='text-sm font-semibold  xl:text-sm text-[#16071F]'>
                Name
           </label>
           <Input className=' border-[0.5px] w-full rounded text-[#16071F] font-outfit '  placeholder='provide name'/>
           </Box>


           <Box className='mt-5 w-full'>
           <label className='text-sm font-semibold  xl:text-sm text-[#16071F]'>
                Email
           </label>
           <Input className=' border-[0.5px] w-full rounded text-[#16071F] ' placeholder='mail@johndoe.com'/>
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

{/* <Box className='w-full'>
           <ButtonComp className='gap-x-2' outline titleItems={2} title={<>
            
            <Box className='flex gap-x-3'>

            <Image src={"/img/icons/upload.svg"} className="w-6 h-6 "/>
              <Text className='font-medium'>
          Upload an image
          </Text>
            </Box>
             
            </>}/>
           </Box> */}

<Box className='justify-start flex w-full'>
           <ButtonComp className='hover:bg-purple' titleItems={1} title={<>
          Add member
            </>}/>
           </Box>

    </div>
  )
}

export default CreateMemberAccount
