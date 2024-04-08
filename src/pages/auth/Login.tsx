import { useNavigate } from 'react-router-dom'
import logo from '../../assets/umsLogo.svg'
import { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";



interface Props {
    name?: 'james'
}

export const Login = ({name}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordErrror, setPasswordError] = useState<boolean>(false);

  const navigate = useNavigate();

  const isButtonDisabled = emailError === true || passwordErrror === true || password === '' || email === ''

  const values = {'email': email, 'password': password}

  const handleSubmit = () => {
    navigate('/userDashboard')
    console.log(values)
  }


  return (
    <div className='flex flex-col items-center justify-start w-full px-5 py-8 max-w-screen-2xl mx-auto font-outfit md:px-10 lg:px-12 xl:px-20'>
      <div onClick={()=>navigate('/')}
      className='flex items-center justify-start w-full mt-2 xl:mt-6'>
          <img className='xl:w-32'
          src={logo} alt="logo" />
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
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                     xl:h-10 xl:text-xs ${passwordErrror && 'border-red-500'}`}
                     placeholder='password'
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     required
                     type='text'
                     onBlur={()=>setPasswordError(password.trim().length <= 6)}
                     />
                     {passwordErrror && !password && <p className='text-red-500 text-[10px] pt-1'>password is Required</p> }
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
                 <p className='text-xs font-medium text-[#2A1D34] ml-3 xl:text-sm xl:ml-4'>
                      Forgot password?
                 </p>
            </div>

          </div>


          <div className='flex item-center justify-start w-full mt-8 xl:mt-10'>
            <button onClick={handleSubmit}
            disabled={isButtonDisabled}
            className={`text-center text-xs font-medium bg-[#571845] text-white h-10 w-full rounded-md 
                       ${isButtonDisabled && 'bg-[#9f969c]'} xl:h-10 xl:text-sm xl:rounded-lg`}>
                Sign Up
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