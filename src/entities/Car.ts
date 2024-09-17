import "reflect-metadata";
import { v4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import Category from "./Category";
import Specification from "./Specification";

@Entity("cars")
class Car{
    @PrimaryColumn({type: 'varchar'})
    id:string;

    @Column({type: 'varchar'})
    name:string;

    @Column({type: 'varchar'})
    description:string;

    @Column({type:"number"})
    daily_rate:number;

    @Column({type: 'boolean'})
    available: boolean;

    @Column({type: 'varchar'})
    license_plate:string;

    @Column({type: 'number'})
    fine_amount:number;

    @Column({type: 'varchar'})
    brand: string;

    @ManyToOne(()=>Category)            //
    @JoinColumn({name:"category_id"})   //
    category:Category;                  //
                                        //FOREING KEY
    @Column({type: 'varchar'})          //
    category_id:string;                 //

    @ManyToMany(()=>Specification)
    @JoinTable({
        name:"specifications_cars",
        joinColumns:[{name:"car_id"}],
        inverseJoinColumns:[{name:"specification_id"}]
    })
    specifications: Specification[];

    @CreateDateColumn()
    created_at: Date;
    
    constructor(){
        if(!this.id){
            this.id=v4();
            this.available=true;
        }
    }
}

export default Car;