import axios from 'axios';
import { setLoggedIn, setLoginToken, setUser } from './AuthSlice';

const BASE_URL = 'https://tick.thrida.com/api'



// CREATE ACCOUNT
export const createAccount = (values, setError, setLoading, navigate) => async () => {
    setLoading(true)
    try{
      const response = await axios.post(`${BASE_URL}/user/signup`, values);
      if (response.status === 201) {
        console.log('Registration successfull');
        console.log(response.data);
        navigate('/login')
      } else if (response.status !== 201) {
        console.log('Registration failed with status code:', response.status);
      } 
    } catch(error) {
        if (error.response) {
          // The server responded with an error (e.g., HTTP status code 4xx or 5xx)
          setError(error.response.data.message)
          console.log(error.response.data.message)
          console.error('API Error:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received (e.g., network issue)
          setError('Please check your internet connection...')
          console.error('Network Error:', error.request);
        } 
      };
      setLoading(false)
    
  };


// LOGIN
export const LoginAccount = (values, setError, setLoading, navigate) => async (dispatch) => {
    setLoading(true)
    try{
      const response = await axios.post(`${BASE_URL}/user/signin`, values);
      if (response.status === 200) {
        const Token = response.data.data.access_token
        const userDetails = response.data.data.UserDetails
        localStorage.setItem('token', JSON.stringify(Token));
        localStorage.setItem('userData', JSON.stringify(userDetails));
        dispatch(setLoggedIn(true))

        // dispatch(setLoginToken(Token))
        // dispatch(setUser(userDetails))

        console.log(response.data.status);
        console.log(response.data);
        navigate(userDetails.user_type === 'host' ? '/hostDashboard' : userDetails.user_type === 'user' ?  '/userDashboard' : userDetails.user_type === 'null' && '/' )
      } else if (response.status !== 201) {
        console.log('Registration failed with status code:', response.status);
      } 
    } catch(error) {
        if (error.response) {
          // The server responded with an error (e.g., HTTP status code 4xx or 5xx)
          setError(error.response.data.message)
          console.log(error.response.data.message)
          console.error('API Error:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received (e.g., network issue)
          setError('Please check your internet connection...')
          console.error('Network Error:', error.request);
        } 
      };
      setLoading(false)
    
  };


  //  // LOGIN
  //  export const login = (values, setError, navigate) => async (dispatch) => {
  //   dispatch(setLoading(true));
  //   try{
  //     const response = await axios.post(`${BASE_URL}/auth/login`, values);
  //     if (response.status === 200) {
  //       localStorage.setItem('userData', JSON.stringify(response.data.data.user));
  //       const Token = response.data.data.access_token
  //       // console.log(response.data.data.user, 'Hello world');
  //       AsyncStorage.setItem('token', Token);
  //       dispatch(setLoginToken(Token))
  //       dispatch(setLoggedIn(true))
  //       navigate(response.data.data.user.user_type === 'buyer' && response.data.data.user.is_onboarding_complete === true  ? '/buyer-dashboard' 
  //                : response.data.data.user.user_type === 'seller' && response.data.data.user.is_onboarding_complete === true ? '/seller-dashboard' 
  //                : response.data.data.user.is_onboarding_complete === false && '/select-role')
  //     } else if (response.status !== 200) {
  //       console.log('Login failed with status code:', response.status);
  //     } 
  //   } catch(error) {
  //       if (error.response.data.message) {
  //         console.log(error.response)
  //         setError(error.response.data.message)
  //         if(error.response.data.message === 'email not verified'){
  //              navigate('/verification', { state: { data: values.email } })
  //         }
  //         console.error('API Error:', error.response.status);
  //       } else if (error.request) {
  //         // The request was made but no response was received (e.g., network issue)
  //         setError('Please check your internet connection...')
  //         console.error('Network Error:', error.request);
  //       } 
  //     };
    
  //   dispatch(setLoading(false));
  // };