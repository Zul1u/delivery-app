import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API || 'http://localhost:3001/',
});

const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

const loginUser = async (infosLogin) => {
  const result = await api.post('login', infosLogin).catch((error) => {
    console.error(error);
    return null;
  });
  return result;
};

export { setToken, loginUser };
