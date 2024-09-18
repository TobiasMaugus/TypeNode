import CarsRepositoryInMemory from "../../repositories/in-memory/CarsRepositoryIM";
import ListCarsService from "./ListCarsService";
import { container } from "tsyringe";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listCarsService: ListCarsService;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        // Sobrescreve a injeção do repositório real pelo in-memory
        container.registerInstance("CarsRepository", carsRepositoryInMemory);
        listCarsService = container.resolve(ListCarsService);
    });

    it("should be able to list all available cars", async () => {
        await carsRepositoryInMemory.create({
            name: "nameCar",
            description: "description car",
            daily_rate: 134,
            license_plate: "AWS-8912",
            fine_amount: 90,
            brand: "car brand",
            category_id: "categoryID-test"
        });
    
        const cars = await listCarsService.execute({});
        
        // Comparando as propriedades do carro
        expect(cars).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "nameCar",
                    description: "description car",
                    daily_rate: 134,
                    license_plate: "AWS-8912",
                    brand: "car brand",
                    category_id: "categoryID-test"
                })
            ])
        );
    });
    

    it("should be able to list all available cars by name", async () => {
        await carsRepositoryInMemory.create({
            name: "nameCar2",
            description: "description car",
            daily_rate: 134,
            license_plate: "AWS-8912",
            fine_amount: 90,
            brand: "car brand",
            category_id: "categoryID-test"
        });
    
        const cars = await listCarsService.execute({ name: "nameCar2" });
        
        // Comparando propriedades
        expect(cars).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "nameCar2",
                    description: "description car",
                    daily_rate: 134,
                    license_plate: "AWS-8912",
                    brand: "car brand",
                    category_id: "categoryID-test"
                })
            ])
        );
    });

    it("should be able to list all available cars by brand", async () => {
        await carsRepositoryInMemory.create({
            name: "nameCar2",
            description: "description car",
            daily_rate: 134,
            license_plate: "AWS-8912",
            fine_amount: 90,
            brand: "car brand",
            category_id: "categoryID-test"
        });
    
        const cars = await listCarsService.execute({ brand: "car brand" });
        
        // Comparando propriedades
        expect(cars).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "nameCar2",
                    description: "description car",
                    daily_rate: 134,
                    license_plate: "AWS-8912",
                    brand: "car brand",
                    category_id: "categoryID-test"
                })
            ])
        );
    });

    it("should be able to list all available cars by category_id", async () => {
        await carsRepositoryInMemory.create({
            name: "nameCar2",
            description: "description car",
            daily_rate: 134,
            license_plate: "AWS-8912",
            fine_amount: 90,
            brand: "car brand",
            category_id: "categoryID-test"
        });
    
        const cars = await listCarsService.execute({ category_id: "categoryID-test" });
        
        // Comparando propriedades
        expect(cars).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "nameCar2",
                    description: "description car",
                    daily_rate: 134,
                    license_plate: "AWS-8912",
                    brand: "car brand",
                    category_id: "categoryID-test"
                })
            ])
        );
    });
    
});
