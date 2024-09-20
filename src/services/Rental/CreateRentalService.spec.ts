import RentalsRepositoryInMemory from "../../repositories/in-memory/RentalsRepositoryIM";
import CreateRentalService from "./CreateRentalService"

let createRentalService:CreateRentalService;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", ()=>{
    beforeEach(()=>{
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        createRentalService =  new CreateRentalService(rentalsRepositoryInMemory)
    });

    it("should be able to create a new rental", async ()=>{
        await createRentalService.execute({
            user_id:"12345",
            car_id:"121212",
            expected_return_date: new Date()
        })
    })
})