import axios from "axios";

const api = axios.create({
  baseURL: 'http://172.16.80.117:3333' // estou consumindo uma API local
})

export default api;