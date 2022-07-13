import axios from 'axios';

export const API_URL = 'https://server.cum.com.ru';
// export const API_URL = 'http://localhost:1983';

const instance = axios.create({
  baseURL: `${API_URL}`,
});
export default instance;
