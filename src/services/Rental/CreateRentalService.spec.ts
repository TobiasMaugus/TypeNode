import RentalsRepositoryInMemory from "../../repositories/in-memory/RentalsRepositoryIM";
import AppError from "../../shared/errors/AppError";
import CreateRentalService from "./CreateRentalService"
import dayjs from "dayjs";

let createRentalService:CreateRentalService;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", ()=>{
    const dayAdd24Hours = dayjs().add(1, 'day').toDate();
    beforeEach(()=>{
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        createRentalService =  new CreateRentalService(rentalsRepositoryInMemory)
    });

    it("should be able to create a new rental", async ()=>{
        const rental = await createRentalService.execute({
            user_id:"12345",
            car_id:"121212",
            expected_return_date: dayAdd24Hours
        })

        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_date");
    })

    it("should not be able to create a new rental if there is another open to the same user", async ()=>{
        expect(async()=>{
            await createRentalService.execute({
                user_id:"12345",
                car_id:"121211",
                expected_return_date: dayAdd24Hours
            })
            
            await createRentalService.execute({
                user_id:"12345",
                car_id:"121212",
                expected_return_date: dayAdd24Hours
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to create a new rental if there is another open to the same user", async ()=>{
        expect(async()=>{
            await createRentalService.execute({
                user_id:"123333",
                car_id:"121212",
                expected_return_date: dayAdd24Hours
            })
            
            await createRentalService.execute({
                user_id:"12345",
                car_id:"121212",
                expected_return_date: dayAdd24Hours
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to create a new rental with invalid return time", async ()=>{
        expect(async()=>{
            await createRentalService.execute({
                user_id:"123333",
                car_id:"121212",
                expected_return_date: dayjs().toDate()
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})