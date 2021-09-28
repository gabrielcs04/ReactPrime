import axios from 'axios';

export const key = '59107e3498bca77b6bb845cd9530e08f'

const api = axios.create({
  baseURL: ' https://api.themoviedb.org/3'
})

export default api;