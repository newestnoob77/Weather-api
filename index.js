import "./env.js";
import express from 'express'
import { weatherRouter } from "./src/weather/weatherRouter.js";
const app =express();
app.use("/api",weatherRouter)

app.listen(3000,(req,res,next)=>{
console.log("Server is listening")
})