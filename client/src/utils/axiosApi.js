import axios from 'axios'
import serverApi from './servicesApi'


// eslint-disable-next-line import/no-anonymous-default-export
export default function () {

  const instance = axios.create({
    baseURL: serverApi.sever,
    headers: {
      'Content-Type': 'application/json',
    }
  });


  instance.interceptors.response.use(
    response => (response),
    error => {
      console.log('REQUEST error', error);

      if (!error.response) {
        error.response = {data: {genericError: error}};
      }

      return Promise.reject(error)
    }
  );

  return instance
}