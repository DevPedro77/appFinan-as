import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.1.108:3333' // estou consumindo uma API local
})

export default api;