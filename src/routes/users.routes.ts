import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

import CreateUserController from "../controllers/User/CreateUserController";
import UpdateUserAvatarController from "../controllers/User/UpdateUserAvatarController";

import uploadConfig from "../shared/config/upload";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

const updateUserAvatarController = new UpdateUserAvatarController();
usersRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export default usersRoutes;