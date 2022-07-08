import express from "express";
import { PORT } from "./config";
import { connectMongoDB } from "./database";
import { router } from "./router";
import  swaggerUI  from "swagger-ui-express";
import swaggerJsDoc  from "swagger-jsdoc";
import { options } from "./swagger";

const specs = swaggerJsDoc(options);

async function main(){
    await connectMongoDB();
    const server = express();
    server.use(express.json());
    router(server);
    server.listen(PORT,()=>{
        console.log("Server Started")
        
    });
    server.use("/api-doc",swaggerUI.serve, swaggerUI.setup(specs));

}

main();