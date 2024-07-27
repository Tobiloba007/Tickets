import React from 'react'
import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
// import Event from '../../../assets/image11.jpg'


const Event="/img/image11.jpg"
const TotalSalesTable = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full bg-[#FAFAFA]  mt-4 mb-2 md:mt-0 md:w-[49%]'>
         <div className='w-full px-5 md:px-0 md:pl-5 lg:pl-6 xl:pl-8'>
             <div className='flex items-center justify-start px-5 rounded-t-lg w-full h-14 bg-white lg:px-6 xl:px-8'>
                    <p className='text-sm text-[#571845] font-medium'>
                          Total Sales
                    </p>
             </div>
         </div>

         <div className="overflow-x-auto w-full hide-scrollbar px-5 md:px-0 md:pl-5 lg:pl-6 xl:pl-8">
            <table className="table-auto border-collapse w-full rounded-lg border-[1px] border-[#00000]">
              <thead className='bg-[#F6F5F6]'>
                <tr className='w-full rounded-lg'>
                  <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-5 xl:py-4 xl:text-sm">
                      <p className='w-[150px] md:w-[120px] xl:w-[150px]'>
                          Name
                      </p>
                  </th>
                  <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-5 xl:py-4 xl:text-sm">
                    <p className='w-[75px] md:w-[60px] xl:w-[80px]'>
                          Sold Tickets
                    </p>
                  </th>
                  <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-5 xl:py-4 xl:text-sm">
                    <p className='w-[100px] md:w-[60px] xl:w-[100px]'>
                          Revenue (NGN)
                    </p>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#1A0313] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">105,523</td>
                </tr>

                <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#1A0313] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">105,523</td>
                </tr>

                <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#1A0313] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">105,523</td>
                </tr>

                <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#1A0313] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">105,523</td>
                </tr>
                
                <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#1A0313] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">105,523</td>
                </tr>

              </tbody>
            </table>
         </div>

    </div>
  )
}

export default TotalSalesTable
