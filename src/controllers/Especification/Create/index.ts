import EspecificationsRepository from "../../../repositories/EspecificationsRepository";
import CreateEspecificationService from "../../../services/Especification/CreateEspecificationService";
import CreateEspecificationController from "./CreateEspecificationController";

const especificationRepository = new EspecificationsRepository();
const createEspecificationService = new CreateEspecificationService(especificationRepository);
const createEspecificationController = new CreateEspecificationController(createEspecificationService);

export default createEspecificationController;