import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://hos.collect-qa.com',
  })