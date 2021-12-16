import axios from 'axios';

const api = axios.create({
  baseURL: 'https://d16b-2804-29b8-501a-12cb-41f9-1f32-eba8-89f4.ngrok.io',
});

export default api;
