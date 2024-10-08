import { Router } from "express";
import categoriesRoutes from "../routes/categories.routes";
import specificationsRoutes from "../routes/specifications.routes";
import usersRoutes from "./users.routes";
import authenticateRoutes from "./authenticate.routes";
import carsRoutes from "./cars.routes";
import rentalRoutes from "./rental.routes";

const router=Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/cars", carsRoutes);
router.use("rentals", rentalRoutes);

export {router};