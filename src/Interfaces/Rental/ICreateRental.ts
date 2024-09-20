import Rental from "../../entities/Rental";

interface IRentalsRepository{
    findOpenRentalByCar(car_id:string):Promise<Rental>
    findOpenRentalByUser(user_id:string):Promise<Rental>
    create({user_id, car_id, expected_return_date}:IRequestRentals):Promise<Rental>
}

interface IRequestRentals{
    user_id:string;
    car_id:string;
    expected_return_date:Date
}

export {IRentalsRepository, IRequestRentals}