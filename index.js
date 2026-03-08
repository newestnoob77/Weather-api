import express from 'express'
const app =express()
app.get("/",(req,res,next)=>res.status(200).send("Server is listening"))
app.listen(3000,(req,res,next)=>{
console.log("Server is listening")
})