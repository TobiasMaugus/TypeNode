import { v4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class User{
   
    @Column({type: 'varchar'})
    id: string;

   
    @Column({type: 'varchar'})
    name: string;

  
    @Column({type: 'varchar'})
    email:string;

    
    @Column({type: 'varchar'})
    password:string;

    
    @Column({type: 'varchar'})
    driver_license:string;

    
    @Column({type: 'varchar'})
    avatar: string;

    @Column({type:'boolean'})
    isAdmin:boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id=v4();
        }
    }
}

export default User;