import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'http://localhost:8001/api';

axios.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        config.headers["Accept"] = 'application/json';
    }

    if (config.headers['Content-Type'] !== 'multipart/form-data') {
        config.headers.setContentType('application/json');
    }

    config.headers.setAccept('application/json');

    return config;
});

axios.interceptors.response.use(
  function (response) {
      return response;
  },
  function (error) {
      let _message = error.response?.data?.message ?? '';
      if (error.response?.status?.toString() === '401' &&  ['Token expiré', 'Jeton non valide'].includes(_message)) {
          // setAuthUser({}).then();
      }

      return Promise.reject(error);
  },
);


export default axios;
