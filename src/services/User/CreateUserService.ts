import {inject, injectable} from "tsyringe";
import { ICreateUserDTO, IUsersRepository } from "../../Interfaces/User/ICreateUser";

@injectable()
class CreateUserService{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository){}

    async execute({name, email, password, driver_license}:ICreateUserDTO){
        await this.usersRepository.create({
            name,
            email, 
            password, 
            driver_license
        });
    }
}

export default CreateUserService;