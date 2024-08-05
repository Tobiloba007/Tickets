"use client"
import React, { useEffect, useState } from 'react'

import { TfiClose } from "react-icons/tfi";






import { VscMenu } from "react-icons/vsc";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import { useDispatch, useSelector } from 'react-redux';
import { CiLogout } from "react-icons/ci";
import { setLoggedIn } from '@/redux/features/authentication/AuthSlice';
import AdminOverview from '../components/Admin/AdminOverview';
import AdminUsers from '../components/Admin/AdminUsers';
import AdminBlogs from '../components/Admin/AdminBlogs';
import AdminEvents from '../components/Admin/AdminEvents';
import AdminSupport from '../components/Admin/AdminSupport';
import AdminAccounts from '../components/Admin/AdminAccounts';
import AdminNotifications from '../components/Admin/AdminNotifications';
import AdminProfile from '../components/Admin/AdminProfile';
import { useRouter } from 'next/navigation';
import Image from 'next/image';






const Home="/img/icons/home.svg"
const Home2="/img/icons/home2.svg"
const event="/img/icons/myEvents.svg"
const event2="/img/icons/myEvents2.svg"
const Bookings="/img/icons/bookings2.svg"
const Bookings2="/img/icons/bookings.svg"
const Support="/img/icons/support.svg"
const Support2="/img/icons/support2.svg"
const profile="/img/icons/profile.svg"
const profile2="/img/icons/profile_2.svg"
const accounts="/img/icons/accounts.svg"
const users="/img/icons/users.svg"
const users2="/img/icons/users2.svg"
const Avatar="/img/avatar.jpg"
const Logo="/img/userLogo.svg"
const notifications="/img/icons/notificationIcon.svg"
const notifications2="/img/icons/notificationIcon2.svg"
const accounts2="/img/icons/icons/accounts2.svg"

 const AdminDashboard = () => {
  const [select, setSelect] = useState(1);
  const [menu, setMenu] = useState(false);
  
  const [dropdown, setDropdown] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)


  const tabs = [
    {
      id: 1,
      icon: Home,
      icon2: Home2,
      name: 'Dashboard'
    },
    {
      id: 2,
      icon: users,
      icon2: users2,
      name: 'Users'
    },
    {
      id: 3,
      icon: Bookings,
      icon2: Bookings2,
      name: 'Blog'
    },
    {
      id: 4,
      icon: event2,
      icon2: event,
      name: 'Events'
    },
    {
      id: 5,
      icon: Support2,
      icon2: Support,
      name: 'Support'
    },
    {
      id: 6,
      icon: accounts2,
      icon2: accounts,
      name: 'Accounts'
    },
    {
      id: 7,
      icon: notifications2,
      icon2: notifications,
      name: 'Notifications'
    },
    {
      id: 8,
      icon: profile2,
      icon2: profile,
      name: 'Profile'
    },
  ]

   const handleClick = (item) => {
     setSelect(item)
     setMenu(false)
   }

   const dispatch = useDispatch();

   const handleLogout = () => {
    dispatch(setLoggedIn(false))
    router.push('/')
   }

   const router = useRouter();

   useEffect(() => {
    console.log(isLoggedIn);
   }, [])

   const user = useSelector((state) => state.auth.user)



  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FAFAFA] lg:flex items-start justify-between w-full'>
             {/* VERTICAL MENU BARS */}
             {/* MOBILE SCREENS */}
          { menu &&
          <div className={`fixed flex flex-col items-center justify-start bg-white shadow-slate-900 w-[65%] h-screen z-[100] px-5 
                          py-6 md:w-[30%] lg:hidden`}>
              <div className='flex items-center justify-start ml-8 w-full'>
               <Image width={96}  height={20} className='w-24'
                src={Logo} alt="Logo" />
              </div>

              <div className='flex flex-col items-center w-full mt-14'>
                {tabs.map((item) => {
                  return(
                <div key={item.id} onClick={()=>handleClick(item.id)}
                className={`flex items-center justify-start px-5 py-[10px] my-2 rounded-lg w-[90%] ${select === item.id && 'bg-[#3D1130]'} hover:bg-[#3D1130]`}>
                 <Image width={16}  height={20} className='h-4'
                  src={select === item.id ? item.icon : item.icon2} alt="icon" />
                  <p className={`text-xs ml-4 ${select === item.id ? 'text-white' : 'text-[#9F959C]'}`}>
                      {item.name}
                  </p>
                </div>
                )
              })}
                <div onClick={handleLogout}
                   className={`flex items-center justify-start px-5 py-[10px] my-2 rounded-lg w-[90%] hover:bg-[#3D1130]`}>
                   <CiLogout />
                   <p className={`text-xs ml-4 text-[#9F959C]`}>
                       Sign Out
                   </p>
                </div>
              </div>
            </div>}

             {/* LARGE SCREENS */}
          <div className={`hidden lg:flex fixed flex-col items-center justify-start bg-white shadow-slate-900 w-[22%] h-screen z-50 px-5 py-11 xl:w-[18%]`}>
              <div className='flex items-center justify-start ml-8 w-full'>
               <Image width={16}  height={20} onClick={()=>router.push('/')} className='w-24 xl:w-32'
                src={Logo} alt="Logo" />
              </div>

              <div className='flex flex-col items-center w-full mt-8 xl:mt-10'>
                {tabs.map((item) => {
                  return(
                <div key={item.id} onClick={()=>handleClick(item.id)}
                className={`flex items-center justify-start px-5 py-[10px] my-2 rounded-lg cursor-pointer w-[90%] ${select === item.id && 'bg-[#3D1130]'} hover:bg-[#3D1130] xl:my-3`}>
                 <Image className='h-4 xl:h-5' width={16}  height={20}
                  src={select === item.id ? item.icon : item.icon2} alt="icon" />
                  <p className={`text-xs ml-3 ${select === item.id ? 'text-white' : 'text-[#9F959C]'} xl:text-sm xl:ml-4`}>
                      {item.name}
                  </p>
                </div>
                )
              })}

              </div>
            </div>




          {/* TOP BAR */}
          <div className='flex flex-1 flex-col items-center justify-start w-full h-full bg-[#FAFAFA] lg:w-full lg:items-end'>
              <div className='fixed z-50 opacity-100 flex items-center justify-between w-full h-[85px] pt-2 px-5 bg-[#FFFFFF] md:px-6 xl:px-8 lg:bg-[#FAFAFA] lg:w-[78%] xl:w-[82%]'>
                  <div className='flex items-center justify-start'>
                   <Image width={96}  height={20} onClick={()=>router.push('/')} className='w-24 lg:hidden'
                    src={Logo} alt="Logo" />
                    <p className='hidden lg:flex text-lg font-bold text-[#571845] xl:text-[22px]'>
                        {
                          select === 1 ? 'Good day, Maimunah'
                         :select === 2 ? 'Users'
                         :select === 3 ? 'Blog'
                         :select === 4 ? 'Events'
                         :select === 5 ? 'Support'
                         :select === 6 ? 'Accounts'
                         :select === 7 ? 'Notifications'
                         :select === 8 && 'Profile'
                        } 
                    </p>
                  </div>
    
                  <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-end'>
                     <Image width={48}  height={48} className='w-12 h-12 rounded-full object-cover'
                      src={Avatar} alt="avatar" />
                      <p className='hidden md:flex text-sm font-medium text-[#571845] ml-3 xl:text-base xl:ml-4'>
                           {user.last_name} {user.first_name} 
                      </p>

                      <div onClick={()=>setDropdown(!dropdown)} className='hidden lg:flex items-center justify-center h-[31px] w-[29px] rounded-md bg-[#EEE8EC] ml-5 
                                      xl:w-[31px] xl:ml-7'>
                          {
                            dropdown
                            ?<BiSolidUpArrow onClick={()=>setDropdown(!dropdown)} className='text-[#571845] text-[10px]' />
                            :<BiSolidDownArrow onClick={()=>setDropdown(!dropdown)} className='text-[#571845] text-[10px]' />
                          }
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

              {dropdown &&
                <div className='hidden absolute right-5 top-[70px] lg:flex flex-col items-start justify-center w-36 py-3 z-[200] bg-white border-[1px] border-[#EEE8EC] rounded-md shadow-xl'>
                   <p onClick={()=>router.push('/')}
                   className='text-[#571845] text-xs font-medium h-7 hover:bg-[#EEE8EC] w-full px-5 flex items-center'>
                        Home
                   </p>

                   <p onClick={handleLogout}
                   className='text-[#571845] text-xs font-medium h-7 hover:bg-[#EEE8EC] w-full px-5 flex items-center'>
                        Logout
                        <CiLogout className='text-sm ml-2' />
                   </p>
                </div>
                }


              {/* CHILDREN */}
              <div className='flex items-center justify-start w-full h-full pt-16 lg:w-[78%] xl:w-[82%]'>
                       {
                        select === 1 ? <AdminOverview />
                       :select === 2 ? <AdminUsers />
                       :select === 3 ? <AdminBlogs />
                       :select === 4 ? <AdminEvents />
                       :select === 5 ? <AdminSupport />
                       :select === 6 ? <AdminAccounts />
                       :select === 7 ? <AdminNotifications />
                       :select === 8 && <AdminProfile />
                       }
              </div>

              {menu && <div onClick={()=>setMenu(false)} className='fixed z-20 opacity-30 h-full w-full bg-black'></div>}
          </div>

    </div>
  )
}

export default AdminDashboard
