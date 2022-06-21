import axios from '../config/axios';

export const getMe = () => axios.get('/users/me');
export const updateProfile = formData => axios.patch('/users', formData);
