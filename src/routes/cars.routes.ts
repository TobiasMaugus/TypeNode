import { Router } from "express";
import CreateCarController from "../controllers/Car/CreateCarController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { ensureAdmin } from "../middlewares/EnsureAdmin";
import ListCarsController from "../controllers/Car/ListCarsController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);

const listCarsController = new ListCarsController();
carsRoutes.get("/available", listCarsController.handle);

export default carsRoutes;