import "./env.js";
import express from 'express'
import { weatherRouter } from "./src/weather/weatherRouter.js";
import { limiter } from "./src/middleware/rateLimiter.middleware.js";
import { ApplicationError } from "./src/middleware/ApplicationError.js";
const app =express();
app.set('trust proxy', 1);
app.use(limiter)
app.use("/api",weatherRouter)

app.use((err,req,res,next)=>{
    if(err instanceof ApplicationError){
        return res.status(err.code).send(err.message)
    }
    res.status(500).send("Soemthing went wrong");

})
app.listen(3000,()=>{
console.log("Server is listening")
})