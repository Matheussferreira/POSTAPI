import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2021/api'
});

export default api;