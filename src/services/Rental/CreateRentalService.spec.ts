import RentalsRepositoryInMemory from "../../repositories/in-memory/RentalsRepositoryIM";
import AppError from "../../shared/errors/AppError";
import CreateRentalService from "./CreateRentalService"

let createRentalService:CreateRentalService;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", ()=>{
    beforeEach(()=>{
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        createRentalService =  new CreateRentalService(rentalsRepositoryInMemory)
    });

    it("should be able to create a new rental", async ()=>{
        const rental = await createRentalService.execute({
            user_id:"12345",
            car_id:"121212",
            expected_return_date: new Date()
        })

        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_date");
    })

    it("should not be able to create a new rental if there is another open to the same user", async ()=>{
        expect(async()=>{
            await createRentalService.execute({
                user_id:"12345",
                car_id:"121211",
                expected_return_date: new Date()
            })
            
            const rental = await createRentalService.execute({
                user_id:"12345",
                car_id:"121212",
                expected_return_date: new Date()
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to create a new rental if there is another open to the same user", async ()=>{
        expect(async()=>{
            await createRentalService.execute({
                user_id:"123333",
                car_id:"121212",
                expected_return_date: new Date()
            })
            
            const rental = await createRentalService.execute({
                user_id:"12345",
                car_id:"121212",
                expected_return_date: new Date()
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})