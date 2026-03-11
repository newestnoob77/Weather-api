import express from "express";
import { query } from "express-validator";
import { getWeather } from "./weatherController.js";
export const weatherRouter = express.Router()
weatherRouter.get("/", query("city").notEmpty().withMessage("City is required"),getWeather);
