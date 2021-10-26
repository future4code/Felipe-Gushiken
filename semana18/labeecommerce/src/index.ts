import app from './app'
import { newProduct } from './classes/Product'
import { newTicket } from './classes/Ticket'
import { newUser } from './classes/User'
import createProduct from './endpoints/createProduct'
import createUser from './endpoints/createUser'
import getAllProducts from './endpoints/getAllProducts'
import getAllUsers from './endpoints/getAllUsers'

console.log("Hello World")

app.post("/user", createUser)

app.post("/product", createProduct)

app.get("/user", getAllUsers)

app.get("/product", getAllProducts)

console.log(newUser)

console.log(newProduct)

console.log(newTicket)