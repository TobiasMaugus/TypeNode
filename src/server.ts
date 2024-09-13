import 'reflect-metadata';
import express, { NextFunction, Response, Request } from "express";
import { router } from "./routes";
import SwaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import "./database";
import "./shared/container";
import AppError from './shared/errors/AppError';
import "express-async-errors";


const app = express();
const PORT = 3333;

app.use(express.json());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile))
app.use(router)

app.use((err:Error, request:Request, response:Response, next:NextFunction)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status:"error",
        message: `internal server error - ${err.message}`
    })
})

app.listen(PORT, ()=>console.log("-- Server is running! --"));