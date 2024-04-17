import axios from 'axios';
import { API_URL } from '@/shared/const/api-url';

export const $api = axios.create({
    baseURL: API_URL,
});

