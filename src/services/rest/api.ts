import axios from 'axios';

const api = axios.create({
  baseURL: 'https://finddev-api.herokuapp.com'
})

export default api;