import ListCategoryController from "../../Category/List/ListCategoryController";
import ListCategoryService from "../../../services/Category/ListCategoryService";
import CategoriesRepository from "../../../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();
const listCategoryService = new ListCategoryService(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryService);

export default listCategoryController;