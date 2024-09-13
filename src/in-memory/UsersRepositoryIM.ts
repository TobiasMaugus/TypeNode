    import User from "../entities/User";
    import { ICreateUserDTO, IUsersRepository } from "../Interfaces/User/ICreateUser";
    import AppError from "../errors/AppError";

    class UsersRepositoryInMemory implements IUsersRepository{
        users: User[] = []

        async create({driver_license, email, name, password}: ICreateUserDTO): Promise<void> {
            const user = new User();
            Object.assign(user, {driver_license, email, name, password});
            this.users.push(user);
            console.log(password);

        }
        async read(): Promise<User[]> {
            throw new AppError("Method not implemented.");
        }
        async findByEmail(email: string): Promise<User> {
            return this.users.find((user)=>user.email===email);
        }
        async findById(user_id: string): Promise<User> {
            return this.users.find((user)=>user.id===user_id);
        }

    }

    export default UsersRepositoryInMemory