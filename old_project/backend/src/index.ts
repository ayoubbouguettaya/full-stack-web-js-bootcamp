import express from "express"
import path from "path"
import cors from 'cors'
import bodyParser from "body-parser"
import ordersRouter from "./routes/orders"
import { dbConfig } from "./config/database"
import { DataSource } from "typeorm"
import productRouters from "./routes/products"
import usersRouter from "./routes/users"
import authRouter from "./routes/auth"
import { protectedRouteDynamic } from "./middleware/protectedRoute"
import 'dotenv/config'

export const AppDataSource = new DataSource(dbConfig)

AppDataSource.initialize()
  .then(() => {
    console.log("datasource initilized")
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.get('/', (req, res) => {
  console.log(process.env.SECRET_VAR)
  res.send('App is Alive')
})

app.use("/orders", protectedRouteDynamic(["ADMIN"]), ordersRouter)
app.use("/products", protectedRouteDynamic(["USER","ADMIN"]), productRouters)
app.use("/users", protectedRouteDynamic(["ADMIN"]), usersRouter)

app.use("/auth", authRouter);

export const publicDirectory = path.join(__dirname,'/../', 'public')
console.log(publicDirectory)
app.use('/static', express.static(publicDirectory))

app.listen(3000)

