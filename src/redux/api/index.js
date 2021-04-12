import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?apikey=35a17bb9';

export const apiCall = (url, method, headers, data) => axios({
        url : baseURL + url,
        method,
        headers,
        data
    });

    
