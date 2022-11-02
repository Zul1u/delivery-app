import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API || 'http://localhost:3001/',
});

const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

const loginUser = async ({ email, password }) => api.post('login', { email, password })
  .catch((error) => {
    console.error(error);
    return null;
  });

export { setToken, loginUser };
