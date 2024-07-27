import React from 'react'
import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
// import Event from '../../../assets/image11.jpg'


const Event="/img/image11.jpg"
const UpcomingTable = ({setNext}) => {
  return (
    <div className='flex flex-col items-center justify-start w-full mt-3 mb-16 md:mt-0 lg:mt-3 xl:mt-4'>

         <div className='flex items-center justify-between px-5 mb-5 rounded-t-2xl w-full md:justify-end'>
                <div className='flex items-center justify-center bg-white w-[34%] h-8 border-[1px] border-[#C6C0C4] rounded-md md:w-[100px] xl:h-10 xl:w-[125px]'>
                    <p className='text-xs font-normal text-[#766871] mr-2 lg:text-xs xl:text-sm'>Category</p>
                    <SlArrowDown className='text-xs text-[#1A0313] pt-[2px] xl:pt-1 xl:text-base' />
                </div>

                <div className='relative flex items-center justify-center bg-white w-[62%] md:w-[210px] md:ml-3 lg:flex-row-reverse lg:w-[225px] xl:w-[275px]'>
                    <input className='h-8 w-full border-[1px] border-[#C6C0C4] rounded-md pl-9 text-xs font-normal outline-[#766871] md:pl-10 lg:h-8 lg:pl-9 lg:text-xs xl:text-sm xl:h-10 xl:pl-11' 
                     placeholder='Search Events'
                    />
                    <CiSearch className='absolute text-xl left-3 text-[#1A0313] lg:left-3 lg:text-lg xl:text-xl xl:left-4' />
                </div>
         </div>


         <div className="overflow-x-auto w-full hide-scrollbar px-5">
            <table className="table-auto border-collapse w-full rounded-lg border-[1px] border-[#00000]">
              <thead className='bg-[#F6F5F6]'>
                <tr className='w-full rounded-lg'>
                  <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                      <p className='w-[150px]'>
                          Name
                      </p>
                  </th>
                  <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                    <p className='w-[75px] md:w-[90px]'>
                        Category
                    </p>
                  </th>
                  <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                    <p className='w-[75px] md:w-[90px]'>
                        Price
                    </p>
                  </th>
                  <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                    <p className='w-[75px] md:w-[90px]'>
                        Sold 
                    </p>
                  </th>
                  <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                     <p className='w-[75px] md:w-[90px]'>
                        Date
                     </p>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr onClick={()=>setNext(2)}
                className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Concert</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">N2,500</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-03-2024</td>
                </tr>

                <tr onClick={()=>setNext(2)}
                className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Concert</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">N2,500</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-03-2024</td>
                </tr>

                <tr onClick={()=>setNext(2)}
                className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Concert</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">N2,500</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-03-2024</td>
                </tr>

                <tr onClick={()=>setNext(2)}
                className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Concert</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">N2,500</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-03-2024</td>
                </tr>

                <tr onClick={()=>setNext(2)}
                className='w-full bg-white hover:bg-[#F6F5F6]'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:w-[60%] xl:text-sm xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                  </td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Concert</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">N2,500</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">5,523</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-03-2024</td>
                </tr>

              </tbody>
            </table>
         </div>

    </div>
  )
}

export default UpcomingTable
