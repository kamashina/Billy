import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://server.cum.com.ru',
  baseURL: 'http://localhost:1983',
  url: 'https://localhost:1983',
});
export default instance;
