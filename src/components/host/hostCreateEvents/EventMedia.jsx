import React, { useRef, useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RxUpload } from "react-icons/rx";
import { BsFillImageFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";





const EventMedia = ({setActive, active, setActiveForm}) => {
    const [file, setFile] = useState(null);
    const [galleryFile, setGalleryFile] = useState(null);
      const [error, setError] = useState(null);
      const galleryFileInputRef = useRef(null);
      const fileInputRef = useRef(null);


      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log(file);
     };

     const handleButtonClick = () => {
      fileInputRef.current.click();
    };

      const handleGalleryFileChange = (event) => {
        setGalleryFile(event.target.files[0]);
        console.log(galleryFile);
     };

     const handleButton = () => {
      galleryFileInputRef.current.click();
    };

    const handleProceed = () => {
        // setActive(5)
        setActiveForm(2)
    }

  return (
    <div className='flex flex-col items-start justify-start w-full bg-white rounded-lg py-5 xl:py-9'>
          <div className='flex flex-col items-start w-full md:flex-row md:items-center md:justify-between'>
              <div className='flex flex-col items-start w-full'>
                 <p className='text-sm text-[#571845] font-medium xl:text-lg'>
                       4. Event Media
                 </p>
                 <p className='text-[11px] text-[#331F2D] font-medium pt-1 xl:text-sm'>
                       Add all events media such as pictures and Video.           
                 </p>
              </div>

              {active !== 4 &&
              <div onClick={()=>setActive(4)}
              className='flex items-center justify-center h-6 px-4 rounded-md bg-[#EEE8EC] mt-2 md:h-7 md:px-5 xl:h-8 xl:px-6'>
                   <p className='text-[10px] text-[#571845] font-medium md:text-[11px] xl:text-xs'>
                         Edit
                   </p>
              </div>
              }
          </div>

          <div className='w-full border-[1px] border-[#C6C0C4] mt-3 xl:mt-5'></div>
          {/* EVENT MAIN IMAGE */}
          {active === 4 &&
          <div className='flex flex-col items-start justify-start w-full'>

              <div className='flex flex-col items-start w-full mt-4'>
                  <p className='text-xs text-[#1A0313] font-medium'>
                        Event Main Image
                  </p>
                  <p className='text-[10px] text-[#331F2D] font-medium pt-1 xl:text-sm'>
                        Upload the main Image of the event. Recommended size 1920x739 px           
                  </p>
              </div>


              <div className='flex flex-col items-center justify-center h-24 w-full border-[#C6C0C4] border-2 border-dashed rounded-md mt-4 px-5 md:h-16 xl:h-20'>
                     <input
                     className='hidden'
                     ref={fileInputRef}
                    type="file"
                    accept=".pdf, .jpg, .jpeg, .png"
                    onChange={handleFileChange}
                    />
                    <div className='flex flex-col items-center justify-center w-full md:flex-row'>
                       <RxUpload onClick={handleButtonClick} className='text-xl text-[#571845] xl:text-2xl' />
                       <p className='text-xs text-center font-normal text-[#571845] mt-2 md:hidden'>
                           {file ? 'Change Image' : 'Upload Image'}
                       </p>

                        {/* TABLET >>> */}
                       {file 
                       ?<p onClick={handleButtonClick}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Upload new image
                       </p>
                       :<p onClick={handleButtonClick}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Drag and drop image or <span className='text-[#571845] underline font-normal px-1 xl:underline-offset-2'>choose an Image</span> to upload
                       </p>
                       }
                       {/*<div className='text-xs text-center text-medium text-red-500 mt-4 xl:text-sm'>{error}</div>*/}
                   </div>
                     
              </div>

              {file &&
              <div className='flex items-center justify-between w-full bg-[#F6F5F6] rounded-md px-4 h-16 mt-4 md:px-6 xl:px-8 xl:h-20'>
                  <div className='flex items-start justify-start'>
                     <BsFillImageFill className='h-8 w-8 text-[#837780] xl:w-11 xl:h-11' />
                     <div className='flex flex-col items-start ml-2 md:ml-3 xl:ml-4'>
                         <p className='text-[11px] text-[#1A0313] font-medium xl:text-sm'>
                              {file.name}           
                         </p>
                         <p className='text-[9px] text-[#331F2D] font-medium pt-[2px] xl:text-sm'>
                              {file.size}         
                         </p>
                     </div>
                  </div>

                  <MdDelete onClick={()=>setFile(null)} className='text-[#837780] text-xl md:text-2xl xl:text-3xl' />
              </div>
              }



              <div className='w-full border-[1px] border-[#C6C0C4] mt-6 xl:mt-8'></div>


                        {/* EVENT GALLERY */}
              <div className='flex flex-col items-start w-full mt-4'>
                  <p className='text-xs text-[#1A0313] font-medium'>
                        Event Gallery
                  </p>
                  <p className='text-[10px] text-[#331F2D] font-medium pt-1 xl:text-sm'>
                        Images from past events. Maximum of 6         
                  </p>
              </div>


              <div className='flex flex-col items-center justify-center h-24 w-full border-[#C6C0C4] border-2 border-dashed rounded-md mt-4 px-5 md:h-16 xl:h-20'>
                     <input
                     className='hidden'
                     ref={galleryFileInputRef}
                    type="file"
                    accept=".pdf, .jpg, .jpeg, .png"
                    onChange={handleGalleryFileChange}
                    />
                    <div className='flex flex-col items-center justify-center w-full md:flex-row'>
                       <RxUpload onClick={handleButton} className='text-xl text-[#571845] xl:text-2xl' />
                       <p className='text-xs text-center font-normal text-[#571845] mt-2 md:hidden'>
                           {file ? 'Change Image' : 'Upload Image'}
                       </p>

                        {/* TABLET >>> */}
                       {galleryFile 
                       ?<p onClick={handleButton}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Upload new image
                       </p>
                       :<p onClick={handleButton}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Drag and drop image or <span className='text-[#571845] underline font-normal px-1 xl:underline-offset-2'>choose an Image</span> to upload
                       </p>
                       }
                       {/*<div className='text-xs text-center text-medium text-red-500 mt-4 xl:text-sm'>{error}</div>*/}
                   </div>
                     
              </div>

              {galleryFile &&
              <div className='flex items-center justify-between w-full bg-[#F6F5F6] rounded-md px-4 h-16 mt-4 md:px-6 xl:px-8 xl:h-20'>
                  <div className='flex items-start justify-start'>
                     <BsFillImageFill className='h-8 w-8 text-[#837780] xl:w-11 xl:h-11' />
                     <div className='flex flex-col items-start ml-2 md:ml-3 xl:ml-4'>
                         <p className='text-[11px] text-[#1A0313] font-medium xl:text-sm'>
                              {galleryFile.name}           
                         </p>
                         <p className='text-[9px] text-[#331F2D] font-medium pt-[2px] xl:text-sm'>
                              {galleryFile.size}         
                         </p>
                     </div>
                  </div>

                  <MdDelete onClick={()=>setGalleryFile(null)} className='text-[#837780] text-xl md:text-2xl xl:text-3xl' />
              </div>
              }



              <div className='w-full border-[1px] border-[#C6C0C4] mt-6 xl:mt-8'></div>


                        {/* EVENT VIDEO */}
              <div className='flex flex-col items-start w-full mt-4'>
                  <p className='text-xs text-[#1A0313] font-medium'>
                       Event Video
                  </p>
              </div>


              <div className='flex flex-col items-center justify-center h-24 w-full border-[#C6C0C4] border-2 border-dashed rounded-md mt-4 px-5 md:h-16 xl:h-20'>
                     <input
                     className='hidden'
                     ref={galleryFileInputRef}
                    type="file"
                    accept=".pdf, .jpg, .jpeg, .png"
                    onChange={handleGalleryFileChange}
                    />
                    <div className='flex flex-col items-center justify-center w-full md:flex-row'>
                       <RxUpload onClick={handleButton} className='text-xl text-[#571845] xl:text-2xl' />
                       <p className='text-xs text-center font-normal text-[#571845] mt-2 md:hidden'>
                           {file ? 'Change Image' : 'Upload Image'}
                       </p>

                        {/* TABLET >>> */}
                       {galleryFile 
                       ?<p onClick={handleButton}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Upload new video
                       </p>
                       :<p onClick={handleButton}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Drag and drop video or <span className='text-[#571845] underline font-normal px-1 xl:underline-offset-2'>choose an Video</span> to upload
                       </p>
                       }
                       {/*<div className='text-xs text-center text-medium text-red-500 mt-4 xl:text-sm'>{error}</div>*/}
                   </div>
                     
              </div>

              {galleryFile &&
              <div className='flex items-center justify-between w-full bg-[#F6F5F6] rounded-md px-4 h-16 mt-4 md:px-6 xl:px-8 xl:h-20'>
                  <div className='flex items-start justify-start'>
                     <BsFillImageFill className='h-8 w-8 text-[#837780] xl:w-11 xl:h-11' />
                     <div className='flex flex-col items-start ml-2 md:ml-3 xl:ml-4'>
                         <p className='text-[11px] text-[#1A0313] font-medium xl:text-sm'>
                              {galleryFile.name}           
                         </p>
                         <p className='text-[9px] text-[#331F2D] font-medium pt-[2px] xl:text-sm'>
                              {galleryFile.size}         
                         </p>
                     </div>
                  </div>

                  <MdDelete onClick={()=>setGalleryFile(null)} className='text-[#837780] text-xl md:text-2xl xl:text-3xl' />
              </div>
              }

              <div className='flex items-center justify-center w-full mt-5 text-[#571845] text-xs'>
                  -------- OR --------
              </div>

              <div className='flex items-center justify-start w-full mt-4'>
                  <input  className='h-9 w-full border-[2px] border-[#EEE8EC] rounded-md pl-3 text-[10px] xl:h-10 xl:text-xs xl:pl-4'
                  placeholder='Paste Video link here'
                  />
                  <button className='text-center h-9 rounded-md w-24 text-[#571845] bg-[#EEE8EC] text-[11px] ml-1 md:ml-2 xl:h-10 xl:w-28 xl:text-sm'>
                         Add Video
                  </button>
              </div>





                  {/* BUTTONS */}
              <div className='flex items-center justify-start w-full mt-10 md:mt-12'>
                   <div className='flex items-center justify-center w-28 h-8 rounded-md bg-[#EEE8EC] xl:h-9 xl:w-32'>
                       <SlNotebook className='text-[#571845] text-sm' />
                       <p className='text-[11px] text-[#571845] font-medium ml-2 xl:text-xs'>
                            Save as draft    
                       </p>
                   </div>
    
                   <div onClick={handleProceed}
                   className='flex items-center justify-center w-28 h-8 rounded-md bg-[#571845] ml-5 md:w-20 xl:h-9'>
                       <p className='text-[11px] text-[#ffffff] font-medium xl:text-xs'>
                            Proceed    
                       </p>
                   </div>
              </div>

          </div>
          }

    </div>
  )
}


export default EventMedia
