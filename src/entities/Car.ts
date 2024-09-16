import "reflect-metadata";
import { v4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

//@Entity("categories")
class Car{
    id:string;
    name:string;
    description:string;
    daily_rate:number;
    available:boolean;
    license_plate:string;
    fine_amount:number;
    brand: string;
    category_id:string;
    created_at: Date;
    
    constructor(){
        if(!this.id){
            this.id=v4();
            this.available=true;
            this.created_at=new Date;
        }
    }
}

export default Car;