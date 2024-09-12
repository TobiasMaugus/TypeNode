import { Request, Response } from "express";
import UpdateUserAvatarService from "../../services/User/UpdateUserAvatarService";
import { container } from "tsyringe";

class UpdateUserAvatarController{
    async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.user;
        const avatar_file = request.file.filename;

        const updateUserAvatarService = container.resolve(UpdateUserAvatarService);
        await updateUserAvatarService.execute({user_id: id, avatar_file});

        return response.status(204).send();
    }
}

export default UpdateUserAvatarController;