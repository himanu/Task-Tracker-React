import axios from 'axios';

const serverUrl = 'https://task-tracker-ll2w.onrender.com/';
const axiosInstance = axios.create({
    baseURL: serverUrl
})

export default axiosInstance;
