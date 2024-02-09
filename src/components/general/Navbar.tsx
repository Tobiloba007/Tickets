import React, { useState } from 'react';
import logo from '../../assets/umsLogo.svg'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";




interface ImageComponentProps {
//   altText: string;
}

const Navbar: React.FC<ImageComponentProps> = () => {
    const [open, ssetOpen] = useState<boolean>(false);

  return (
    <div className={`flex-col items-start justify-between w-full bg-white pt-8 pb-5 px-6 shadow-md ${open ? 'h-[100vh]' : "h-[95px]"} lg:h-[100px] xl:px-12`}>
      <div className='flex items-center justify-between w-full'>
      <img className='w-[112px] h-322px] lg:w-[160px] lg:h-[40px] xl:w-[168px] xl:h-[48px]'
      src={logo} alt='logo' />

      <div className='hidden lg:flex items-center justify-between w-[50%] xl:w-[48%]'>
          <p className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
              Discover 
          </p>
          <p className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
              About us    
          </p>
          <p className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
              Host an event    
          </p>
          <p className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
              Pricing  
          </p>
          <p className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
              Blog   
          </p>
      </div>

      <div className='hidden lg:flex items-center justify-between'>
          <p className='text-sm font-medium text-[#000000] px-4 xl:text-[16px]'>
              Login 
          </p>
          <button className='text-sm font-medium text-white text-center bg-[#571845] rounded-[7px] w-[120px] h-[38px] ml-4 xl:text-[16px] xl:h-[40px] xl:w-[135px] xl:ml-5'>
              Sign Up
          </button>
      </div>

      {
       open 
      ?<div onClick={()=>ssetOpen(!open)}
      className='items-center justify-center w-[45px] h-[47.12px] p-3'>
          <IoClose size={21} color='#571845'  />
       </div>
       : <div onClick={()=>ssetOpen(!open)}
       className='items-center justify-center w-[45px] h-[47.12px] rounded-[9.5px] p-3 bg-[#EEE8EC] lg:hidden'>
           <FiMenu size={24} color='##571845'  />
       </div>
      }
      </div>

      {open &&
      <div className='flex-col items-center justify-start w-full'>
          <div className='flex-col items-start justify-start w-full mt-10'>
              <p className='text-sm font-medium text-[##000000] mt-12'>
                  Discover 
              </p>
              <p className='text-sm font-medium text-[##000000] mt-12'>
                  About us    
              </p>
              <p className='text-sm font-medium text-[##000000] mt-12'>
                  Host an event    
              </p>
              <p className='text-sm font-medium text-[##000000] mt-12'>
                  Pricing  
              </p>
              <p className='text-sm font-medium text-[##000000] mt-12'>
                  Blog   
              </p>
          </div>


          <div className='absolute bottom-8 left-0 flex-col items-center w-full px-6'>
              <button className='text-center text-sm font-medium  h-[43px] w-full rounded-[9px] text-[#000000]'>
                   Login
              </button>
              <button className='text-center text-sm font-medium  h-[43px] w-full rounded-[9px] text-[#ffffff] bg-[#571845] mt-4'>
                   Sign Up
              </button>
          </div>

      </div>
      }

    </div>
  );
};

export default Navbar;