import "./env.js";
import express from 'express'
import { weatherRouter } from "./src/weather/weatherRouter.js";
import { limiter } from "./src/middleware/rateLimiter.middleware.js";
import { ApplicationError } from "./src/middleware/ApplicationError.js";
import swagger from "swagger-ui-express";
import apiDocs from "./swagger.json" with {type:"json"};
const app =express();
app.set('trust proxy', 1);
app.use(limiter)
app.use("/api/weather",weatherRouter)
app.use("/api-docs",swagger.serve,swagger.setup(apiDocs))
app.use((err,req,res,next)=>{
    if(err instanceof ApplicationError){
        return res.status(err.code).send(err.message)
    }
    res.status(500).send("Soemthing went wrong");

})
app.use((req, res)=>{
  res.status(404).send("API not found. Please check our documentation for more information at localhost:3000/api-docs")
});
app.listen(3000,()=>{
console.log("Server is listening")
})