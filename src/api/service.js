import axios from '../config/axios';

export const createService = formData => {
  return axios.post('/services', formData);
};

export const getAllServices = () => axios.get('/services');

export const getUserServices = () => axios.get(`/users/services`);

export const updateUserService = (serviceId, formData) =>
  axios.patch(`/services/${serviceId}`, formData);

export const deleteServiceById = serviceId =>
  axios.delete(`/services/${serviceId}`);
