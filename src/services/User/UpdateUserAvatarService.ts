import { inject, injectable } from "tsyringe";
import IRequestAvatarUser from "../../Interfaces/User/IAvatarUser";
import { IUsersRepository } from "../../Interfaces/User/ICreateUser";

@injectable()
class UpdateUserAvatarService{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository){}

    async execute({user_id, avatar_file}:IRequestAvatarUser):Promise<void>{
        const user = await this.usersRepository.findById(user_id);

        user.avatar = avatar_file;
        await this.usersRepository.create(user);
    }

}

export default UpdateUserAvatarService;