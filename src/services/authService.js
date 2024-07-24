import axios from '../../utils/axios';
//import SyncStorage from 'sync-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function login(email, password) {
    return axios.post('/auth/login', {
        email: email,
        password: password,
    });
}

export function register(data) {
    return axios.post('/auth/register', data);
}

export function setAuthToken(token) {
    if (token) {
        //localStorage/.setItem('token', token);
        AsyncStorage.setItem('token', token);
    } else {
        //localStorage.removeItem('token');
        AsyncStorage.removeItem('token');
    }
}

export function setAuthUser(user) {
    if (user) {
        //localStorage.setItem('authUser', JSON.stringify(user));
        AsyncStorage.setItem('authUser', JSON.stringify(user));
    } else {
        //localStorage.removeItem('authUser');
        AsyncStorage.removeItem('authUser');
    }
}

export async function getAuthUser() {
    //const _authUser = localStorage.getItem('authUser');
    const _authUser = await AsyncStorage.getItem('authUser');
    if (_authUser) {
        return JSON.parse(_authUser);
    }

    return null;
}
