import axios from "axios";
export async function fetchWeather(city){
const apiKey=process.env.API_KEY;
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;
const response =await axios.get(url)
return await response.data;
}