import { inject, injectable } from "tsyringe";
import {IRequestUser, IResponseUser} from "../../Interfaces/User/IAuthenticateUser";
import { IUsersRepository } from "../../Interfaces/User/ICreateUser";
import {verify as argon2verify} from "argon2";
import {sign} from "jsonwebtoken";
import AppError from "../../errors/AppError";

@injectable()
class AuthenticateUserService{
    constructor( 
        @inject("UsersRepository")
        private usersRepository: IUsersRepository){}

    async execute({email, password}:IRequestUser):Promise<IResponseUser>{

        const user = await this.usersRepository.findByEmail(email);
        if(!user){
            throw new AppError("email or password incorrect!"); 
        }

        const passwordMatch = await argon2verify(user.password, password);
        if(!passwordMatch){
            throw new AppError("email or password incorrect!"); 
        }

        const token = sign({}, "8f64e180759b4572ddd25dc6e2eede91",{
            subject: user.id,
            expiresIn: "1d"
        })

        const tokenReturn: IResponseUser ={
            user:{
                name: user.name,
                email: user.email
            },
            token
        }

        return tokenReturn;
    }
}

export default AuthenticateUserService;