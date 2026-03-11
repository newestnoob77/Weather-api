import { client } from "../config/redisClient.js";
import { ApplicationError } from "../middleware/ApplicationError.js";
import { fetchWeather } from "./weather.services.js";
export async function getWeather(req,res){
try{
    const city =req.query.city
const cacheKey=`weather:${city}`
const cachedData =await client.get(cacheKey)
if(cachedData){
    return res.json({
        source:"cache",
        data:JSON.parse(cachedData)
    })
}
const weatherData =await fetchWeather(city)
const formatedData ={
    city:weatherData.address,
    temperature:weatherData.currentConditions.temp,
    humidity:weatherData.currentConditions.humidity,
    conditions:weatherData.currentConditions.conditions
}
await client.set(cacheKey,JSON.stringify(weatherData),{EX:43200})
   res.json({source:"api",data:formatedData}) 
}
catch(err){
    console.log(err)
    throw new ApplicationError("Something went wrong")
}
}