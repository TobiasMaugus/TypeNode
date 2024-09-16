import AppError from "../../shared/errors/AppError";
import CarsRepositoryInMemory from "../../tests/in-memory/CarsRepositoryIM";
import CreateCarService from "./CreateCarService";

let createCarService: CreateCarService;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", ()=>{
    
    beforeEach(()=>{
        carsRepositoryInMemory = new CarsRepositoryInMemory;
        createCarService =  new CreateCarService(carsRepositoryInMemory);
    })
    
    it("should be able to create a new car", async ()=>{
        await createCarService.execute({
            name: "nameCar",
            description: "description car",
            daily_rate: 134,
            license_plate: "AWS-8912",
            fine_amount: 90,
            brand: "car brand",
            category_id: "categoryID-test"
        })
        const createdCar = await carsRepositoryInMemory.findByLicensePlate("AWS-8912");
    
        expect(createdCar).toHaveProperty("id");
    })

    it("should not be able to create a car with the same license plate", ()=>{
        expect(async () => {
            await createCarService.execute({
                name: "nameCar",
                description: "description car",
                daily_rate: 134,
                license_plate: "AWS-8912",
                fine_amount: 90,
                brand: "car brand",
                category_id: "categoryID-test"
            });  
            
            await createCarService.execute({
                name: "nameCar2",
                description: "description car2",
                daily_rate: 1342,
                license_plate: "AWS-8912",
                fine_amount: 902,
                brand: "car brand2",
                category_id: "categoryID-test2"
            });  
        }).rejects.toBeInstanceOf(AppError);
    })

    it("should create a car and the car's 'available' attribute should be true by default", async () => {
        const license_plate = "ABC-8912";
    
        await createCarService.execute({
            name: "nameCar2",
            description: "description car2",
            daily_rate: 1342,
            license_plate: license_plate,
            fine_amount: 902,
            brand: "car brand2",
            category_id: "categoryID-test2"
        });
    
        const createdCar = await carsRepositoryInMemory.findByLicensePlate(license_plate);
    
        expect(createdCar.available).toBe(true);
    });
    
})