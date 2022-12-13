import express from "express"
import morgan from "morgan"
import cors from "cors"
import usersRouter from "./features/users/routes"
import {config}from "dotenv"
config()
const app=express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/api/users",usersRouter)

export default app