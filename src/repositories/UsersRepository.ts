import { Repository } from "typeorm";
import User from "../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../Interfaces/User/ICreateUser";
import AppDataSource from "../database";
import AppError from "../errors/AppError";

class UsersRepository implements IUsersRepository{
    private repository: Repository<User>;

    constructor(){
        this.repository = AppDataSource.getRepository(User);
    }

    async create({name, email, password, driver_license}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name, 
            email, 
            password, 
            driver_license
        });

        await this.repository.save(user);
    }
    read(): Promise<User[]> {
        throw new AppError("Method not implemented.");
    }
    async findByEmail(email: string): Promise<User> {
        const category= await this.repository.findOne({
            where:{email}
        });
        return category;
    }
    async findById(user_id: string): Promise<User> {
        const user = await this.repository.findOne({
            where: { id: user_id },
        });
        return user;
    }
}

export default UsersRepository;