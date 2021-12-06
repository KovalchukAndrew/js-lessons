import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'bc6e3311';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const request = `?apikey=${key}&s=${title}`
        return axiosInstance.get(request)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
