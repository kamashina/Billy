import axios from 'axios';

const API_KEY = '9a70ff2ed7514288b7ce8289b9bed5e0';
const News = 'https://newsapi.org/v2/everything?q=apple&from=2022-07-13&apiKey=9a70ff2ed7514288b7ce8289b9bed5e0';
export const API_URL = 'https://server.cum.com.ru';
// export const API_URL = 'http://localhost:1983';

const instance = axios.create({
  baseURL: `${API_URL}`,
});
export default instance;
