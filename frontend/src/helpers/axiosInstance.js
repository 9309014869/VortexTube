import axios from "axios";
import {BASE_URL} from "../constants.js"

const axiosInstance = axios.create({
    withCredentials: true,
   
    baseURL: 'http://localhost:8000/api/v1'
});



export default axiosInstance;
