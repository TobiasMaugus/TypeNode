import { NextFunction, Request, Response } from "express";
import AppError from "../shared/errors/AppError";
import UsersRepository from "../repositories/UsersRepository";

export async function ensureAdmin(request:Request, response:Response, next:NextFunction) {
    const {id} = request.user;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if(!user.isAdmin){
        throw new AppError("User is not an admin");
    }
    return next();
}