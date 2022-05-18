import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const ApiClient = () => {
  const defaultOptions = {
    baseURL,
  };

  const instance = axios.create(defaultOptions);

  return instance;
};

export default ApiClient();
