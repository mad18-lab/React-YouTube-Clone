import Axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
    method: 'GET',
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '969bac002fmsh3edbe92b96998d1p18a210jsn6841aa09fbf0',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchfromAPI = async (url, params = {}) => {
    try {
        const response = await Axios.get(`${BASE_URL}${url}`, {
            ...options,
            params: { ...options.params, ...params }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
