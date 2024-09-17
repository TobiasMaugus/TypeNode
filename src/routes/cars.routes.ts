import { Router } from "express";
import CreateCarController from "../controllers/Car/CreateCarController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { ensureAdmin } from "../middlewares/EnsureAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();
carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);

export default carsRoutes;