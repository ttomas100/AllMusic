import axios from '../utils/axiosApi'
import serverApi from '../utils/servicesApi'

export const loadPlayers = () => {
  return axios()
    .get(serverApi.server + '/track/')
    .then(res => res.data)
    .catch(err => err.response.data)
};

export const postPlayers = (data) => {
    return axios()
      .post(serverApi.server + '/track/', data)
      .then(res => res.data)
      .catch(err => err.response.data)
};

// axios.post('https://reqres.in/invalid-url', article)
// .then(response => this.setState({ articleId: response.data.id }))
// .catch(error => {
//     this.setState({ errorMessage: error.message });
//     console.error('There was an error!', error);
// });



// export const loadTracks = (id) => {
//   return axios()
//     .get(api.spotify + '/albums/' + id + '/tracks?offset=0&limit=50')
//     .then(res => res.data)
//     .catch(err => err.response.data)
// };

// export const loadTrack = (id) => {
//   return axios()
//     .get(api.spotify + '/tracks/' + id)
//     .then(res => res.data)
//     .catch(err => err.response.data)
// };

// export const loadProfile = () => {
//   return axios()
//     .get(api.spotify + '/me')
//     .then(res => res.data)
//     .catch(err => err.response.data)
    
// };

// export const search = (payload) => {
//   return axios()
//     .get(api.spotify + '/search?q=' + payload + '&type=album,artist,track&limit=10')
//     .then(res => res.data)
//     .catch(err => err.response.data)
// };