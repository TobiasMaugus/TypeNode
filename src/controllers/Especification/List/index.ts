import EspecificationsRepository from "../../../repositories/EspecificationsRepository";
import ListEspecificationService from "../../../services/Especification/ListEspecificationService";
import ListEspecificationController from "./ListEspecificationController";

const especificationRepository = EspecificationsRepository.getInstance();
const listEspecificationService = new ListEspecificationService(especificationRepository);
const listEspecificationController = new ListEspecificationController(listEspecificationService);

export default listEspecificationController;