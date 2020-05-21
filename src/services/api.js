import axios from 'axios';
import {apiConfig} from './apiConfig';

const api = axios.create({
  baseURL: apiConfig.gitBaseUrl,
});

export default api;
