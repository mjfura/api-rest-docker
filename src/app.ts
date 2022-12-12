import express from "express"
import morgan from "morgan"
import cors from "cors"
import {config}from "dotenv"
config()
const NODE_ENV=process.env.NODE_ENV
const app=express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/",(_req,res)=>{
    return res.status(200).send({
        message:`API REST with MongoDB and NodeJS running in ${NODE_ENV}`
    })
})

export default app