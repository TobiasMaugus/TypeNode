import {inject, injectable} from "tsyringe";
import { ICreateUserDTO, IUsersRepository } from "../../Interfaces/User/ICreateUser";
import argon2 from "argon2";
import AppError from "../../errors/AppError";

@injectable()
class CreateUserService{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository){}

    async execute({name, email, password, driver_license}:ICreateUserDTO){

        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if(userAlreadyExists){
            throw new AppError("Category Already Exists!");
        }

        const hash = await argon2.hash(password);
        await this.usersRepository.create({
            name,
            email, 
            password: hash, 
            driver_license
        });
    }
}

export default CreateUserService;