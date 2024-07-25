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

export async function setAuthToken(token = null) {
    if (token) {
        //localStorage/.setItem('token', token);
        await AsyncStorage.setItem('token', token);
    } else {
        //localStorage.removeItem('token');
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('authUser');
    }
}

export async function setAuthUser(user) {
    if (user) {
        //localStorage.setItem('authUser', JSON.stringify(user));
        await AsyncStorage.setItem('authUser', JSON.stringify(user));
    } else {
        //localStorage.removeItem('authUser');
        await AsyncStorage.removeItem('authUser');
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

export async function getAuthToken() {
    const _authToken = await AsyncStorage.getItem('token');
    if (_authToken) {
        return _authToken;
    }

    return null;
}

export async function getTokenAuthUser() {
    return axios.get('/user');
}
