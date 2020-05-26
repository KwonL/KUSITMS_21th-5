import axios from 'axios';

const BASE_URL = 'http://54.180.163.198:8000/api'

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    validateStatus: () => true,
    responseType: 'json',
});
