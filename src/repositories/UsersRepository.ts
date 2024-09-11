import { Repository } from "typeorm";
import User from "../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../Interfaces/User/ICreateUser";
import AppDataSource from "../database";

class UsersRepository implements IUsersRepository{
    private repository: Repository<User>;

    constructor(){
        this.repository = AppDataSource.getRepository(User);
    }

    async create({name, username, email, password, driver_license}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name, 
            username, 
            email, 
            password, 
            driver_license
        });

        await this.repository.save(user);
    }
    read(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
}

export default UsersRepository;