import SpecificationsRepository from "../../../repositories/SpecificationsRepository";
import CreateSpecificationService from "../../../services/Specification/CreateSpecificationService";
import CreateSpecificationController from "./CreateSpecificationController";

const specificationRepository = SpecificationsRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

export default createSpecificationController;