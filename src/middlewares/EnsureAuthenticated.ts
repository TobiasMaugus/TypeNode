import { Request, Response, NextFunction } from "express";
import { verify as jwtverify } from "jsonwebtoken";
import IPayload from "../Interfaces/Middleware/IPayload";
import UsersRepository from "../repositories/UsersRepository";
import AppError from "../shared/errors/AppError";

export async function ensureAuthenticated(request:Request, response:Response, next:NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("User does not exists", 401);
    }

    //Bearer dnausd12enu123123ds920u31 (Padrao eh: Bearer espaco token)
    const [, token] = authHeader.split(" "); //[0]=Bearer, [1]=token --- [0] eh ignorado

    try{
        const {sub: user_id} = jwtverify(token, "8f64e180759b4572ddd25dc6e2eede91") as IPayload;
        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);
        if(!user){
            throw new AppError("User does not exists", 401);
        }

        request.user = {
            id: user_id
        }

        next();
    }catch{
        throw new AppError("User does not exists", 401);
    }
}