import { useState } from 'react'
import { useStateValue } from '../../index'
import { loadProfile } from '../queries'
import { listProfile } from '../actions'

const useProfile = () => {
  const [{spotify}, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);


  const setProfile = (profile) => {

    localStorage.removeItem('profile');
    const prof = localStorage.getItem('profile') || null;

    if (!prof) {

      localStorage.setItem('profile', profile)
    }
  };

  const request = async () => {
    setIsLoading(true);

    const response = await loadProfile();

    if (response) {


      const { email } = response;

      console.log(email)

      setProfile(email);

      dispatch(listProfile(response))
    } else {
      console.log('false')
      const err = [];
      dispatch(listProfile(err))
    }
    setIsLoading(false)
  };

  return [isLoading, request]
};

export default useProfile
