import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import * as cnt from './constants';

axios.defaults.baseURL = cnt.API_URL + 'api';
axios.defaults.headers.common.Accept = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(async function(config) {
  config.headers.Authorization = await AsyncStorage.getItem('@token');
  return config;
});

// axios.interceptors.response.use(
//   response => response,
//   error => {
//     return Promise.reject(error);
//   },
// );

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    // Do something with response error
    if (error.response.status === 401) {
      console.log('unauthorized, logging out ...');
      AsyncStorage.clear();
    }
    return Promise.reject(error.response);
  },
);

export default axios;
