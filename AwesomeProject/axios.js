import axios from 'axios';


const instance = axios.create({
    baseURL: process.env.API_URL || 'http://10.0.2.2:3002/api'
});

export default instance;