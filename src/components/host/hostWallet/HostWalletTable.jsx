import React from 'react'
import receipt from '../../../assets/icons/receiptIcon.svg'
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";



const HostWalletTable = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full mt-3 mb-16 md:mt-2 lg:mt-3 xl:mt-4'>
          {/*MOBILE VIEW*/}
         <div className='flex items-start justify-start w-full md:hidden'>
             <div className='flex items-start justify-start'>
                 <div className='flex items-center justify-center h-8 w-8 bg-[#EEE8EC] rounded-lg'>
                     <img className='w-5 xl:w-6' src={receipt} alt="box-icon" />
                 </div>
                 <p className='text-base text-[#1A0313] font-semibold ml-3 mt-[2px]'>Payment History</p>
             </div>
         </div>

         <div className='flex items-center justify-between px-4 bg-white h-20 rounded-t-2xl w-full mt-5 pt-2 border-b-[1px] border-[#dddddd] md:mt-2 xl:px-8'>
                 {/*TAB VIEW +> */}
                <div className='hidden md:flex items-center justify-start md:w-[60%] lg:w-[40%]'>
                   <div className='flex items-center justify-center h-8 w-8 bg-[#EEE8EC] rounded-lg xl:h-9 xl:w-9'>
                       <img className='w-5 xl:w-6' src={receipt} alt="box-icon" />
                   </div>
                   <p className='text-base text-[#1A0313] font-semibold ml-3 xl:text-xl xl:ml-5'>Payment History</p>
                </div>

                <div className='relative flex items-center justify-center w-full md:w-[40%] lg:flex-row-reverse lg:w-[47.5%] xl:w-[35%]'>
                    <input className='h-9 w-full border-[1px] border-[#C6C0C4] rounded-md pl-9 text-xs font-normal outline-[#766871] md:pl-10 lg:h-8 lg:ml-3 lg:text-[10px] xl:text-xs xl:h-9 xl:ml-4' 
                     placeholder='Search'
                    />

                    <CiSearch className='absolute text-xl left-3 text-[#1A0313] lg:left-[135px] lg:text-lg xl:text-xl xl:left-[145px]' />

                    <div className='absolute right-3 flex items-center lg:justify-center lg:relative lg:right-0 lg:h-8 lg:border-[1px] border-[#C6C0C4] rounded-md lg:px-2 lg:w-[170px] xl:w-[180px] xl:h-9'>
                        <IoFilterOutline className='text-[#1A0313] lg:text-base xl:text-xl' />
                        <p className='flex items-center text-xs text-[#837780] font-normal ml-2 lg:text-[10px] lg:pl-1 xl:text-xs'>Filter<span className='hidden lg:flex pl-1'> & Sort</span></p>
                    </div>

                </div>
         </div>

         <div className="overflow-x-auto w-full hide-scrollbar">
            <table className="table-auto border-collapse w-full">
              <thead className='bg-[#F6F5F6]'>
                <tr className='w-full'>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">Transaction ID</th>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">Description</th>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                    <p className='w-[75px] xl:w-[100px]'>
                        Amount
                    </p>
                  </th>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">
                    <p className='w-[75px] xl:w-[100px]'>
                         Date
                    </p>
                  </th>
                  <th className="px-4 py-3 bg-[#F6F5F6] text-xs font-medium text-start text-[#4F3D49] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Web3 Conference</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">+ NGN 10,000</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-01-2024 (09:32)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#FFF9EE] w-full px-4 md:px-2 xl:h-8 xl:px-1'>
                        <p className='text-xs text-[#FFC655] xl:text-sm'>Pending</p>
                    </div>
                  </td>
                </tr>

                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Flyfest Asake</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">+ NGN 53,000</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">10-02-2024 (19:20)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#FFE9E9] w-full px-4 md:px-2 xl:h-8 xl:px-1'>
                        <p className='text-xs text-[#FC4B47] xl:text-sm'>Fail</p>
                    </div>
                  </td>
                </tr>

                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Chef Masterclass</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#FB2621] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">- NGN 986,000</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-03-2024 (17:34)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#EDF8EC] w-full px-4 md:px-2 xl:h-8 xl:px-1'>
                        <p className='text-xs text-[#4BB543] xl:text-sm'>Successful</p>
                    </div>
                  </td>
                </tr>

                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">Withdrawal</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">+ NGN 3,000</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-03-2024 (17:34)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#EDF8EC] w-full px-4 md:px-2 xl:h-8 xl:px-1'>
                        <p className='text-xs text-[#4BB543] xl:text-sm'>Successful</p>
                    </div>
                  </td>
                </tr>

                <tr className='w-full bg-white'>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">HGOGHSYK</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">UDC Meet and Greet</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#4BB543] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">+ NGN 21,999</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">30-03-2024 (17:34)</td>
                  <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                    <div className='flex items-center justify-center h-7 rounded-2xl cursor-pointer bg-[#EDF8EC] w-full px-4 md:px-2 lg:px-0 xl:h-8'>
                        <p className='text-xs text-[#4BB543] xl:text-sm'>Successful</p>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
         </div>

    </div>
  )
}

export default HostWalletTable
