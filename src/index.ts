import app from "./app"
import {config} from "dotenv"
import mongoose from "mongoose"
config()
const PORT=process.env.PORT || 5000
const MONGO_URI=process.env.DB_URI
const NODE_ENV=process.env.NODE_ENV
app.listen(PORT,async ()=>{
    try{
        if(!MONGO_URI)throw new Error("No se ha encontrado la URI de la base de datos")
        mongoose.connect(MONGO_URI,(err)=>{
            if(err) throw err
            console.log("Base de datos conectada")
        })
        console.log(`Servidor corriendo en el puerto: ${PORT}!!  en un entorno de ${NODE_ENV}`)
    }catch(e){
        console.log("error al intentar conectarse a la base de datos",e)
    }
}
)
