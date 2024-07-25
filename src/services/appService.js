import axios from '../../utils/axios';

export function getTopSubjects() {
    return axios.get('/subjects/top');
}

export function getSubjects(query = null) {
    let _queryString = '/subjects';

    if (query) {
        _queryString += 'search=' + query;
    }

    return axios.get(_queryString);
}
