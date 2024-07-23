import axios from '../../utils/axios';

export function getCourses() {
    return axios.get('/courses');
}
