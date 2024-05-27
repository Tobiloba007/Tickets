import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import avatar from '../../../assets/avatar.jpg'
import camera from '../../../assets/icons/camera.svg'
import { useSelector } from 'react-redux';


export const UserAccount = () => {
    const [profilePhoto, setProfilePhoto] = useState(null);
    const fileInputRef = useRef(null);


    const handleFileUpload = (event) => {
        const file = event.target.files?.[0]; // Get the first file selected by the user
        if (file) {
          // Create a FileReader object to read the file
          const reader = new FileReader();
          reader.onloadend = () => {
            // Set the profile photo state to the uploaded image data URL
            setProfilePhoto(reader.result);
          };
          reader.readAsDataURL(file); // Read the file as a data URL
        }
      };


      const openFileInput = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click(); // Programmatically trigger click event of file input
        }
      };


      const user = useSelector((state) => state.auth.user)


  return (
    <div className='flex flex-col items-center justify-start w-full bg-white rounded-md mt-5 px-3 py-4 mb-6 md:px-5 md:items-start'>
         <div className='flex items-center justify-between w-full xl:w-[76%]'>
             <div className='flex flex-col items-start justify-center'>
                 <p className='text-base font-bold text-[#571845] xl:text-lg'>
                     Account
                 </p>
                 <p className='text-xs text-[#331F2D]'>
                     Update your personal Information
                 </p>
             </div>

             <div className='hidden md:flex items-center justify-end'>
                 <button className='h-7 w-[90px] text-center text-[11px] font-medium bg-[#EEE8EC] text-[#571845] rounded-md xl:h-8 xl:text-xs'>
                     Cancel 
                 </button>
                 <button className='h-7 w-[90px] text-center text-[11px] font-medium bg-[#571845] text-white rounded-md ml-3 xl:h-8 xl:text-xs'>
                     Save 
                 </button>
             </div>
         </div>

         <div className='border-[1px] border-[#A4A4A4] w-full opacity-30 mt-4'></div>

         <div className='relative flex items-center justify-center mt-8 h-16 w-16 md:mt-6 xl:w-[70px] xl:h-[70px]'>
              {profilePhoto 
               ? <img className='h-full w-full rounded-full object-cover' src={profilePhoto} alt="avatar" />
               : <img className='h-full w-full rounded-full object-cover' src={avatar} alt="avatar" />
              }
              <div className='absolute z-30 w-4 xl:w-5'>
                 <input className='hidden' type="file" accept="image/*" onChange={handleFileUpload} ref={fileInputRef} />
                 <img onClick={openFileInput} src={camera} alt="camera" />
              </div>
              <div className='absolute bg-black h-full w-full rounded-full opacity-40'></div>
         </div>


         <div className='flex flex-col items-start justify-start w-full mt-4 md:mt-6 md:flex-row md:items-center md:justify-between
                         md:flex-wrap xl:w-[76%]'>
              <div className='flex flex-col items-start justify-start w-full mb-4 md:w-[48.5%] xl:w-[400px]'>
                 <p className='text-xs text-[#16071F] mb-1 font-medium xl:text-sm'>
                     First name
                 </p>
                 <input className='h-10 w-full rounded-md border-[1px] border-[#dddddd] pl-4 text-xs outline-[#571845] placeholder:text-[#571845]'
                 placeholder={user.first_name}
                 type="text" />
              </div>

              <div className='flex flex-col items-start justify-start w-full mb-4 md:w-[48.5%] xl:w-[400px]'>
                 <p className='text-xs text-[#16071F] mb-1 font-medium xl:text-sm'>
                     Last name 
                 </p>
                 <input className='h-10 w-full rounded-md border-[1px] border-[#dddddd] pl-4 text-xs outline-[#571845] placeholder:text-[#571845]'
                 placeholder={user.last_name}
                 type="text" />
              </div>

              <div className='flex flex-col items-start justify-start w-full mb-4 md:w-[48.5%] xl:w-[400px]'>
                 <p className='text-xs text-[#16071F] mb-1 font-medium xl:text-sm'>
                     Username 
                 </p>
                 <input className='h-10 w-full rounded-md border-[1px] border-[#dddddd] pl-4 text-xs outline-[#571845] placeholder:text-[#571845]'
                 placeholder={user.user_name}
                 type="text" />
              </div>

              <div className='flex flex-col items-start justify-start w-full mb-4 md:w-[48.5%] xl:w-[400px]'>
                 <p className='text-xs text-[#16071F] mb-1 font- xl:text-sm'>
                     Email  
                 </p>
                 <input className='h-10 w-full rounded-md border-[1px] border-[#dddddd] pl-4 text-xs outline-[#571845] placeholder:text-[#571845]'
                 placeholder={user.email}
                 type="text" />
              </div>

              <div className='flex flex-col items-start justify-start w-full mb-4 md:w-[48.5%] xl:w-[400px]'>
                 <p className='text-xs text-[#16071F] mb-1 font-medium xl:text-sm'>
                     Address   
                 </p>
                 <input className='h-10 w-full rounded-md border-[1px] border-[#dddddd] pl-4 text-xs outline-[#571845] placeholder:text-[#571845]'
                 placeholder={user.address}
                 type="text" />
              </div>

              <div className='flex flex-col items-start justify-start w-full mb-4 md:w-[48.5%] xl:w-[400px]'>
                 <p className='text-xs text-[#16071F] mb-1 font-medium xl:text-sm'>
                     Phone    
                 </p>
                 <input className='h-10 w-full rounded-md border-[1px] border-[#dddddd] pl-4 text-xs outline-[#571845] placeholder:text-[#571845]'
                 placeholder={user.phone}
                 type="number" />
              </div>
         </div>

         <div className='flex flex-col items-start justify-start w-full mb-4 md:mt-2'>
                 <p className='text-xs text-[#16071F] mb-1 font-medium xl:text-sm'>
                     Security     
                 </p>
                 <button className='h-9 px-7 text-xs font-medium bg-[#EEE8EC] text-[#571845] rounded-md mt-1 xl:text-sm'>
                      Change password 
                 </button>
        </div>

         <div className='flex flex-col items-end justify-start w-full mt-1 md:hidden'>
                 <button className='h-9 px-5 text-xs font-medium bg-[#571845] text-white rounded-md'>
                      Save Changes 
                 </button>
        </div>

    </div>
  )
}

