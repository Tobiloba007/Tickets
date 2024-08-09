import axios from 'axios';

const BASE_URL = 'https://tick.thrida.com/api'


// BLOG
export const getBlogs = (setBlogData, setLoading, setError) => async () => {
    setLoading(true)
    try{
      const response = await axios.get(`${BASE_URL}/articles`);
      if (response.status === 200) {
        setBlogData(response.data.data.data)
        // console.log(response.data.data.data, 'response')
      } else if (response.status !== 200) {
        console.log('request failed status code:', response.status);
      } 
    } catch(error) {
        if (error.response) {
            console.log(error.response)
            console.error('API Error:',error.response.status);
        } else if (error.request) {
          console.log(error.response.data.data.message);
          setError('Please check your internet connection...')
        } 
      };
  setLoading(false)

};