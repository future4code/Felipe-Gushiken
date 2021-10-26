import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

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

// ENDPOINT 01 - CRIAR USUÁRIO
app.post("/user", async (req, res) => {
  try {
    await connection.raw(`
      INSERT INTO toDoList_users (name, nickname, email)
      VALUES (
        "${req.body.name}",
        "${req.body.nickname}",
        "${req.body.email}"
      );
    `)
    res.status(201).send("Created")
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// ENDPOINT 02 - PEGAR UM USUÁRIO PELO ID
app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id
    const result = await connection("toDoList_users")
    .where({
      id
    })
    res.status(200).send(result)
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// ENDPOINT 03 - EDITAR USUÁRIO
app.put("/user/edit/:id", async (req, res) => {
  try {
    await connection("toDoList_users")
    .update({
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email
    })
    .where({
      id: req.params.id
    })
    res.status(201).send("Updated")
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// ENDPOINT 04 - CRIAR TAREFA
app.post("/task", async (req, res) => {
  try {
    await connection.raw(`
      INSERT INTO tasks (title, description, deadline, status, requester)
      VALUES (
        "${req.body.title}",
        "${req.body.description}",
        "${req.body.deadline}",
        "${req.body.status}",
        "${req.body.requester}"
      )
    `)
    res.status(201).send("Created")
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// ENDPOINT 05 - PEGAR TAREFA PELO ID
app.get("/task/:id", async (req, res) => {
  try {
    const result = await connection("tasks")
    .where({
      id: req.params.id
    })
    res.status(200).send(result)
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})