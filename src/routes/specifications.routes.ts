import { Router } from "express";

import ListSpecificationController from "../controllers/Specification/ListSpecificationController";
import CreateSpecificationController from "../controllers/Specification/CreateSpecificationController";

const specificationsRoutes = Router();


const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.post("/", createSpecificationController.handle);

const listSpecificationController = new ListSpecificationController();
specificationsRoutes.get("/", listSpecificationController.handle);

export default specificationsRoutes;