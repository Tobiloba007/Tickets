import React from 'react'
import { MdFilterList } from "react-icons/md";



const SupportInactiveTable = () => {

    const tableData = [
        {
            id: 1,
            userId: '2334567896',
            ticketId: 'HGOGHSYK',
            disputeType: 'Ticket Issue',
            dateOfIssue: '22-01-2024',
            status: 'Closed'
        },
        {
            id: 2,
            userId: '2334567896',
            ticketId: 'HGOGHSYK',
            disputeType: 'Ticket Issue',
            dateOfIssue: '22-01-2024',
            status: 'Closed'
        },
        {
            id: 3,
            userId: '2334567896',
            ticketId: 'HGOGHSYK',
            disputeType: 'Ticket Issue',
            dateOfIssue: '22-01-2024',
            status: 'Closed'
        },
        {
            id: 4,
            userId: '2334567896',
            ticketId: 'HGOGHSYK',
            disputeType: 'Ticket Issue',
            dateOfIssue: '22-01-2024',
            status: 'Closed'
        },
        {
            id: 5,
            userId: '2334567896',
            ticketId: 'HGOGHSYK',
            disputeType: 'Ticket Issue',
            dateOfIssue: '22-01-2024',
            status: 'Closed'
        },
        {
            id: 6,
            userId: '2334567896',
            ticketId: 'HGOGHSYK',
            disputeType: 'Ticket Issue',
            dateOfIssue: '22-01-2024',
            status: 'Closed'
        },
    ]

  return (
    <div className='flex flex-col items-center justify-start w-full mt-3 mb-6 md:mt-2 lg:mt-3 xl:mt-4 xl:mb-8'>

       <div className='flex items-center justify-center w-full md:mt-2'>
              <div className='flex items-center justify-between px-5 bg-white h-14 rounded-t-2xl w-full mt-5 pt-2 border-b-[1px] border-[#dddddd] md:mt-2 xl:px-8 xl:h-16'>
                   <p className='text-sm text-[#571845] font-medium xl:text-lg'>Users</p>
                   <div className='flex items-center'>
                         <MdFilterList className='text-[#292D32] w-6 md:w-7 xl:text-xl' />
                         <p className='text-[10px] text-[#292D32] font-medium md:pl-1 md:text-[11px] xl:text-[13px]'>Filter & Sort </p>
                   </div>
              </div>

       </div>
    
       <div className="overflow-x-auto w-full hide-scrollbar pb-[150px]">
                <table className="table-auto border-collapse w-full rounded-lg border-[1px] border-[#00000]">
                <thead className='bg-[#F6F5F6]'>
                  <tr className='w-full rounded-lg'>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px] xl:w-[100px]'>
                           USER ID 
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px] xl:w-[100px]'>
                           TICKET ID 
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px] xl:w-[100px]'>
                           DISPUTE TYPE 
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px] xl:w-[100px]'>
                           DATE OF ISSUE 
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px] xl:w-[100px]'>
                           STATUS 
                      </p>
                    </th>
                  </tr>
                </thead>

                {tableData.map((item) => {
                    return(
                <tbody>
                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.userId}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.ticketId}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.disputeType}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.dateOfIssue}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                       <div className={`flex items-center justify-center h-7 w-full rounded-2xl xl:h-8 bg-[#EDF8EC]`}>
                              <p className={`xl:text-sm text-[#4BB543]`}>
                                  {item.status}
                              </p>
                         </div>
                    </td>
                  </tr>
                  
                </tbody>
                    )
                })}

              </table>
         </div>

    </div>
  )
}

export default SupportInactiveTable
