import express from "express";
import { getWeather } from "./weatherController.js";
export const weatherRouter = express.Router()
weatherRouter.get("/weather",getWeather);
