

"use client"
import React, { useEffect, useState } from 'react'

import { TfiClose } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import { useDispatch, useSelector } from 'react-redux';
import { CiLogout } from "react-icons/ci";
import { setLoggedIn } from '@/redux/features/authentication/AuthSlice';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Box, Divider, rem, Text } from '@mantine/core';






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
function Header() {

    const [select, setSelect] = useState(1);
  const [menu, setMenu] = useState(false);
  
  const [dropdown, setDropdown] = useState(false);

  const isLoggedIn = useSelector((state:any) => state.auth.isLoggedIn)


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

   const handleClick = (item:any) => {
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

   const user = useSelector((state:any) => state.auth.user)

  return (
<>
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
                      <p className='hidden md:flex text-sm font-medium text-[#571845] ml-3 xl:text-lg xl:ml-4'>
                           {user.last_name} {user.first_name} Awotundun Maimunah 
                      </p>

<Box
onClick={()=>setDropdown(!dropdown)}
className='hidden lg:flex items-center justify-center h-[31px] w-[29px] rounded-md bg-[#EEE8EC] ml-5 
                                 transition   cursor-pointer  xl:w-[31px] xl:ml-7'>
 {
                            dropdown
                            ?<BiSolidUpArrow onClick={()=>setDropdown(!dropdown)} className='text-[#571845] text-[10px]' />
                            :<BiSolidDownArrow onClick={()=>setDropdown(!dropdown)} className='text-[#571845] text-[10px]' />
                          }

</Box>
                      
                    </div>
                    
                    <Box onClick={()=>setMenu(!menu)}
                    className='flex items-center justify-center h-[36px] w-[36px] rounded-lg bg-[#EEE8EC] ml-4 md:ml-5 lg:hidden transition '>
                      {menu
                       ?<TfiClose className='text-xl' />
                       :<VscMenu className='text-xl' />
                      }
                    </Box>
                  </div>
              </div>

              {dropdown &&
                <Box className={`hidden absolute right-5 top-[12.5%] lg:flex flex-col   py-3 z-[200] bg-white border-[1px] border-[#EEE8EC] rounded-xl shadow-xl h-[25.313rem] w-[22.938rem]`}>

                  <Image src={"/img/avatar.jpg"} width={100} height={100} alt="avatar" className='h-24 w-24 rounded-full mx-auto mt-10'/>


                  <Box className='text-center mt-5'>
<Text className="text-neutral-100 font-bold">
Awotundun Maimunah
</Text>
<Text className='font-medium text-neutral'>
maimunah@umscopeticket .com
</Text>


                  </Box>
                  <Box className='mt-14'>
                  <p  onClick={()=>router.push('/')}
                   className='text-neutral  cursor-pointer font-medium h-7 hover:bg-[#EEE8EC] w-full px-5 flex items-center'>
                        Profile
                   </p>
<Divider mx="sm" className='mt-2'/>
                   <p onClick={handleLogout}
                   className='text-neutral   cursor-pointer font-medium h-7 hover:bg-[#EEE8EC] w-full mt-3 px-5 flex items-center'>
                        Signout
                        {/* <CiLogout className='text-sm ml-2' /> */}
                   </p>
                  </Box>
              
                </Box>
                }


              
              <div className='flex items-center justify-start w-full h-full pt-16 lg:w-[78%] xl:w-[82%]'>


                
                     
              </div>

              {menu && <div onClick={()=>setMenu(false)} className='fixed z-20 opacity-30 h-full w-full bg-black'></div>}
          </div>
</>
  )
}

export default Header