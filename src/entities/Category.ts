import "reflect-metadata";
import { v4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
class Category{
    @PrimaryColumn({type: 'varchar'})
    id?: string;

    @Column({type: 'varchar'})
    name: string;

    @Column({type: 'varchar'})
    description: string;

    @CreateDateColumn({type: 'varchar'})
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id=v4();
        }
    }
}
export default Category;