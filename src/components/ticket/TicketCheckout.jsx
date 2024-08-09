import { useEffect, useState } from 'react';
import calendar from '../../assets/icons/calendar-2.svg'
import Info from '../../assets/icons/information.svg'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseEvents } from '../../features/EventActions';



const TicketCheckout = (props) => {
    const [first_name, setFirst_name] = useState('');
    const [fNameError, setFNameError] = useState(false);
    const [last_name, setLast_name] = useState('');
    const [lNameError, setLNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false);

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const user = useSelector((state) => state.auth.user)

    const dispatch = useDispatch();

    const isButtonDisabled = first_name === '' || last_name === '' || email === '' || confirmEmail === '' || phone === ''
                           || fNameError === true || lNameError === true || phoneError === true || emailError === true || confirmEmailError === true

    const values = {'first_name': first_name, 'last_name': last_name, 'email': email, 'confirmEmail': confirmEmail, 'phone': phone}

    const navigate = useNavigate();

    const purchaseValues = {
     "ticket_details": [
         {
             "name": "Gold",
             "quantity": props.value,
         }
     ],
     "event_id": props.data.id,
     "payment_method": "flutterwave",
     "customer_details": [
         {
             "name": first_name + '' + last_name,
             "email": email,
             "phone_number": phone
         },
        //  {
        //      "name": "Lara Damion",
        //      "email": "laradamion5@gmail.com",
        //      "phone_number": "08153329482"
        //  }
     ]
    }

    const handleSubmit = () => {
      dispatch(purchaseEvents(purchaseValues, setLoading, setError))
     //  navigate('/ticketSuccess', {state: email})
     //  console.log(purchaseValues)
    }


  return (
    <div className='flex flex-col items-center justify-start w-full px-5 mt-5 pb-20 md:px-8 md:flex-row md:items-start md:justify-between
                     md:mt-10 md:pb-28 lg:px-10 lg:mt-12 lg:pb-36 xl:px-16 xl:pb-44'>

            {/* LEFT */}
          <div className='flex flex-col items-start justify-start w-full md:flex-1'>
               <p className='text-lg text-[#571845] font-semibold lg:text-xl xl:text-2xl'>
                      Choose your ticket 
               </p>

               {/* LEFT CARD */}
               <div className='flex flex-col items-start justify-start w-full border-[1px] border-[#dddddd] rounded-lg bg-white 
                               py-10 mt-5 shadow-slate-500 lg:py-7 lg:pb-12 xl:pb-16 xl:px-6'>
                  <div className='flex flex-col items-start w-full px-4'>
                      <p className='text-lg text-[#331F2D] font-semibold lg:text-xl xl:text-2xl'>
                           {props.data.event_name}
                      </p>
                      <div className='flex items-center justify-start w-full mt-3'>
                          <img className="w-6 h-6 xl:w-7 xl:h-7"
                          src={calendar} alt="icons" />
                          <p className="text-sm font-medium text-[#331F2D] pl-4 w-[75%] lg:w-[70%] xl:text-base xl:w-[55%]">
                               {props.data.time_and_date.slice(0, 10)}
                          </p>
                      </div>
                  </div>

                  {/* LINE */}
                  <div className='border-[1px] border-[#dddddd] w-full mt-4'></div>

                  <p className='text-sm font-semibold text-[#331F2D] px-4 mt-4 lg:text-base'>
                        Contact Information
                  </p>

                  <div className='flex flex-col items-start justify-start w-full px-4 mt-4 md:mt-7'>
                    <div className='flex flex-col items-start justify-start w-full md:flex-row md:items-center md:justify-between'>
                         {/* FIRST NAME */}
                         <div className='flex flex-col items-start w-full mt-3 md:mt-0 md:w-[48%]'>
                              <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                                    First name    
                              </p>
                              <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                                xl:h-10 xl:text-xs ${fNameError && 'border-red-500'}`}
                              placeholder='John'
                              value={first_name}
                              onChange={(e)=>setFirst_name(e.target.value)}
                              required
                              type='text'
                              onBlur={()=>setFNameError(first_name.trim().length <= 1)}
                              />
                              {fNameError && !first_name && <p className='text-red-500 text-[10px] pt-1'>first name is required</p> }
                         </div>

                         {/* LAST NAME */}
                         <div className='flex flex-col items-start w-full mt-4 md:mt-0 md:w-[48%]'>
                              <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                                    Last name    
                              </p>
                              <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                                xl:h-10 xl:text-xs ${lNameError && 'border-red-500'}`}
                              placeholder='Doe'
                              value={last_name}
                              onChange={(e)=>setLast_name(e.target.value)}
                              required
                              type='text'
                              onBlur={()=>setLNameError(last_name.trim().length <= 1)}
                              />
                              {lNameError && !last_name && <p className='text-red-500 text-[10px] pt-1'>last name is required</p> }
                         </div>
                    </div>

                    <div className='flex flex-col items-start justify-start w-full md:flex-row md:items-center md:justify-between md:mt-4 lg:mt-6'>
                         {/* EMAIL */}
                         <div className='flex flex-col items-start w-full mt-3 md:mt-0 md:w-[48%]'>
                              <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                                  Email Address
                              </p>
                              <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                                xl:h-10 xl:text-xs ${emailError && 'border-red-500'}`}
                              placeholder='mail@example.com'
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                              required
                              type='text'
                              onBlur={()=>setEmailError(!/\S+@\S+\.\S+/.test(email))}
                              />
                              {emailError && !email && <p className='text-red-500 text-[10px] pt-1'>email is required</p> }
                         </div>

                         {/* CONFIRM EMAIL */}
                         <div className='flex flex-col items-start w-full mt-4 md:mt-0 md:w-[48%]'>
                              <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                                    Confirm Email Address    
                              </p>
                              <input className={`h-9 w-full border-[1px] border-[#E0E5F2] rounded-md pl-4 mt-1 text-[10px] outline-[#571845] 
                                                xl:h-10 xl:text-xs ${confirmEmailError && 'border-red-500'}`}
                              placeholder='mail@example.com'
                              value={confirmEmail}
                              onChange={(e)=>setConfirmEmail(e.target.value)}
                              required
                              type='text'
                              onBlur={()=>setConfirmEmailError(email !== confirmEmail)}
                              />
                              {confirmEmailError && confirmEmail && <p className='text-red-500 text-[10px] pt-1'>emails do not match</p> }
                         </div>
                    </div>

                             {/* PHONE NUMBER */}
                         <div className='flex flex-col items-start w-full mt-4 lg:mt-6'>
                              <p className='text-xs font-medium text-[#2A1D34] xl:text-sm'>
                                   Phone number   
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
                              {phoneError && !phone && <p className='text-red-500 text-[10px] pt-1'>wrong phone number format</p> }
                         </div>

                         <div className='flex items-center justify-start w-full bg-[#E0E1F7] h-14 rounded-sm mt-8 px-4 md:mt-6 md:h-11 
                                         lg:mt-8 lg:h-14 lg:w-[80%] xl:mt-10'>
                              <img src={Info} alt="info" />
                              <p className='text-xs font-medium text-[#331F2D] pl-3 xl:text-sm'>
                                  Please note that ticket will be sent to the email provided above   
                              </p>
                         </div>
                  </div>


               </div>
          </div>


          {/* RIGHT CARD */}
          <div className='flex flex-col items-center justify-start w-full border-[1px] border-[#dddddd] rounded-lg bg-white 
                               py-4 mt-3 shadow-slate-500 px-4 md:mt-12 md:w-[35%] md:h-80 md:ml-3 lg:w-[30%] xl:text-base xl:h-96 xl:px-6'>
              <div className='flex items-center justify-between w-full mb-3'>
                 <p className='text-sm text-[#331F2D] font-semibold lg:text-base xl:text-lg'>
                     Summary 
                 </p>
                 <p className='text-xs text-[#571845] font-semibold underline underline-offset-1 xl:text-sm'>
                     Coupon 
                 </p>
              </div>

              {/* TICKET PRICE */}
              <div className='flex flex-col items-center justify-center w-full mt-3'>
                <div className='flex items-center justify-between w-full'>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                         {props.value} x VIP Ticket 
                     </p>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                         ₦{props.ticket}
                     </p>
                 </div>
                 <div className='border-[1px] border-[#dddddd] w-full mt-4 opacity-50'></div>
              </div>

              {/* FEES */}
              <div className='flex flex-col items-center justify-center w-full mt-4'>
                <div className='flex items-center justify-between w-full'>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                         Fees 
                     </p>
                     <p className='text-[10px] text-[#331F2D] font-medium xl:text-sm'>
                         ₦{props.fees}
                     </p>
                 </div>
                 <div className='border-[1px] border-[#dddddd] w-full mt-4 opacity-50'></div>
              </div>

              {/* SUBTOTAL */}
              <div className='flex flex-col items-center justify-center w-full mt-4'>
                <div className='flex items-center justify-between w-full'>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                           Subtotal  
                     </p>
                     <p className='text-[10px] text-[#331F2D] font-medium xl:text-sm'>
                           ₦{props.subTotal}
                     </p>
                 </div>
                 <div className='border-[1px] border-[#dddddd] w-full mt-4 opacity-50'></div>
              </div>

              {/* TOTAL */}
              <div className='flex flex-col items-center justify-center w-full mt-4'>
                <div className='flex items-center justify-between w-full'>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                         Total 
                     </p>
                     <p className='text-xs text-[#331F2D] font-semibold xl:text-base'>
                          ₦{props.total}
                     </p>
                 </div>
              </div>

              <button onClick={handleSubmit}
              disabled={isButtonDisabled}
              className={`flex items-center justify-center text-sm text-white bg-[#571845] rounded-md h-10 w-full mt-10 xl:h-12 xl:rounded-lg xl:text-xl xl:font-medium
                          ${isButtonDisabled && 'bg-[#9f969c]'}`}>
                   { loading
                    ?<div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full">
                       <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                     </div>
                    : 'Check out'
                   }
              </button>
          </div>

    </div>
  )
}

export default TicketCheckout
