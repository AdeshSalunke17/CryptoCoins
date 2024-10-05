import axios from "axios";

const instance = axios.create({
    baseURL: 'https://openapiv1.coinstats.app', // Your API base URL
  });

  instance.interceptors.request.use(
    function(config) {
      //setting default headers
      config.headers['accept'] = `application/json`; 
      config.headers['X-API-KEY']=`8q1zGdYO5XSRkuPI5c0n3jiNvdQ3HGeKW2IsY5b+knE=`
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  
  export default instance;