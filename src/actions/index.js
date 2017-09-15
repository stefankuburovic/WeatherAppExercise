import axios from 'axios';

const WEATHER_API_KEY = 'f62f74d01bd8f00028f4cf2bc257be64',
      WEATHER_UNIT = 'metric',
      WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ WEATHER_API_KEY }&units=${ WEATHER_UNIT }`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ) {
    const url = `${ WEATHER_ROOT_URL }&q=${ city }`;
    const request = axios.get( url );

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}