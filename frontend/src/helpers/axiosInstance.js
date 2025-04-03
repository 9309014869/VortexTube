import axios from "axios";
import {BASE_URL} from "../constants.js"

const axiosInstance = axios.create({
    withCredentials: true,
   
    baseURL: 'https://vortextube-backendmyfirst.onrender.com/api/v1'
});



export default axiosInstance;
