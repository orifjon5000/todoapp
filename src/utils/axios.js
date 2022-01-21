import Axios from 'axios';

const axios = Axios.create({
  baseURL: '/api',  //url package jsonga ga proxyga yozildi. proxy malumotni urtada bowqa serverga junatadi 
  withCredentials: true
});

export default axios;