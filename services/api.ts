import Axios from 'axios';
import { API_KEY } from '../secret.json';

const api = Axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

api.interceptors.request.use(async (config) => {
    config.headers["Content-type"] = `application/json`;
    config.headers["Authorization"] = `Bearer ${API_KEY}`;
    return config;
  });

export default api;