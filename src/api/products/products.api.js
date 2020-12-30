import axios from 'axios';

export const getProducts = () => {
  return axios.get('http://192.168.0.110:3000/products').then((res) => {
    return Promise.all([res, res.data]);
  });
};
