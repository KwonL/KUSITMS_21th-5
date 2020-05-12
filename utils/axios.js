import axios from 'axios';

export default axios.create({
    baseURL: 'https://food-img-classifier.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
    responseType: 'json',
});

