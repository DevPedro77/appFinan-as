import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.16.6:3333' // estou consumindo uma API local
})

export default api;