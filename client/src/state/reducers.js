import authReducer from './auth/reducers';
import productReducer from './spotify/reducers';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ auth, spotify }, action) => ({
  auth: authReducer(auth, action),
  spotify: productReducer(spotify, action)
});