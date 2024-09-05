import EspecificationsRepository from "../../../repositories/EspecificationsRepository";
import ListEspecificationService from "../../../services/Especification/ListEspecificationService";
import ListEspecificationController from "./ListEspecificationController";

const especificationRepository = new EspecificationsRepository();
const listEspecificationService = new ListEspecificationService(especificationRepository);
const listEspecificationController = new ListEspecificationController(listEspecificationService);

export default listEspecificationController;