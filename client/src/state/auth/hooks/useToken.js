import { useStateValue } from '../../index'
import {
  setToken
} from '../actions'
import queryString from 'query-string'

const useToken = () => {
  const [{auth}, dispatch] = useStateValue();

  const data = async (payload) => {
    let parsed = queryString.parse(payload);

    const token = localStorage.getItem('access_token') || null;

    if (!token) {
      localStorage.setItem('access_token', parsed.access_token);
    } 
    dispatch(setToken(parsed))
  };

  return [auth, data]
};

export default useToken
