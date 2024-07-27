import React from 'react'


const Newsletter: React.FC = () => {
  return (
    <div className='flex flex-col items-start justify-center bg-[#571845] w-full h-96 px-5 mt-8 md:px-8 md:h-72 lg:px-10 lg:h-96 xl:px-24 xl:h-[35rem]'>
         <div className='w-full'>
            <p className='text-xl font-medium text-white md:text-2xl lg:text-[34px] lg:font-semibold xl:text-[43px]'>
                Subscribe to our newsletter
            </p>

            <p className='text-sm font-normal text-white mt-5 md:w-[55%] lg:text-base lg:w-[45%] lg:mt-10 xl:text-xl xl:mt-14 xl:leading-8 xl:w-[43%]'>
                Sign up for our newsletter and get all the latest information on financial solutions, delivered right to your inbox.
            </p>

            <div className='flex flex-col items-start justify-start w-[90%] mt-4 md:w-full md:flex-row md:items-center lg:mt-5 xl:mt-8'>
                <input className='h-10 w-full rounded-md  border-[0.5px] border-[#A4A4A4] mt-5 bg-[#571845] pl-5 text-[11px] md:w-[30%] md:h-9 
                md:mr-4 lg:h-10 lg:text-xs lg:mr-5 xl:h-11 xl:text-sm' 
                 placeholder='Name'
                />
                <input className='h-10 w-full rounded-md  border-[0.5px] border-[#A4A4A4] mt-5 bg-[#571845] pl-5 text-[11px] md:w-[30%] md:h-9 
                md:mr-4 lg:h-10 lg:text-xs lg:mr-5 xl:h-11 xl:text-sm' 
                 placeholder='Enter email address'
                />
                <button className='text-sm font-semibold text-[#571845] bg-white rounded-md px-8 h-9 mt-6 md:mt-5 md:h-10 md:text-sm 
                lg:px-9 lg:text-base xl:h-12 xl:text-xl xl:rounded-lg xl:px-10'>
                     Subscribe
                </button>
            </div>
         </div>
    </div>
  )
}

export default Newsletter
