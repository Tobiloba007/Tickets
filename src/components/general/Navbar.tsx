import React, { useState } from 'react';
import logo from '../../assets/umsLogo.svg'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';




interface ImageComponentProps {
    button1: string 
    button2: string 
    link1: string 
    link2: string 
}

const Navbar: React.FC<ImageComponentProps> = (props) => {
    const [open, ssetOpen] = useState<boolean>(false);

    const navigate = useNavigate();

  return (
    <div className={`flex-col items-center justify-between w-full font-outfit bg-white pt-5 pb-5 px-6 shadow-md ${open ? 'h-screen fixed z-[200] overflow-hidden' : "h-[95px]"} md:px-8 lg:h-[100px] lg:px-10 xl:px-16`}>
      <div className='flex items-center justify-between w-full'>
        <Link to='/'>
         <img className='w-[112px] h-322px] lg:w-[160px] lg:h-[40px] xl:w-[168px] xl:h-[48px]'
         src={logo} alt='logo' />
        </Link>

      <div className='hidden lg:flex items-center justify-between w-[50%] xl:w-[48%]'>
          <Link to='/discover' className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
              Discover 
          </Link>
          <Link to='/about' className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
              About us    
          </Link>
          <Link to='/login' className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
              Host an event    
          </Link>
          <Link to='/pricing'>
              <p className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
                  Pricing  
              </p>
          </Link>
          <Link to='/blog'>
               <p className='text-sm font-medium text-[##000000] px-4 xl:text-[16px]'>
                   Blog   
               </p>
        </Link>
      </div>

      <div className='hidden lg:flex items-center justify-between'>
          <Link to={props.link1} className='flex items-center justify-center text-sm font-medium text-[#000000] px-6 rounded-[7px] bg-[#EEE8EC] h-[38px] xl:h-[40px] xl:text-[16px]'>
              {props.button1}
          </Link>
          <button onClick={()=>navigate(props.link2)}
          className='text-sm font-medium text-white text-center bg-[#571845] rounded-[7px] w-[120px] h-[38px] ml-4 xl:text-[16px] xl:h-[40px] xl:w-[135px] xl:ml-5'>
              {props.button2}
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
              <Link to='/discover' className='text-sm font-medium text-[##000000] mt-12'>
                  Discover 
              </Link>
              <Link to='/about'>
                  <p className='text-sm font-medium text-[##000000] mt-12'>
                      About us    
                  </p>
              </Link>
              <Link to='/login'>
                  <p className='text-sm font-medium text-[##000000] mt-12'>
                      Host an event    
                  </p>
              </Link>
              <Link to='/pricing'>
                  <p className='text-sm font-medium text-[##000000] mt-12'>
                      Pricing  
                  </p>
              </Link>
              <Link to='/blog'>
                  <p className='text-sm font-medium text-[##000000] mt-12'>
                        Blog  
                  </p>
              </Link>
          </div>


          <div className='absolute bottom-8 left-0 flex-col items-center w-full px-6'>
              <button onClick={()=>navigate(props.link1)}
               className='text-center text-sm font-medium  h-[43px] w-full rounded-[9px] text-[#000000] bg-[#EEE8EC]'>
                   {props.button1}
              </button>
              <button onClick={()=>navigate(props.link2)}
              className='text-center text-sm font-medium  h-[43px] w-full rounded-[9px] text-[#ffffff] bg-[#571845] mt-4'>
                   {props.button2}
              </button>
          </div>

      </div>
      }

    </div>
  );
};

export default Navbar;