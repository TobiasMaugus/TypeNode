import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("rentals")
class Rental{
    @PrimaryColumn({type: 'varchar'})
    id: string;

    @Column({type: 'varchar'})
    car_id: string;

    @Column({type: 'varchar'})
    user_id: string;

    @Column({ type: 'timestamp' })
    start_date: Date;

    @Column({ type: 'timestamp' })
    end_date: Date;

    @Column({ type: 'timestamp' })
    expected_return_date: Date;
    
    @Column({type: 'numeric'})
    total: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Rental