import express from "express";
import categoriesRoutes from "./routes/categories.routes";
import especificationsRoutes from "./routes/especifications.routes";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/especifications", especificationsRoutes);

app.listen(PORT, ()=>console.log("-- Server is running! --"));