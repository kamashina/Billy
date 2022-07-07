import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://103.172.116.31:1983',
});
export default instance;
