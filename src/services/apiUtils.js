import axios from "axios";

const api = axios.create({
    baseURL: 'https://agilebackend.onrender.com'
});

export default api;