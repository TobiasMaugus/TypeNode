import { Router } from "express";
import CreateCarController from "../../controllers/Car/CreateCarController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { ensureAdmin } from "../middlewares/EnsureAdmin";
import ListCarsController from "../../controllers/Car/ListCarsController";
import CreateCarSpecificationController from "../../controllers/Car/CreateCarSpecificationController";
import UploadCarImageController from "../../controllers/Car/UploadCarImageController";
import uploadConfig from "../../shared/config/upload";
import multer from "multer";

const carsRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/cars"));


const createCarController = new CreateCarController();
carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);

const listCarsController = new ListCarsController();
carsRoutes.get("/available", listCarsController.handle);

const createCarSpecificationController = new CreateCarSpecificationController();
carsRoutes.post("/specifications/:id", ensureAuthenticated, ensureAdmin, createCarSpecificationController.handle)

const uploadCarImageController = new UploadCarImageController();
carsRoutes.post("/images/:id", ensureAuthenticated, ensureAdmin, upload.array("images"), uploadCarImageController.handle);


export default carsRoutes;