import { useNavigate } from 'react-router-dom'
import logo from '../../assets/umsLogo.svg'
import { useState } from 'react';
import { LoginAccount } from '../../features/authentication/AuthActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const isButtonDisabled = emailError === true || email === ''

  const values = {'email': email}

  const dispatch = useDispatch();

  const handleSubmit = () => {
    // dispatch(LoginAccount(values, setError, setLoading, navigate))
    navigate('/resetPassword')
  }


  return (
    <div className='flex flex-col items-center justify-center w-full px-5 py-6 max-w-screen-2xl mx-auto font-outfit md:px-10 lg:px-12 xl:px-20'>
      <div onClick={()=>navigate('/')}
      className='flex items-center justify-between w-full xl:mt-6'>
          <img className='w-[112px] h-322px] lg:w-[160px] lg:h-[40px] xl:w-[168px] xl:h-[48px]'
         src={logo} alt='logo' />
      </div>


      <div className='flex flex-col items-center justify-center h-[65vh] w-full mt-14 md:w-[53%] lg:w-[37%] lg:mt-16 xl:mt-20 xl:w-[33%]'>
        <div className='flex flex-col items-center justify-start w-full mt-3'>
          <p className='text-lg font-semibold text-[#2A1D34] xl:text-2xl'>
               Forgot Password   
          </p>
          <p className='text-sm font-medium text-[#2A1D34] mt-2 xl:text-base xl:mt-4'>
               Provide the email linked to your account 
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
              

          </div>


          <div className='text-xs w-full text-left text-medium text-red-500 mt-10 xl:text-sm xl:mt-10'>{error}</div>

          <div className='flex item-center justify-start w-full mt-1 xl:mt-4'>
            <button onClick={handleSubmit}
            disabled={isButtonDisabled}
            className={`flex items-center justify-center text-xs font-medium bg-[#571845] text-white h-10 w-full rounded-md 
                       ${isButtonDisabled && 'bg-[#9f969c]'} xl:h-10 xl:text-sm xl:rounded-lg`}>
                       { loading
                        ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                           <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                         </div>
                        : 'Send Link'
                       }
            </button>
          </div>



          <div className='flex item-end justify-center w-full mt-16'>
            <Link to='/login'
            className='text-xs font-medium text-[#571845] pl-1 underline underline-offset-1 xl:text-sm xl:pl-2'>
                Login  
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
