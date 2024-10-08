import User from "../../entities/User";

interface ICreateUserDTO{
    name:string;
    password:string;
    email:string;
    driver_license:string;
    id?:string;
    avatar?:string;
}


interface IUsersRepository{
    create(data:ICreateUserDTO):Promise<void>;
    read(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findById(user_id:string):Promise<User>;
}

export{ICreateUserDTO,IUsersRepository};