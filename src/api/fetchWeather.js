import axios from 'axios'
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'aa26bd80befae81140394a9972d98f93'

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })

    return data;
}