import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import issues from '../../../assets/icons/issues.svg'



interface componentProps {
    setCreateIssue: React.Dispatch<React.SetStateAction<number>>;
}

export const CreateIssueTable: React.FC<componentProps> = (props) => {
  return (
    <div className='flex flex-col items-center justify-start w-full h-full mb-16'>
         <div className='flex items-center justify-between w-full'>
             <div onClick={()=>props.setCreateIssue(0)}
             className='flex items-center justify-start cursor-pointer'>
                 <BsArrowLeft className='text-[#571845] text-lg' />
                 <p className='text-sm text-[#571845] font-medium ml-2'>Back</p>
             </div>
             <button onClick={()=>props.setCreateIssue(2)}
             className='text-white bg-[#571845] rounded-md h-8 px-4 text-xs cursor-pointer md:hidden'>
                  Create New Issue
             </button>
         </div>

         <div className='flex items-center justify-between px-4 bg-white h-20 rounded-t-2xl w-full mt-7 pt-2 border-b-[1px] border-[#dddddd] xl:px-8'>
                <div className='flex items-center justify-start'>
                   <div className='flex items-center justify-center h-8 w-8 bg-[#EEE8EC] rounded-lg xl:h-9 xl:w-9'>
                       <img className='w-5 xl:w-6' src={issues} alt="box-icon" />
                   </div>
                   <p className='text-lg text-[#1A0313] font-semibold ml-3 xl:ml-4'>Issues</p>
                </div>
                <button onClick={()=>props.setCreateIssue(2)}
                className='hidden md:flex items-center justify-center text-white cursor-pointer bg-[#571845] rounded-md h-8 px-4 text-xs xl:h-10 xl:px-6 xl:text-sm xl:rounded-lg'>
                      Create New Issue
                </button>
         </div>

         <div className="overflow-x-auto w-full hide-scrollbar">
            <table className="table-auto border-collapse w-full">
              <thead className='bg-[#F6F5F6]'>
                <tr className='w-full'>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">Ticket ID</th>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">Subject</th>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                    <p className='w-[75px] xl:w-[100px]'>
                        Dispute Types
                    </p>
                  </th>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                    <p className='w-[75px] xl:w-[100px]'>
                        Last Updated
                    </p>
                  </th>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Ticket Coupon</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Ticket</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">10-03-2024 (09:32)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#FFF9EE] w-full px-4 md:px-2 xl:h-8 xl:px-1'>
                        <p className='text-xs text-[#FFC655] xl:text-sm'>Open</p>
                    </div>
                  </td>
                </tr>

                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Downloading Ticket Issue</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Payment</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">10-03-2024 (09:32)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#EDF8EC] w-full px-4 md:px-2 xl:h-8 xl:px-1'>
                        <p className='text-xs text-[#4BB543] xl:text-sm'>Closed</p>
                    </div>
                  </td>
                </tr>

                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Downloading Ticket Issue</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Withdrawal</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">10-03-2024 (09:32)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#EDF8EC] w-full px-4 md:px-2 xl:h-8 xl:px-1'>
                        <p className='text-xs text-[#4BB543] xl:text-sm'>Closed</p>
                    </div>
                  </td>
                </tr>

                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Downloading Ticket Issue</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Events</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">10-03-2024 (09:32)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#EDF8EC] w-full px-4 md:px-2 xl:h-8 xl:px-1'>
                        <p className='text-xs text-[#4BB543] xl:text-sm'>Closed</p>
                    </div>
                  </td>
                </tr>

                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Downloading Ticket Issue</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Others</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">10-03-2024 (09:32)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#EDF8EC] w-full px-4 md:px-2 xl:h-8 xl:px-1'>
                        <p className='text-xs text-[#4BB543] xl:text-sm'>Closed</p>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
         </div>

    </div>
  )
}

