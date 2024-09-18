import Car from "../../entities/Car";
import CarsRepositoryInMemory from "../../repositories/in-memory/CarsRepositoryIM";
import SpecificationRepositoryInMemory from "../../repositories/in-memory/SpecificationsRepositoryIM";
import CreateCarService from "./CreateCarService";
import CreateCarSpecificationService from "./CreateCarSpecificationService";

let createCarSpecificationService: CreateCarSpecificationService;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe("Create Car Specification", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
        createCarSpecificationService = new CreateCarSpecificationService(carsRepositoryInMemory, specificationRepositoryInMemory);
    });

    it("should be able to add a new specification to the car", async () => {
        const createCarService = new CreateCarService(carsRepositoryInMemory);
        
        // Criação do carro usando o CreateCarService
        const car = await createCarService.execute({
            name: "nameCar",
            description: "description car",
            daily_rate: 134,
            license_plate: "AWS-8912",
            fine_amount: 90,
            brand: "car brand",
            category_id: "categoryID-test"
        });
        const carPlate = await carsRepositoryInMemory.findByLicensePlate("AWS-8912");
        // Adicionar uma nova especificação ao carro
        const list:string[]=[]
        await specificationRepositoryInMemory.create({name:"name",description:"description"})
        await specificationRepositoryInMemory.create({name:"name2",description:"description2"})
        const specificationName = await specificationRepositoryInMemory.findByName("name")
        const specificationName2 = await specificationRepositoryInMemory.findByName("name2")
        list.push(specificationName.id)
        list.push(specificationName2.id)
        await createCarSpecificationService.execute({ car_id: carPlate.id, specifications_id:list });
        const carPlate2 = await carsRepositoryInMemory.findByLicensePlate("AWS-8912");
        expect(carPlate2).toHaveProperty("specifications");
        expect(carPlate2.specifications.length).toBe(2);
    });
});