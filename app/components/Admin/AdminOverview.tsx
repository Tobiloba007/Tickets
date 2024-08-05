import React from 'react'

import AdminRecentEventsTable from '../../components/Admin/overview/AdminRecentEventsTable'
import Image from 'next/image'

import LineChartComp from './overview/Linechart'
import { Box, Text } from '@mantine/core'

const AdminOverview = () => {
  return (
    <div className='flex-col items-center justify-start w-full h-screen overflow-y-scroll [&>div]:flex-shrink-0 hide-scrollbar mt-14 px-5 lg:px-6 xl:px-8'>
       {/* EXPORT BUTTON */}
       <section className='flex justify-end w-full'>
           <div className='flex items-center justify-center bg-[#571845] h-8 px-5 rounded-md ml-3 md:h-[30px] md:ml-2 lg:px-6 xl:h-10 xl:ml-3'>
                <Image height={16} width={20}  className='w-4 lg:w-5 xl:w-6'
                 src={"/img/icons/export.svg"} alt='export_icon' />
                <p className='text-[#ffffff] text-xs font-medium ml-2 xl:text-sm xl:ml-3'>Export</p>
            </div>
       </section>


       <section className='flex flex-col items-center justify-start w-full mt-4 md:flex-row md:justify-between md:items-start'>
           <div className='flex flex-col items-center bg-white justify-center w-full h-60 shadow rounded-md md:w-[54%] lg:h-[248px] xl:w-[59%] xl:h-[267px]'>
            <Box className="text-purple">

            </Box>
              <Text className="flex">

              </Text>
                <LineChartComp/>
           </div>

           <div className='flex flex-col items-center w-full md:w-[44%] xl:w-[39%]'>
                <div className='flex items-center justify-between w-full mt-5 md:mt-0'>
                     <div className='flex flex-col items-start justify-center w-[48.5%] bg-white shadow rounded-md py-3 px-4 md:w-[50%] md:py-5 xl:px-5'>
                          <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Revenue</p>
                          <p className='text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4'>NGN200,000</p>
                          <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs previous day</p>
                     </div>
   
                     <div className='flex flex-col items-start justify-center w-[48.5%] bg-white shadow rounded-md py-3 px-4 md:mt-0 md:w-[50%] md:ml-3 md:py-5 xl:px-5 xl:ml-4'>
                          <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Visitors</p>
                          <p className='text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4'>2456</p>
                          <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs previous day</p>
                     </div>
                </div>

                <div className='flex items-center justify-between w-full mt-3 md:mt-5'>
                     <div className='flex flex-col items-start justify-center w-[48.5%] bg-white shadow rounded-md py-3 px-4 md:w-[50%] md:py-5 xl:px-5'>
                          <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Events</p>
                          <p className='text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4'>30</p>
                          <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs previous 28 day</p>
                     </div>
   
                     <div className='flex flex-col items-start justify-center w-[48.5%]  bg-white shadow rounded-md py-3 px-4 md:mt-0 md:w-[50%] md:ml-3 md:py-5 xl:px-5 xl:ml-4'>
                          <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Users</p>
                          <p className='text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4'>245</p>
                          <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs 28 previous day</p>
                     </div>
                </div>
           </div>
       </section>


       <section className='flex flex-col items-center justify-start w-full mt-5 md:flex-row md:justify-between md:items-start'>
           <div className='flex flex-col items-center justify-center w-full shadown h-60 bg-white rounded-md md:w-[54%] lg:h-[248px] xl:w-[59%] xl:h-[267px]'>
                 FUNNEL ANALYTICS
           </div>
           <div className='flex flex-col items-center justify-center w-full h-60 bg-white shadow rounded-md mt-5 md:mt-0 md:w-[44%] lg:h-[248px] xl:w-[39%] xl:h-[267px]'>
                 SALES BY CATEGORY
           </div>
       </section>


       <section className='flex w-full'>
           <AdminRecentEventsTable />
       </section>

    </div>
  )
}

export default AdminOverview