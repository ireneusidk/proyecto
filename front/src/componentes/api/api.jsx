import axios from "axios";

const api = axios.create({
  baseURL: 'https://proyecto-1-1qny.onrender.com/api',
  withCredentials: true 
})

export default api;
