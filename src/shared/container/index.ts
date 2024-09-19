import { container } from "tsyringe";

import { ICategoriesRepository } from "../../Interfaces/Category/ICreateCategory";
import CategoriesRepository from "../../repositories/CategoriesRepository";

import { ISpecificationsRepository } from "../../Interfaces/Specification/ICreateSpecification";
import SpecificationsRepository from "../../repositories/SpecificationsRepository";

import { IUsersRepository } from "../../Interfaces/User/ICreateUser";
import UsersRepository from "../../repositories/UsersRepository";
import { ICarsRepository } from "../../Interfaces/Car/ICreateCar";
import CarsRepository from "../../repositories/CarsRepository";
import { ICarImagesRepository } from "../../Interfaces/Car/CarImage/ICarImagesRepository";
import CarImagesRepository from "../../repositories/CarImagesRepository";
import { IRentalsRepository } from "../../Interfaces/Rental/ICreateRental";
import RentalsRepository from "../../repositories/RentalsReposiroty";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
);

container.registerSingleton<ICarImagesRepository>(
    "CarImagesRepository",
    CarImagesRepository
)

container.registerSingleton<IRentalsRepository>(
    "RentalsRepository",
    RentalsRepository
)