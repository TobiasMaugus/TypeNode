import { Router } from "express";

import ListSpecificationController from "../controllers/Specification/ListSpecificationController";
import CreateSpecificationController from "../controllers/Specification/CreateSpecificationController";
import { ensureAdmin } from "../middlewares/EnsureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

const specificationsRoutes = Router();


const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.post("/", ensureAuthenticated, ensureAdmin, createSpecificationController.handle);

const listSpecificationController = new ListSpecificationController();
specificationsRoutes.get("/", listSpecificationController.handle);

export default specificationsRoutes;