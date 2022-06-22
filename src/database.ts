import { connect, connection } from "mongoose";
import { MONGO_URI } from "./config";

export async function connectMongoDB(){
    try {
        await connect (MONGO_URI);
    } catch (error) {
        console.error("ERROR",error);
    }
}

connection.on("connected",()=>{
    console.log("Base de Datos Iniciada", connection.db.databaseName);
});

connection.on("error",(e)=>{
    console.log("Error", e);
});

connection.on("disconnect",()=>{
    console.log("Base de Datos Desconectada");
});