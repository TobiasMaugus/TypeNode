import { container } from "tsyringe";

import { ICategoriesRepository } from "../../Interfaces/Category/ICreateCategory";
import CategoriesRepository from "../../repositories/CategoriesRepository";

import { ISpecificationsRepository } from "../../Interfaces/Specification/ICreateSpecification";
import SpecificationsRepository from "../../repositories/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);