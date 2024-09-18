import AppDataSource from "../../../database";
import { v4 } from "uuid";
import argon2 from "argon2";

async function create() {
    const connection = await AppDataSource.initialize();

    const id = v4();
    const password = await argon2.hash("admin");

    await connection.query(
        `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
        values('${id}', 'admin', 'admin@admin.com', '${password}', true, 'now()', '123123'`
    )
    await connection.destroy();
}

create().then(() => console.log("user admin created")).catch(error => console.log(error));