import axios from '../../utils/axios';

export function getCourses(query = null) {
    let _queryString = '/courses';

    if (query) {
        _queryString += '?search=' + query;
    }

    return axios.get(_queryString);
}

export function getCourseDetails(id) {
    return axios.get('/courses/' + id);
}

export function getAuthCourses() {
    return axios.get('/courses/user');
}

export function addUserCourse(id) {
    return axios.post('/courses/add', {
        course_id: id,
    });
}
