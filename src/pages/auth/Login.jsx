import { useNavigate } from 'react-router-dom'
import logo from '../../assets/umsLogo.svg'
import { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { LoginAccount } from '../../features/authentication/AuthActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PiEye, PiEyeSlash } from "react-icons/pi";




export const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErrror, setPasswordError] = useState(false);

  const [hide, setHide] = useState(false)

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const isButtonDisabled = emailError === true || passwordErrror === true || password === '' || email === ''

  const values = {'email': email, 'password': password}

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(LoginAccount(values, setError, setLoading, navigate))
  }


  return (
    <div className='flex flex-col items-center justify-start w-full px-5 py-6 max-w-screen-2xl mx-auto font-outfit md:px-10 lg:px-12 xl:px-20'>
      <div onClick={()=>navigate('/')}
      className='flex items-center justify-between w-full xl:mt-6'>
          <img className='w-[112px] h-322px] lg:w-[160px] lg:h-[40px] xl:w-[168px] xl:h-[48px]'
         src={logo} alt='logo' />
      </div>


      <div className='flex flex-col items-center justify-start w-full mt-14 md:w-[53%] lg:w-[37%] lg:mt-16 xl:mt-20 xl:w-[33%]'>
        <div className='flex flex-col items-center justify-start w-full mt-3'>
          <p className='text-lg font-semibold text-[#2A1D34] xl:text-2xl'>
                 Log in
          </p>
          <p className='text-sm font-medium text-[#2A1D34] mt-2 xl:text-base xl:mt-4'>
              Enter your email and password to sign in 
          </p>

          <div className='flex flex-col items-start justify-start w-full mt-6'>
               {/* EMAIL */}
              <div className='flex flex-col items-start w-full mt-3'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                          Email  
                     </p>
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                       xl:h-10 xl:text-xs ${emailError && 'border-red-500'}`}
                     placeholder='email@example.com'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     required
                     type='email'
                     onBlur={()=>setEmailError(!/\S+@\S+\.\S+/.test(email))}
                     />
                     {emailError && !email && <p className='text-red-500 text-[10px] pt-1'>Email Required</p> }
              </div>
              
               {/* PASSWORD */}
              <div className='flex flex-col items-start w-full mt-7 xl:mt-8'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                           Confirm password   
                     </p>
                     <div className='relative w-full'>
                         <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                         xl:h-10 xl:text-xs ${passwordErrror && 'border-red-500'}`}
                         placeholder='password'
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                         required
                         type={hide ? 'text' : 'password'}
                         onBlur={()=>setPasswordError(password.trim().length <= 6)}
                         />
                         {hide
                         ?<PiEyeSlash onClick={()=>setHide(!hide)} className='absolute top-3 right-4 text-xl' />
                         :<PiEye onClick={()=>setHide(!hide)} className='absolute top-3 right-4 text-xl' />
                         }
                     </div>
                     {passwordErrror && !password && <p className='text-red-500 text-[10px] pt-1'>Password is Required</p> }
              </div>

              <div className='flex items-center justify-between w-full mt-7 xl:mt-8'>
                   <div onClick={()=>setIsChecked(true)}
                       className='flex items-center justify-start'>
                      <div className={`flex items-center justify-center h-[15px] w-[15px] rounded-sm border-[1px] border-[#E0E5F2] 
                                      ${isChecked && 'bg-[#571845]'} xl:h-5 xl:w-5`}>
                           {isChecked && <IoMdCheckmark className='text-white' />}
                      </div>
                      <p className='text-xs font-medium text-[#2A1D34] ml-3 xl:text-sm xl:ml-4'>
                            Keep me logged in
                      </p>
                 </div>
                 <Link to='/forgotPassword' className='text-xs font-medium text-[#2A1D34] ml-3 xl:text-sm xl:ml-4'>
                      Forgot password?
                 </Link>
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
                        : 'Sign In'
                       }
            </button>
          </div>



          <div className='flex item-end justify-center w-full mt-8'>
            <p className='text-[10px] font-medium text-[#2A1D34] pt-[1.5px] xl:text-xs xl:pt-1'>
                Don't have an account yet?
            </p>
            <p onClick={()=>navigate('/signup1')}
            className='text-xs font-medium text-[#571845] pl-1 underline underline-offset-1 xl:text-sm xl:pl-2'>
                Sign Up  
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}