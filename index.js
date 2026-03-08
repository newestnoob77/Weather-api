import express from 'express'
import { client } from './src/config/redisClient.js'
const app =express()
app.get("/test-cache",async(req,res)=>{
    await client.set("name","jithu");
    const value =await client.get("name");
    res.json({cachedValue:value})
})
app.listen(3000,(req,res,next)=>{
console.log("Server is listening")
})