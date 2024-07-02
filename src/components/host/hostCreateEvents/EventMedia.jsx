import React, { useEffect, useRef, useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RxUpload } from "react-icons/rx";
import { BsFillImageFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";




const EventMedia = ({setActive, active, setActiveForm}) => {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState(false);

    const [galleryFile, setGalleryFile] = useState(null);

    const [video, setVideo] = useState(null);

      const [error, setError] = useState(null);

      const galleryFileInputRef = useRef(null);
      const fileInputRef = useRef(null);
      const videoInputRef = useRef(null);


      const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
     };

     const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
      };

     const handleButtonClick = () => {
      fileInputRef.current.click();
    };

      const handleGalleryFileChange = (event) => {
        setGalleryFile(event.target.files[0]);
        console.log(galleryFile);
     };

     const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
        console.log(video);
      };

     const handleVideoButton = () => {
        videoInputRef.current.click();
    };

     const handleButton = () => {
      galleryFileInputRef.current.click();
    };

    const handleProceed = () => {
        // setActive(5)
        setActiveForm(2)
    }

    useEffect(()=>{
        console.log(file, 'Active file')
    },[file])

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
                     <img className='w-8 h-8 rounded-md object-cover'
                     src={URL.createObjectURL(galleryFile)}
                     alt={'preview'}
                      />
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
                     ref={fileInputRef}
                    type="file"
                    accept=".pdf, .jpg, .jpeg, .png"
                    onChange={handleFileChange}
                    disabled={images.length >= 6}
                    />
                    <div className='flex flex-col items-center justify-center w-full md:flex-row'>
                       <RxUpload onClick={handleButtonClick} className='text-xl text-[#571845] xl:text-2xl' />
                       <p className='text-xs text-center font-normal text-[#571845] mt-2 md:hidden'>
                           {file ? 'Change Image' : 'Upload Image'}
                       </p>

                        {/* TABLET >>> */}
                       {images.length === 1 || images.length === 2 || images.length === 3 || images.length === 4 || images.length === 5
                       ?<p onClick={handleButtonClick}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Upload new image
                       </p>
                       : images.length === 6
                       ?<p onClick={handleButtonClick}
                       className='hidden md:flex text-xs text-center font-normal text-red-400 mt-2 ml-2 xl:ml-3 xl:text-sm'>
                            You have reached the maximum upload limit of <b className='pl-1'>6 images</b>
                       </p>
                       :<p onClick={handleButtonClick}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Drag and drop image or <span className='text-[#571845] underline font-normal px-1 xl:underline-offset-2'>choose an Image</span> to upload
                       </p>
                       }
                   </div>
                     
              </div>

              {images.map((image, index) => (
              <div className='flex items-center justify-between w-full bg-[#F6F5F6] rounded-md px-4 h-16 mt-4 md:px-6 xl:px-8 xl:h-20'>
                  <div className='flex items-start justify-start'>
                      <img className='w-8 h-8 rounded-md object-cover'
                     src={URL.createObjectURL(image)}
                     alt={`preview ${index}`}
                      />
                     <div className='flex flex-col items-start ml-2 md:ml-3 xl:ml-4'>
                         <p className='text-[11px] text-[#1A0313] font-medium xl:text-sm'>
                              {image.name}           
                         </p>
                         <p className='text-[9px] text-[#331F2D] font-medium pt-[2px] xl:text-sm'>
                              {image.size}         
                         </p>
                     </div>
                  </div>

                  <MdDelete onClick={() => handleRemoveImage(index)} className='text-[#837780] text-xl md:text-2xl xl:text-3xl' />
              </div>
              ))}



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
                     ref={videoInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleVideoChange}
                    />
                    <div className='flex flex-col items-center justify-center w-full md:flex-row'>
                       <RxUpload onClick={handleVideoButton} className='text-xl text-[#571845] xl:text-2xl' />
                       <p className='text-xs text-center font-normal text-[#571845] mt-2 md:hidden'>
                           {file ? 'Change Image' : 'Upload Image'}
                       </p>

                        {/* TABLET >>> */}
                       {video 
                       ?<p onClick={handleVideoButton}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Upload new video
                       </p>
                       :<p onClick={handleVideoButton}
                       className='hidden md:flex text-xs text-center font-normal text-[#1A0313] mt-2 ml-2 xl:ml-3 xl:text-sm'>
                           Drag and drop video or <span className='text-[#571845] underline font-normal px-1 xl:underline-offset-2'>choose a Video</span> to upload
                       </p>
                       }
                       {/*<div className='text-xs text-center text-medium text-red-500 mt-4 xl:text-sm'>{error}</div>*/}
                   </div>
                     
              </div>

              {video &&
              <div className='flex items-center justify-between w-full bg-[#F6F5F6] rounded-md px-4 py-3 mt-4 md:px-6 xl:px-8 '>
                  <div className='flex items-start justify-start flex-wrap md:flex-nowrap'>
                     <video className='w-full h-24 rounded-md object-cover md:w-48 xl:w-80 xl:h-32'>
                       <source src={URL.createObjectURL(video)} type={video.type} />
                     </video>
                     <div className='flex items-center justify-between w-full mt-2 md:ml-12 md:w-[60%] xl:ml-16 xl:w-[50%]'>
                         <div className='w-[90%] xl:w-full'>
                             <p className='text-[11px] text-[#1A0313] font-medium xl:text-sm'>
                                  {video.name}           
                             </p>
                             <p className='text-[9px] text-[#331F2D] font-medium pt-[2px] xl:text-sm'>
                                  {video.size}         
                             </p>
                         </div>
                         <MdDelete onClick={()=>setVideo(null)} className='text-[#837780] text-xl ml-4 md:text-2xl md:ml-0 xl:text-4xl xl:ml-8' />
                     </div>
                  </div>
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
