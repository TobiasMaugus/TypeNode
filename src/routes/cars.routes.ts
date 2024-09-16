import { Router } from "express";
import CreateCarController from "../controllers/Car/CreateCarController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
carsRoutes.post('/', createCarController.handle);

export default carsRoutes;