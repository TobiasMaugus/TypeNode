import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCars1726250332243 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns:[{
                    name: "id",
                    type:"uuid",
                    isPrimary: true
                },{
                    name: "name",
                    type:"varchar", 
                },{
                    name: "description",
                    type:"varchar",
                },{
                    name: "daily_rate",
                    type:"numeric",
                },{
                    name: "available",
                    type:"boolean",
                    default: true
                },{
                    name: "license_plate",
                    type:"varchar",    
                },{
                    name: "fine_amout",
                    type: "numeric",
                },{
                    name: "brand",
                    type:"varchar",
                },{
                    name: "category_id",
                    type:"uuid",
                    isNullable: true
                },{
                    name: "created_at",
                    type:"timestamp",
                    default: "now()"
                }],
                foreignKeys:[{
                    name: "FKCategoryCar",
                    referencedTableName: "categories",
                    referencedColumnNames: ["id"], //id da table categories
                    columnNames: ["category_id"], //category_id da table cars
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("cars");
    }

}
