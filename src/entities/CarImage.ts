import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"

@Entity("car_images")
class CarImage{

    @PrimaryColumn({type: 'varchar'})
    id:string

    @Column({type: 'varchar'})
    car_id:string

    @Column({type: 'varchar'})
    image_name:string

    @CreateDateColumn()
    created_at:Date
}

export default CarImage