import axios from '../utils/axiosApi'
import serverApi from '../utils/servicesApi'

export const loadPlayers = async () => {
  try {
    const res = await axios()
      .get(serverApi.server + '/track/');
    return res.data;
  } catch (err) {
    return err.response.data;
  }
    
};

export const postPlayers = async (data) => {
    try {
    const res = await axios()
      .post(serverApi.server + '/track/', data);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const loadPlayList = async (profile) => {
  try {
    const res = await axios()
      .get(serverApi.server + '/track/' + profile);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
    
};