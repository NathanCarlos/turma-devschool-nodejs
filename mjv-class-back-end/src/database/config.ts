import { createConnection } from "typeorm";
import { ENTITIES } from "../entities";

export const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: "mjv_class",
    username: "root",
    password: "root",
    logging: true,
    entities: ENTITIES
});
