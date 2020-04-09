import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import * as cnt from './constants';

axios.defaults.baseURL = cnt.API_URL + 'api';
axios.defaults.headers.common.Accept = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(async function(config) {
  config.headers.Authorization = await AsyncStorage.getItem('@token');
  return config;
});

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);

export default axios;
