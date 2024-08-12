"use client"
import React, { useEffect, useState } from 'react'
// import Logo from '../../assets/userLogo.svg'
import { TfiClose } from "react-icons/tfi";
// import Home from '../../assets/icons/home.svg'
// import Home2 from '../../assets/icons/home2.svg'
// import Event from '../../assets/icons/myEvents2.svg'
// import Event2 from '../../assets/icons/myEvents.svg'
// import Bookings from '../../assets/icons/bookings2.svg'
// import Bookings2 from '../../assets/icons/bookings.svg'
// import Support from '../../assets/icons/support2.svg'
// import Support2 from '../../assets/icons/support.svg'
// import Profile2 from '../../assets/icons/profile.svg'
// import Profile from '../../assets/icons/profile_2.svg'
// import Package from '../../assets/icons/package.svg'
// import Wallet from '../../assets/icons/wallet.svg'
// import Scan from '../../assets/icons/scan.svg'
// import Avatar from '../../assets/avatar.jpg'
import { VscMenu } from "react-icons/vsc";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import { useDispatch, useSelector } from 'react-redux';
import { CiLogout } from "react-icons/ci";
import { setLoggedIn } from '@/redux/features/authentication/AuthSlice';
import { HostProfile } from '../host/HostProfile';
import { HostSupport } from '../host/HostSupport';
import HostWallet from '../host/HostWallet';
import HostPackage from '../host/HostPackage';
import HostCheckIn from '../host/HostCheckIn';
import HostOverview from '../host/HostOverview';
import HostCreateEvents from '../components/Admin/AdminCreateEvents';
import HostEvents from '../host/HostEvents';
import { useRouter } from 'next/navigation';




const Home="/img/icons/home.svg"
const Home2="/img/icons/home2.svg"
const Event="/img/icons/myEvents2.svg"
const Event2="/img/icons/myEvents.svg"
const Bookings="/img/icons/bookings2.svg"
const Bookings2="/img/icons/bookings.svg"
const Support="/img/icons/support2.svg"
const Support2="/img/icons/support.svg"
const Profile2="/img/icons/profile.svg"
const Profile="/img/icons/profile_2.svg"
const Package="/img/icons/package.svg"
const Wallet="/img/icons/wallet.svg"
const Scan="/img/icons/scan.svg"
const Avatar="/img/avatar.jpg"
const Logo="/img/userLogo.svg"


const HostDashboard = () => {
  const [select, setSelect] = useState(1);
  const [menu, setMenu] = useState(false);

  const [dropdown, setDropdown] = useState(false);



  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)


  const tabs = [
    {
      id: 1,
      icon: Home,
      icon2: Home2,
      name: 'Overview'
    },
    {
      id: 2,
      icon: Event,
      icon2: Event2,
      name: 'My Events'
    },
    {
      id: 3,
      icon: Bookings,
      icon2: Bookings2,
      name: 'Create Event'
    },
    {
      id: 4,
      icon: Package,
      icon2: Package,
      name: 'Package'
    },
    {
      id: 5,
      icon: Wallet,
      icon2: Wallet,
      name: 'Wallet'
    },
    {
      id: 6,
      icon: Profile,
      icon2: Profile2,
      name: 'My Profile'
    },
    {
      id: 7,
      icon: Scan,
      icon2: Scan,
      name: 'Check In System'
    },
    {
        id: 8,
        icon: Support,
        icon2: Support2,
        name: 'Support Channel'
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

  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FAFAFA] lg:flex items-start justify-between w-full'>
             {/* VERTICAL MENU BARS */}
             {/* MOBILE SCREENS */}
          { menu &&
          <div className={`fixed flex flex-col items-center justify-start bg-white shadow-slate-900 w-[65%] h-screen z-50 px-5 
                          py-6 md:w-[30%] lg:hidden`}>
              <div onClick={()=>router.push('/')} 
              className='flex items-center justify-start ml-8 w-full'>
                <img className='w-24'
                src={Logo} alt="Logo" />
              </div>

              <div className='flex flex-col items-center w-full mt-14'>
                {tabs.map((item) => {
                  return(
                <div key={item.id} onClick={()=>handleClick(item.id)}
                className={`flex items-center justify-start px-5 py-[10px] my-2 rounded-lg w-[90%] ${select === item.id && 'bg-[#3D1130]'} hover:bg-[#3D1130]`}>
                  <img className='h-4'
                  src={select === item.id ? item.icon : item.icon2} alt="home" />
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
                <img onClick={()=>router.push('/')} className='w-24 xl:w-32'
                src={Logo} alt="Logo" />
              </div>

              <div className='flex flex-col items-center w-full mt-8 xl:mt-10'>
                {tabs.map((item) => {
                  return(
                <div key={item.id} onClick={()=>handleClick(item.id)}
                className={`flex items-center justify-start px-5 py-[10px] my-2 rounded-lg cursor-pointer w-[90%] ${select === item.id && 'bg-[#3D1130]'} hover:bg-[#3D1130] xl:my-3`}>
                  <img className='h-4 xl:h-5'
                  src={select === item.id ? item.icon : item.icon2} alt="home" />
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
                    <img onClick={()=>router.push('/')} className='w-24 lg:hidden'
                    src={Logo} alt="Logo" />
                    <p className='hidden lg:flex text-lg font-bold text-[#571845] xl:text-[22px]'>
                        {
                          select === 1 ? 'Good day, Maimunah'
                         :select === 2 ? 'My Events'
                         :select === 3 ? 'Create Event'
                         :select === 4 ? 'My Package'
                         :select === 5 ? 'Wallet'
                         :select === 6 ? 'My Profile'
                         :select === 7 ? 'Check In System'
                         :select === 8 && 'Support Channel'
                        } 
                    </p>
                  </div>
    
                  <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-end'>
                      <img className='w-12 h-12 rounded-full object-cover'
                      src={Avatar} alt="avatar" />
                      <p className='hidden md:flex text-sm font-medium text-[#571845] ml-3 xl:text-base xl:ml-4'>
                          Awotundun Maimunah 
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
              <div className='flex items-center justify-start w-full h-full bg-[#FAFAFA] pt-16 lg:w-[78%] xl:w-[82%]'>
                       {
                         select === 1 ? <HostOverview />
                        :select === 2 ? <HostEvents />
                        :select === 3 ? <HostCreateEvents />
                        :select === 4 ? <HostPackage />
                        :select === 5 ? <HostWallet />
                        :select === 6 ? <HostProfile />
                        :select === 7 ? <HostCheckIn />
                        :select === 8 && <HostSupport />
                       }
              </div>

              {menu && <div onClick={()=>setMenu(false)} className='fixed z-20 opacity-30 h-full w-full bg-black'></div>}
          </div>

    </div>
  )
}

export default HostDashboard