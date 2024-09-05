import SpecificationsRepository from "../../../repositories/SpecificationsRepository";
import ListSpecificationService from "../../../services/Specification/ListSpecificationService";
import ListSpecificationController from "./ListSpecificationController";

const especificationRepository = SpecificationsRepository.getInstance();
const listSpecificationService = new ListSpecificationService(especificationRepository);
const listSpecificationController = new ListSpecificationController(listSpecificationService);

export default listSpecificationController;