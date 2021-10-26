import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { User } from './classes/User'
import { Customer } from "./classes/Customer";
import { dataClient } from "./classes/Client";
import { client } from './classes/Client'

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

const user = new User("001", "fe@mail.com", "Felipe", "password123")
// console.log(user)
// user.getId()
// user.getEmail()
// user.getName()

const customer = new Customer("002", "sati@mail.com", "Sati", "password123", "1234-5678-8912-3456")

customer.getCreditCard()
console.log(customer.purchaseTotal)
console.log(customer.introduceYourself())

const dataEnergyClient = new dataClient("Felipe", 10, 20)
console.log(dataEnergyClient.calculateBill())

console.log(client)
console.log(client.name)
console.log(client.consumedEnergy)
console.log(client.calculateBill())



