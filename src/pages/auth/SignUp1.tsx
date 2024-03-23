import { useNavigate } from 'react-router-dom'
import logo from '../../assets/umsLogo.svg'
import { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";



interface Props {
    name?: 'james'
}

export const SignUp1 = ({name}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean | string | null>('user');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [userNameError, setUserNameError] = useState<boolean>(false);
  const [firstName, setFirstUserName] = useState<string>('');
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastName, setLastUserName] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<boolean>(false);


  const handleCheck = (item: string) => {
    // setIsChecked(!isChecked)
    setIsChecked((prevIndex: boolean | null | string) => (prevIndex === item ? null : item));

  }

  const navigate = useNavigate();

  const isButtonDisabled = email === '' || userName === '' || firstName === '' || lastName === '' 
                          || emailError === true || userNameError === true || firstNameError === true || lastNameError === true

  const values = {'user_type': isChecked, 'email': email, 'user_name': userName, 'first_name': firstName, 'last_name': lastName}

  const handleSubmit = () => {
    navigate('/signup2')
    console.log(values)
    
  }

  return (
    <div className='flex flex-col items-center justify-start w-full px-5 py-8 max-w-screen-2xl mx-auto font-outfit md:px-10 lg:px-12 xl:px-20'>
      <div onClick={()=>navigate('/')}
      className='flex items-center justify-start w-full mt-2 xl:mt-6'>
          <img className='xl:w-32'
          src={logo} alt="logo" />
      </div>


      <div className='flex flex-col items-center justify-start w-full mt-10 md:w-[53%] lg:w-[37%] lg:mt-12 xl:mt-14 xl:w-[33%]'>
        <div className='flex flex-col items-center justify-start w-full mt-3'>
          <p className='text-lg font-semibold text-[#2A1D34] xl:text-2xl'>
              Sign up 
          </p>
          <p className='text-sm font-medium text-[#2A1D34] mt-2 xl:text-base xl:mt-4'>
              Kindly provide your details to sign up 
          </p>

          <div className='flex items-center justify-center mt-8 xl:mt-10'>
            <div onClick={()=>handleCheck('host')}
            className='flex items-center justify-start'>
                 <div className={`flex items-center justify-center h-[15px] w-[15px] rounded-sm border-[1px] border-[#E0E5F2] 
                                 ${isChecked === 'host' && 'bg-[#571845]'} xl:h-5 xl:w-5`}>
                      {isChecked === 'host' && <IoMdCheckmark className='text-white' />}
                 </div>
                 <p className='text-xs font-medium text-[#2A1D34] ml-2 xl:text-sm xl:ml-3'>
                     Host 
                 </p>
            </div>

            <div onClick={()=>handleCheck('user')}
            className='flex items-center justify-start ml-7'>
                 <div className={`flex items-center justify-center h-[15px] w-[15px] rounded-sm border-[1px] border-[#E0E5F2] 
                                 ${isChecked === 'user' && 'bg-[#571845]'} xl:h-5 xl:w-5`}>
                      {isChecked === 'user' && <IoMdCheckmark className='text-white' />}
                 </div>
                 <p className='text-xs font-medium text-[#2A1D34] ml-2 xl:text-sm xl:ml-3'>
                     User
                 </p>
            </div>
          </div>

          <div className='flex flex-col items-start justify-start w-full mt-6'>
               {/* EMAIL */}
              <div className='flex flex-col items-start w-full mt-3'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                         Email 
                     </p>
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                        xl:h-10 xl:text-xs ${emailError && 'border-red-500'}`}
                     placeholder='mail@example.com'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     type='email'
                     onBlur={()=>setEmailError(!/\S+@\S+\.\S+/.test(email))}
                     />
                     {emailError && !email && <p className='text-red-500 text-[10px] pt-1'>email is required</p>}
              </div>
              
               {/* USERNAME */}
              <div className='flex flex-col items-start w-full mt-5 xl:mt-6'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                         Username  
                     </p>
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                        xl:h-10 xl:text-xs ${userNameError && 'border-red-500'}`}
                     placeholder='johnDoe1'
                     value={userName}
                     onChange={(e)=>setUserName(e.target.value)}
                     type='text'
                     onBlur={()=>setUserNameError(userName.trim().length <= 1)}
                     />
                     {userNameError && !userName && <p className='text-red-500 text-[10px] pt-1'>username is required</p>}
              </div>

               {/* FIRSTNAME */}
              <div className='flex flex-col items-start w-full mt-5 xl:mt-6'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                          First name  
                     </p>
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                        xl:h-10 xl:text-xs ${firstNameError && 'border-red-500'}`}
                     placeholder='John'
                     value={firstName}
                     onChange={(e)=>setFirstUserName(e.target.value)}
                     type='text'
                     onBlur={()=>setFirstNameError(firstName.trim().length <= 1)}
                     />
                     {firstNameError && !firstName && <p className='text-red-500 text-[10px] pt-1'>first name is required</p>}
              </div>

               {/* LASTNAME */}
              <div className='flex flex-col items-start w-full mt-5 xl:mt-6'>
                     <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                          Last name  
                     </p>
                     <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                        xl:h-10 xl:text-xs ${lastNameError && 'border-red-500'}`}
                     placeholder='Doe'
                     value={lastName}
                     onChange={(e)=>setLastUserName(e.target.value)}
                     type='text'
                     onBlur={()=>setLastNameError(lastName.trim().length <= 1)}
                     />
                     {lastNameError && !lastName && <p className='text-red-500 text-[10px] pt-1'>last name is required</p>}
              </div>

          </div>


          <div className='flex item-center justify-start w-full mt-8 xl:mt-10'>
            <button onClick={handleSubmit}
            disabled={isButtonDisabled}
            className={`text-center text-xs font-medium bg-[#571845] text-white h-8 w-[90px] rounded-md 
                       ${isButtonDisabled && 'bg-[#9f969c]'} xl:h-10 xl:w-28 xl:text-sm xl:rounded-lg`}>
                Continue
            </button>
            <p className='text-xs font-medium text-[#2A1D34] pt-2 pl-5 xl:text-sm xl:pl-6'>
                1/2  
            </p>
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