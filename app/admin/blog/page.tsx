"use client"
import React, { useState } from 'react'

import { Portal } from '@mantine/core'
import CreateBlogModal from '@/app/components/Admin/adminUsers/CreateBlogModal.tsx'
import BlogCard from '@/app/components/adminBlog/BlogCard'


const AdminBlogs = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <Portal className='font-outfit'>
    {openModal && <div onClick={()=>setOpenModal(false)} className='fixed h-screen w-full bg-[#A4A4A4] left-0 top-0 opacity-45'></div>}
    {openModal&&<div className="flex items-center justify-center w-full h-full">
        <div className="fixed flex items-center justify-center w-[85%] top-[30%] md:w-[40%] lg:w-[30%] xl:w-[25%]">
        <CreateBlogModal setOpenModal={setOpenModal} />
        </div>
      </div>

    }

    </Portal>
    <div className="flex-col items-center justify-start w-full h-screen overflow-y-scroll [&>div]:flex-shrink-0 hide-scrollbar mt-14 px-5 lg:px-6 xl:px-8">
      {/* create blog BUTTON */}
      <section className="flex justify-end w-full">
        <div
        onClick={()=>{
          setOpenModal(true)
        }}
        className="flex items-center justify-center bg-[#571845] hover:scale-110 transition cursor-pointer h-8 px-5 rounded-md ml-3 md:h-[30px] md:ml-2 lg:px-6 xl:h-10 xl:ml-3">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.13477 12.9744H18.1348" stroke="#FEFCFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1348 18.9744V6.97437" stroke="#FEFCFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <p className="text-[#ffffff] text-xs font-medium ml-2 xl:text-sm xl:ml-3">
      
   Create 
          </p>
        </div>
      </section>

      <section className="grid grid-cols-4    place-content-center gap-4 w-full mt-14">
        <div>
        <BlogCard/>
        </div>
     
        <div>
        <BlogCard/>
        </div>
        <div>
        <BlogCard/>
        </div>

        <div>
        <BlogCard/>
        </div>
        {/* <div className=" items-center bg-white justify-center w-full h-60 shadow rounded-md md:w-[54%] lg:h-[248px] xl:w-[59%] xl:h-[267px] mt-5 md:mt-0 py-3 px-4  md:py-5 xl:px-5">
         
        </div>

        <div className="flex flex-col items-center w-full md:w-[44%] xl:w-[39%]">
          <div className="flex items-center justify-between w-full mt-5 md:mt-0">
            <div className="flex flex-col items-start justify-center w-[48.5%] bg-white shadow rounded-md py-3 px-4 md:w-[50%] md:py-5 xl:px-5">
              <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
                Total Revenue
              </p>
              <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
                NGN200,000
              </p>
              <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
                <span className="text-[#4BB543]">+20%</span> vs previous day
              </p>
            </div>

            <div className="flex flex-col items-start justify-center w-[48.5%] bg-white shadow rounded-md py-3 px-4 md:mt-0 md:w-[50%] md:ml-3 md:py-5 xl:px-5 xl:ml-4">
              <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
                Total Visitors
              </p>
              <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
                2456
              </p>
              <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
                <span className="text-[#4BB543]">+20%</span> vs previous day
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between w-full mt-3 md:mt-5">
            <div className="flex flex-col items-start justify-center w-[48.5%] bg-white shadow rounded-md py-3 px-4 md:w-[50%] md:py-5 xl:px-5">
              <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
                Total Events
              </p>
              <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
                30
              </p>
              <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
                <span className="text-[#4BB543]">+20%</span> vs previous 28 day
              </p>
            </div>

            <div className="flex flex-col items-start justify-center w-[48.5%]  bg-white shadow rounded-md py-3 px-4 md:mt-0 md:w-[50%] md:ml-3 md:py-5 xl:px-5 xl:ml-4">
              <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
                Total Users
              </p>
              <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
                245
              </p>
              <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
                <span className="text-[#4BB543]">+20%</span> vs 28 previous day
              </p>
            </div>
          </div>
        </div> */}
      </section>

      {/* <section className="flex flex-col items-center justify-start w-full mt-5 md:flex-row md:justify-between md:items-start">
        <div className="flex flex-col items-center justify-center w-full shadown h-60 bg-white rounded-md md:w-[54%] lg:h-[248px] xl:w-[59%] xl:h-[267px]">
          FUNNEL ANALYTICS
        </div>
        <div className="flex flex-col items-center justify-center w-full h-60 bg-white shadow rounded-md mt-5 md:mt-0 md:w-[44%] lg:h-[248px] xl:w-[39%] xl:h-[267px]">
          SALES BY CATEGORY
   
        </div>
      </section>

      <section className="flex w-full">
       
      </section> */}
    </div>
    </>
  )
  
}

export default AdminBlogs
