import { DataSourceOptions } from "typeorm";
import {  OrderEntity } from "../entity/order.entity";
import { ProductEntity } from "../entity/product.entity";
import { UserEntity } from "../entity/user.entity";

export const dbConfig = {
    // type: "mysql",
    // host: "localhost",
    // port: 3306,
    // username: "ayoub",
    // password: "password",
    // database: "public",
    type: "sqlite",
    database: `./data/line.sqlite`,
    entities: [OrderEntity,ProductEntity,UserEntity],
    synchronize: true,
    logging: true,
} as DataSourceOptions