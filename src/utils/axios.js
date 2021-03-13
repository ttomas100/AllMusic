import axios from 'axios'
import api from './services'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {

  const instance = axios.create({
    baseURL: api.spotify,
    headers: {
      'Content-Type': 'application/json',
    }
  });


  instance.interceptors.request.use(async function (config) {
    const token = localStorage.getItem('access_token');

    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }

    return config
  });

  instance.interceptors.response.use(
    response => (response),
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
      }

      console.log('REQUEST error', error);

      if (!error.response) {
        error.response = {data: {genericError: error}};
      }

      return Promise.reject(error)
    }
  );

  return instance
}