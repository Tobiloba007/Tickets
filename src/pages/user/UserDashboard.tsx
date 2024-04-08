import React, { useEffect, useState } from 'react'
import Logo from '../../assets/userLogo.svg'
import { TfiClose } from "react-icons/tfi";
import Home from '../../assets/icons/home.svg'
import Bookings from '../../assets/icons/bookings.svg'
import Support from '../../assets/icons/support.svg'
import Profile from '../../assets/icons/profile.svg'
import Avatar from '../../assets/avatar.jpg'
import { VscMenu } from "react-icons/vsc";
import { BiSolidDownArrow } from "react-icons/bi";
import { UserHome } from './UserHome';
import { UserBookings } from './UserBookings';
import { UserProfile } from './UserProfile';
import { UserSupport } from './UserSupport';




export const UserDashboard: React.FC = () => {
  const [select, setSelect] = useState<number>(1);
  const [menu, setMenu] = useState<boolean>(false);

  const tabs = [
    {
      id: 1,
      icon: Home,
      name: 'Dashboard'
    },
    {
      id: 2,
      icon: Bookings,
      name: 'My Bookings'
    },
    {
      id: 3,
      icon: Profile,
      name: 'Profile'
    },
    {
      id: 4,
      icon: Support,
      name: 'Support Channel'
    },
  ]

   const handleClick = (item: number) => {
     setSelect(item)
     setMenu(false)
   }


  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FAFAFA] lg:flex items-start justify-between w-full'>
             {/* VERTICAL MENU BARS */}
             {/* MOBILE SCREENS */}
          { menu &&
          <div className={`absolute flex flex-col items-center justify-start bg-white shadow-slate-900 w-[65%] h-screen z-50 px-5 
                          py-6 md:w-[30%] lg:hidden`}>
              <div className='flex items-center justify-start ml-8 w-full'>
                <img className='w-24'
                src={Logo} alt="Logo" />
              </div>

              <div className='flex flex-col items-center w-full mt-14'>
                {tabs.map((item) => {
                  return(
                <div key={item.id} onClick={()=>handleClick(item.id)}
                className={`flex items-center justify-start px-5 py-[10px] my-2 rounded-lg w-[90%] ${select === item.id && 'bg-[#3D1130]'} hover:bg-[#3D1130]`}>
                  <img className='h-4'
                  src={item.icon} alt="home" />
                  <p className={`text-xs ml-4 ${select === item.id ? 'text-white' : 'text-[#9F959C]'}`}>
                      {item.name}
                  </p>
                </div>
                )
              })}

              </div>
            </div>}

             {/* LARGE SCREENS */}
          <div className={`hidden lg:flex fixed flex-col items-center justify-start bg-white shadow-slate-900 w-[22%] h-screen z-50 px-5 py-11 xl:w-[18%]`}>
              <div className='flex items-center justify-start ml-8 w-full'>
                <img className='w-24 xl:w-32'
                src={Logo} alt="Logo" />
              </div>

              <div className='flex flex-col items-center w-full mt-8 xl:mt-10'>
                {tabs.map((item) => {
                  return(
                <div key={item.id} onClick={()=>handleClick(item.id)}
                className={`flex items-center justify-start px-5 py-[10px] my-2 rounded-lg w-[90%] ${select === item.id && 'bg-[#3D1130]'} hover:bg-[#3D1130] xl:my-3`}>
                  <img className='h-4 xl:h-5'
                  src={item.icon} alt="home" />
                  <p className={`text-xs ml-3 ${select === item.id ? 'text-white' : 'text-[#9F959C]'} xl:text-sm xl:ml-4`}>
                      {item.name}
                  </p>
                </div>
                )
              })}

              </div>
            </div>




          {/* TOP BAR */}
          <div className='flex flex-1 flex-col items-center justify-start w-full h-[100vh] bg-[#FAFAFA] lg:w-full lg:items-end'>
              <div className='fixed z-50 opacity-100 flex items-center justify-between w-full h-[85px] pt-2 px-5 bg-[#FFFFFF] md:px-6 xl:px-8 lg:bg-[#FAFAFA] lg:w-[78%] xl:w-[82%]'>
                  <div className='flex items-center justify-start'>
                    <img className='w-24 lg:hidden'
                    src={Logo} alt="Logo" />
                    <p className='hidden lg:flex text-lg font-bold text-[#571845] xl:text-[22px]'>
                          Good day, Maimunah  
                    </p>
                  </div>
    
                  <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-end'>
                      <img className='w-12 h-12 rounded-full object-cover'
                      src={Avatar} alt="avatar" />
                      <p className='hidden md:flex text-sm font-medium text-[#571845] ml-3 xl:text-base xl:ml-4'>
                          Awotundun Maimunah 
                      </p>
                      <div className='hidden lg:flex items-center justify-center h-[31px] w-[29px] rounded-md bg-[#EEE8EC] ml-5 
                                      xl:w-[31px] xl:ml-7'>
                          <BiSolidDownArrow className='text-[#571845] text-[10px]' />
                      </div>
                    </div>
                    <div onClick={()=>setMenu(!menu)}
                    className='flex items-center justify-center h-[36px] w-[36px] rounded-lg bg-[#EEE8EC] ml-4 md:ml-5 lg:hidden'>
                      {menu
                       ?<TfiClose className='text-xl' />
                       :<VscMenu className='text-xl' />
                      }
                    </div>
                  </div>
              </div>


              {/* CHILDREN */}
              <div className='flex items-center justify-start w-full h-full pt-16 lg:w-[78%] xl:w-[82%]'>
                       {
                        select === 1 ? <UserHome />
                       :select === 2 ? <UserBookings />
                       :select === 3 ? <UserProfile />
                       :select === 4 && <UserSupport />
                       }
              </div>
          </div>

    </div>
  )
}

