import { client } from "../config/redisClient.js";
import { fetchWeather } from "./weather.services.js";
export async function getWeather(req,res){
const city =req.query.city
const cacheKey=`weather:${city}`
const cachedData =await client.get(cacheKey)
if(cachedData){
    return res.json({
        source:"cache",
        data:JSON.parse(cache)
    })
}
const weatherData =await fetchWeather(city)
await client.set(cacheKey,JSON.stringify(weatherData),{EX:43200})
   res.json({source:"api",data:weatherData}) 
}