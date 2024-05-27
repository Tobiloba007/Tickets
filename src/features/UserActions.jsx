import axios from 'axios';

const BASE_URL = 'https://tick.thrida.com/api'



// CREATE SUPPORT TICKET
export const createSupportTicket = (values, setError, setLoading, setSubject, setMessage) => async () => {
  setLoading(true)
  setError('')
  try{
    const response = await axios.post(`${BASE_URL}/support`, values);
    if (response.status === 201) {
      console.log(response.data.message);
      setError(response.data.message)
      setSubject('')
      setMessage('')
    } else if (response.status !== 201) {
      console.log('Registration failed with status code:', response.status);
    } 
  } catch(error) {
      if (error.response) {
        // The server responded with an error (e.g., HTTP status code 4xx or 5xx)
        setError(error.response.data)
        console.log(error.response.data)
        console.error('API Error:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received (e.g., network issue)
        setError('Please check your internet connection...')
        console.error('Network Error:', error.request);
      } 
    };
    setLoading(false)
  
};