import axios from '../config/axios';

export const getMe = () => axios.get('/users/me');
