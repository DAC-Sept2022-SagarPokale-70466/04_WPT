import axios from "axios";
import { getToken } from "../auth";


export const BASE_URL = 'http://localhost:9090/api/v1/';

export const MYAXIOIS = axios.create(
    {
        baseURL: BASE_URL

    }
);


export const privateAxios = axios.create({
    baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(config => {
      const token = getToken();
    //   console.log(token)
    // debugger
    if (token) {
        console.log(config);
        config.headers= `authorization : Bearer ${token}`;
        return config;
    }


}, (error) => { debugger; Promise.reject(error) });