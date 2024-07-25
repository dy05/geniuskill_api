import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
//import SyncStorage from 'sync-storage';

//axios.defaults.baseURL = 'http://localhost:8001/api';
// axios.defaults.baseURL = 'http://192.168.1.25:8001/api';
axios.defaults.baseURL = 'https://services.geniuskill.fr/api';

axios.interceptors.request.use(async function (config) {
    // const token = await AsyncStorage.getItem('token');
//    const token = '23|yhoLxHJdRGKoYZICRyrbAPxHDYdGH8EyVeYHyKLz';
    //const token = localStorage.getItem('token');
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
