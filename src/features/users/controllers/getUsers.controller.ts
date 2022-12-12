import { RequestHandler } from "express";

export const getUsers:RequestHandler=async(_req,res)=>{
    try{
        return res.status(200).send([
        {
            id: 1,
            name: "John Doe",
        }
        ])
    }catch(e){
        const error=e as Error
        return res.status(500).send({
            message:error.message
        })
    }
}