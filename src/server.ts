import express from "express";
import { router } from "./routes";
import SwaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();
const PORT = 3333;

app.use(express.json());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile))
app.use(router)


app.listen(PORT, ()=>console.log("-- Server is running! --"));