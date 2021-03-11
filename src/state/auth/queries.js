import axios from 'axios'

export const loadBox = () => {
  return axios.get('')
    .then(res => res.data)
    .catch(err => err.response.data)
};