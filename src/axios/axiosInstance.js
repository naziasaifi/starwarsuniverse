import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com/api', // Replace with your base URL
  headers: {
    'Content-Type': 'application/json',
  //  Authorization: 'Bearer your_token' // Replace with your authorization token
  }
});

axiosInstance.interceptors.request.use(
    (config) => {
      // Add any modifications to the request config here
      // For example, you can add a custom header or transform the request data
      return config;
    },
    (error) => {
      // Handle request errors here
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
    if (error.response && error.response.status === 401) {
      console.log('call the refresh token api here')
      // Handle 401 error, e.g., redirect to login or refresh token
    }
    return Promise.reject(error)
  },
  );

  export default axiosInstance;