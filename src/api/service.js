import axios from '../config/axios';

export const createService = formData => {
  return axios.post('/services', formData);
};
