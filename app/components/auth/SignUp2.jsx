import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/umsLogo.svg'
import { useEffect, useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../../features/authentication/AuthActions';
import { IoIosArrowBack } from "react-icons/io";




export const SignUp2  = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedErrror, setCheckedError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErrror, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmError, setConfirmError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const values1 = useSelector((state) => state.auth.regData)


  const isButtonDisabled = isChecked === false || password === '' || confirmPassword === '' || phone === '' || address === ''
                           || passwordErrror === true || confirmError === true || phoneError === true || addressError === true

  const values2 = {'password': password, 'phone': phone, 'address': address}
  const values = {...values1, ...values2}

  const handleSubmit = () => {
    dispatch(createAccount(values, setError, setLoading, navigate))
   //  console.log(values);
  }

  return (
    <div className='flex flex-col items-center justify-start w-full px-5 py-8 max-w-screen-2xl mx-auto font-outfit md:px-10 lg:px-12 xl:px-20'>
      <div onClick={()=>navigate('/')}
      className='flex items-center justify-start w-full mt-2 xl:mt-6'>
          <img className='xl:w-32'
          src={logo} alt="logo" />
      </div>


      <div className='flex flex-col items-center justify-start w-full mt-10 md:w-[53%] lg:w-[37%] lg:mt-12 xl:mt-14 xl:w-[33%]'>
        <div onClick={()=>navigate(-1)}
        className='flex items-center justify-start w-full'>
            <IoIosArrowBack className='text-sm' />
            <p className='text-xs font-medium text-[#2A1D34] pl-1 xl:text-sm'>
                Back  
            </p>
        </div>

        <div className='flex flex-col items-center justify-start w-full mt-3'>
          <p className='text-lg font-semibold text-[#2A1D34] xl:text-2xl'>
              Sign up 
          </p>
          <p className='text-sm font-medium text-[#2A1D34] mt-2 xl:text-base xl:mt-4'>
              Kindly provide your details to sign up 
          </p>

          <div className='flex flex-col items-start justify-start w-full mt-6'>
               {/* PASSWORD */}
              <div className='flex flex-col items-start w-full mt-3'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                          Password  
                     </p>
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                        xl:h-10 xl:text-xs ${passwordErrror && 'border-red-500'}`}
                     placeholder='Password '
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     type='text'
                     onBlur={()=>setPasswordError(password.trim().length <= 6)}
                     />
                     {passwordErrror && !password && <p className='text-red-500 text-[10px] pt-1'>password is required</p>}
              </div>
              
               {/* CONFIRM PASSWORD */}
              <div className='flex flex-col items-start w-full mt-5 xl:mt-6'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                           Confirm password   
                     </p>
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] \
                                       xl:h-10 xl:text-xs ${confirmError && 'border-red-500'}`}
                     placeholder='confirm password'
                     value={confirmPassword}
                     onChange={(e)=>setConfirmPassword(e.target.value)}
                     type='text'
                     onBlur={()=>setConfirmError(password !== confirmPassword)}
                     />
                     {confirmError && !confirmPassword && <p className='text-red-500 text-[10px] pt-1'>passwords do not match</p>}
              </div>

               {/* PHONE */}
              <div className='flex flex-col items-start w-full mt-5 xl:mt-6'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                          Phone   
                     </p>
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                       xl:h-10 xl:text-xs ${phoneError && 'border-red-500'}`}
                     placeholder='090 0000 0000'
                     value={phone}
                     onChange={(e)=>setPhone(e.target.value)}
                     required
                     type='number'
                     onBlur={()=>setPhoneError(!/^(080|081|090|070|091)[0-9]{8}$/.test(phone))}
                     />
                     {phoneError && !phone && <p className='text-red-500 text-[10px] pt-1'>phone number is required</p>}
              </div>

               {/* ADDRESS */}
              <div className='flex flex-col items-start w-full mt-5 xl:mt-6'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                           Address   
                     </p>
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] ] 
                                       xl:h-10 xl:text-xs ${addressError && 'border-red-500'}`}
                     placeholder='12, example street'
                     value={address}
                     onChange={(e)=>setAddress(e.target.value)}
                     type='text'
                     onBlur={()=>setAddressError(address.trim().length <= 2)}
                     />
                     {addressError && !address && <p className='text-red-500 text-[10px] pt-1'>address is required</p>}
              </div>


              <div onClick={()=>setIsChecked(true)}
            className='flex items-center justify-start w-full mt-7 xl:mt-8'>
                 <div className={`flex items-center justify-center h-[15px] w-[15px] rounded-sm border-[1px] border-[#E0E5F2] 
                                 ${isChecked && 'bg-[#571845]'} xl:h-5 xl:w-5 ${checkedErrror && 'border-red-500'}`}>
                      {isChecked && <IoMdCheckmark className='text-white' />}
                 </div>
                 <p className='text-xs font-medium text-[#2A1D34] ml-3 xl:text-sm xl:ml-4'>
                       I have and agree to the website terms and conditions 
                 </p>
            </div>

          </div>

          <div className='text-xs w-full text-left text-medium text-red-500 mt-10 xl:text-sm xl:mt-10'>{error}</div>

          <div className='flex item-center justify-start w-full mt-3 xl:mt-4'>
            <button onClick={handleSubmit}
            disabled={isButtonDisabled}
            className={`flex items-center justify-center text-xs font-medium bg-[#571845] text-white h-10 w-full rounded-md 
                       ${isButtonDisabled && 'bg-[#9f969c]'} xl:h-10 xl:text-sm xl:rounded-lg`}>
                       { loading
                        ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                           <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                        </div>
                        : 'Sign Up'
                       }
            </button>
          </div>



          <div className='flex item-end justify-center w-full mt-8'>
            <p className='text-[10px] font-medium text-[#2A1D34] pt-[1.5px] xl:text-xs xl:pt-1'>
                Already have an account?
            </p>
            <p onClick={()=>navigate('/login')}
            className='text-xs font-medium text-[#571845] pl-1 underline underline-offset-1 xl:text-sm xl:pl-2'>
                Log In  
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}