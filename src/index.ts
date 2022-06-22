import express from "express";
import { PORT } from "./config";
import { connectMongoDB } from "./database";
import { router } from "./router";

async function main(){
    await connectMongoDB();
    const server = express();
    server.use(express.json());
    router(server);
    server.listen(PORT,()=>{
        console.log("Server Started")
    });
}

main();