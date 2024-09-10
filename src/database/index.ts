import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

// Carrega variáveis de ambiente do arquivo .env, caso esteja rodando localmente
dotenv.config();

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost", // usa "localhost" por padrão (para rodar localmente)
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "docker",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_DATABASE || "rentx",
    migrations: ['./src/database/migrations/**/*{.ts,.js}'],
    entities: [],
    synchronize: true,
    logging: false,
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });

    
export default AppDataSource;
