import React from 'react'



const EventDetailsTable = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full mt-3 mb-16 md:mt-2 lg:mt-3 xl:mt-4'>

       <div className='flex items-center justify-center w-full px-5 md:mt-2'>
              <div className='flex items-center justify-between px-5 bg-white h-16 rounded-t-2xl w-full mt-5 pt-2 border-b-[1px] border-[#dddddd] md:mt-2 xl:px-8'>
                   <p className='text-lg text-[#1A0313] font-medium xl:text-xl'>Bookings</p>
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
                            Ticket
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                      <p className='w-[75px] md:w-[90px]'>
                          Price
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                      <p className='w-[75px] md:w-[90px]'>
                          Time 
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                       <p className='w-[75px] md:w-[90px]'>
                          Action
                       </p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex flex-col items-start">
                            <p className='w-full pl-[6px] xl:text-sm xl:pl-2'>Awotundun Maimunah</p>
                            <p className='w-full text-[10px] font-normal pl-[6px] xl:text-xs xl:pl-2'>Maimawo@gmail.com</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">1 x Regular</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">NGN 10,000</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-01-2024 (09:32)</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className='flex items-center justify-center w-full rounded-lg h-9 px-3 bg-[#EEE8EC] lg:px-3'>
                                <p className='text-[11px] text-[#571845] font-medium md:text-xs'>Download Ticket</p>
                         </div>
                    </td>
                  </tr>


                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex flex-col items-start">
                            <p className='w-full pl-[6px] xl:text-sm xl:pl-2'>Awotundun Maimunah</p>
                            <p className='w-full text-[10px] font-normal pl-[6px] xl:text-xs xl:pl-2'>Maimawo@gmail.com</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">1 x Regular</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">NGN 10,000</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-01-2024 (09:32)</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className='flex items-center justify-center w-full rounded-lg h-9 px-3 bg-[#EEE8EC] lg:px-3'>
                                <p className='text-[11px] text-[#571845] font-medium md:text-xs'>Download Ticket</p>
                         </div>
                    </td>
                  </tr>


                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex flex-col items-start">
                            <p className='w-full pl-[6px] xl:text-sm xl:pl-2'>Awotundun Maimunah</p>
                            <p className='w-full text-[10px] font-normal pl-[6px] xl:text-xs xl:pl-2'>Maimawo@gmail.com</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">1 x Regular</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">NGN 10,000</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-01-2024 (09:32)</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className='flex items-center justify-center w-full rounded-lg h-9 px-3 bg-[#EEE8EC] lg:px-3'>
                                <p className='text-[11px] text-[#571845] font-medium md:text-xs'>Download Ticket</p>
                         </div>
                    </td>
                  </tr>


                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex flex-col items-start">
                            <p className='w-full pl-[6px] xl:text-sm xl:pl-2'>Awotundun Maimunah</p>
                            <p className='w-full text-[10px] font-normal pl-[6px] xl:text-xs xl:pl-2'>Maimawo@gmail.com</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">1 x Regular</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">NGN 10,000</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-01-2024 (09:32)</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className='flex items-center justify-center w-full rounded-lg h-9 px-3 bg-[#EEE8EC] lg:px-3'>
                                <p className='text-[11px] text-[#571845] font-medium md:text-xs'>Download Ticket</p>
                         </div>
                    </td>
                  </tr>


                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex flex-col items-start">
                            <p className='w-full pl-[6px] xl:text-sm xl:pl-2'>Awotundun Maimunah</p>
                            <p className='w-full text-[10px] font-normal pl-[6px] xl:text-xs xl:pl-2'>Maimawo@gmail.com</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">1 x Regular</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">NGN 10,000</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-01-2024 (09:32)</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className='flex items-center justify-center w-full rounded-lg h-9 px-3 bg-[#EEE8EC] lg:px-3'>
                                <p className='text-[11px] text-[#571845] font-medium md:text-xs'>Download Ticket</p>
                         </div>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
         </div>

    </div>
  )
}

export default EventDetailsTable
