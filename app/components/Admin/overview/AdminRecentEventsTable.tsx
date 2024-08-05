import React from 'react'

import Avatar from '/img/avatar.jpg'


const  Event='/img/image11.jpg'

const AdminRecentEventsTable = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full mt-3 mb-16 md:mt-2 lg:mt-3 xl:mt-4'>

       <div className='flex items-center justify-center w-full md:mt-2'>
              <div className='flex items-center justify-between px-5 bg-red-100 h-14 rounded-t-2xl w-full mt-5 pt-2 border-b-[1px] border-[#dddddd] md:mt-2 xl:px-8 xl:h-16'>
                   <p className='text-sm text-[#571845] font-medium xl:text-lg'>Recent Events </p>
              </div>
       </div>
    
       <div className="overflow-x-auto w-full hide-scrollbar">
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
                          Date
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                       <p className='w-[75px] md:w-[90px]'>
                          Host
                       </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                       <p className='w-[75px] md:w-[90px]'>
                          Sold
                       </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                       <p className='w-[75px] md:w-[90px]'>
                          Status
                       </p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:text-[13px] xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Concert</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">N2,500</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-01-2024</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex items-center justify-start">
                             <img className="w-7 h-7 rounded-full object-cover" src={"/img/avatar.jpg"} alt="event_picture" />
                             <p className='w-full pl-[6px] text-[11px] text-[#571845] xl:text-sm xl:pl-2'>Kemi Adetiba</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">234</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className='flex items-center justify-center w-full rounded-2xl h-7 px-1 bg-[#FFE8B9] lg:px-3'>
                                <p className='text-[11px] text-[#FFC655] font-medium md:text-xs'>Open</p>
                         </div>
                    </td>
                  </tr>
                  
                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className="flex items-center justify-start">
                          <img className="w-14 h-10 rounded-md md:w-11 md:h-11 lg:w-12 lg:h-10 xl:h-14 xl:w-14" src={Event} alt="event_picture" />
                          <p className='w-full pl-[6px] xl:text-[13px] xl:pl-2'>Palm Wine Music Festival (Lagos)</p>
                       </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Concert</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">N2,500</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-01-2024</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex items-center justify-start">
                             <img className="w-7 h-7 rounded-full object-cover" src={"/img/avatar.jpg"} alt="event_picture" />
                             <p className='w-full pl-[6px] text-[11px] text-[#571845] xl:text-sm xl:pl-2'>Kemi Adetiba</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">234</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className='flex items-center justify-center w-full rounded-2xl h-7 px-1 bg-[#FFE8B9] lg:px-3'>
                                <p className='text-[11px] text-[#FFC655] font-medium md:text-xs'>Open</p>
                         </div>
                    </td>
                  </tr>

                  
                </tbody>
              </table>
         </div>

    </div>
  )
}

export default AdminRecentEventsTable
