import axios from '../config/axios';

export const createService = formData => {
  return axios.post('/services', formData);
};

export const getAllServices = () => axios.get('/services');

export const getUserServices = userId => axios.get(`/users/${userId}/services`);
