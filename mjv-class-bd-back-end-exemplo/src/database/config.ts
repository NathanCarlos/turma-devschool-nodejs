import { createConnection } from "typeorm";
import { ENTITIES } from "../entities";

export const connection = createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'mjv_class',
    logging: true,
    entities: ENTITIES
});
