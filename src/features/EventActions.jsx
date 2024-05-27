import axios from 'axios';

const BASE_URL = 'https://tick.thrida.com/api'



// HOME EVENTS
export const homeEvents = (setGeneralEvents, setLoading, setError) => async () => {
        setLoading(true)
        try{
          const response = await axios.get(`${BASE_URL}/events`);
          if (response.status === 200) {
            setGeneralEvents(response.data.data.data)
            // console.log(response.data.data.data)
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

// UPCOMING EVENTS
export const upcomingEvents = (setUpcoming, setLoading, setError) => async () => {
        setLoading(true)
        try{
          const response = await axios.get(`${BASE_URL}/events/upcoming`);
          if (response.status === 200) {
            setUpcoming(response.data.data.data)
            // console.log(response.data.data.data)
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


// TRENDING EVENTS
export const trendingEvents = (setTrending, setLoading, setError) => async () => {
        setLoading(true)
        try{
          const response = await axios.get(`${BASE_URL}/events/trending`);
          if (response.status === 200) {
            setTrending(response.data.data)
            // console.log(response.data.data)
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

// RECENT EVENTS
export const recentEvents = (setRecent, setLoading, setError) => async () => {
        setLoading(true)
        try{
          const response = await axios.get(`${BASE_URL}/events/recents`);
          if (response.status === 200) {
            setRecent(response.data.data.data)
            // console.log(response.data.data.data)
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


// ALL EVENTS
export const allEvents = (setAll, setLoading, setError) => async () => {
        setLoading(true)
        try{
          const response = await axios.get(`${BASE_URL}/events?tags=recent,upcoming`);
          if (response.status === 200) {
            setAll(response.data.data.data)
            // console.log(response.data.data.data)
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
