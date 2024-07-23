import axios from '../../utils/axios';

export function getCategories() {
    return axios.get('/categories');
}

export function addUserCategories() {
    return axios.post('/categories');
}
