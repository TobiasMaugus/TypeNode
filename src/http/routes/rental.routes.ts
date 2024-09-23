import { Router } from "express";
import CreateRentalController from "../../controllers/Rental/CreateRentalController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController()
rentalRoutes.post("/,", ensureAuthenticated, createRentalController.handle)

export default rentalRoutes;