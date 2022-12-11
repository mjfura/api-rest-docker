import express from "express"
import morgan from "morgan"
import cors from "cors"
const app=express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/",(_req,res)=>{
    return res.status(200).send({
        message:"API REST with MongoDB using Docker Compose"
    })
})

export default app