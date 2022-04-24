import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const ApiClient = () => {
  const defaultOptions = {
    baseURL,
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async request => {
    console.log('request', request.headers);
    return request;
  });

  instance.interceptors.response.use(
    response => response,
    error => {
      console.log('error', error);
    },
  );

  return instance;
};

export default ApiClient();
