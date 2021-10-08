import express, { Express } from "express";
import { Request, Response } from "express"
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

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movies WHERE id = '${id}'
  `)

  return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

app.post("/actors", async (req: Request, res: Response) => {
  try {
    await connection.raw(`
      INSERT INTO Actor (id, name, salary, birth_date, gender)
      VALUES (
        ${Date.now()},
        "${req.body.name}",
        ${req.body.salary},
        "${req.body.birthDate}",
        "${req.body.gender}"
      );
    `)

    res.status(201).send(req.body)

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//respostas do 01.c)
app.get("/actors/gender/", async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(`
      SELECT COUNT(*) AS Count, gender FROM Actor GROUP BY gender;
    `)

    res.status(200).send(result[0])

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//respostas do 01.b)
app.get("/actors/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = ${id}
    `)

    res.status(201).send(result[0])

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//resposta do 02.a)
app.put("/actors/:id", async (req, res) => {
  try {
    await connection("Actor")
    .update({
      salary: req.body.salary
    })
    .where({
      id: req.params.id
    })

    res.send("Updated")

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//resposta do 02.b)
app.delete("/actors/:id", async (req, res) => {
  try {
    await connection("Actor")
    .delete()
    .where({
      id: req.params.id
    })

    res.send("Deleted")

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//resposta do 02.c)
app.get("/actors/gender/:gender", async (req, res) => {
  try {
    const result = await connection("Actor")
    .avg(
      "salary"
    )
    .where({
      gender: req.params.gender
    }) 

    res.send(result)

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//resposta do 03.a)
app.get("/actors/:id", async (req: Request, res: Response) => {
  try {
    const result = await connection("Actor")
    .where({
      id: req.params.id
    })

    res.status(200).send(result)

  } catch (err: any) {
    res.status(400).send({
      message: err.message
    });
  }
});

//resposta do 03.b)
app.get("/actor", async (req, res) => {
  try {
    const gender = req.query.gender
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    `)

    res.status(200).send(result[0])

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.Message)
  }
})

app.post("/actor", async (req,res) => {
  try {
    const newActor = await connection("Actor")
    .insert({
      id: Date.now(),
      name: req.body.name,
      salary: req.body.salary,
      birth_date: new Date(req.body.birthDate),
      gender: req.body.gender,
      hometown: req.body.hometown,
      favorite_ice_cream_flavor: req.body.favoriteIceCreamFlavor,
    })

    res.send("Created")

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//resposta 04.a)
app.put("/actor", async (req, res) => {
  try {
    const updateActor = await connection("Actor")
    .update({
      salary: req.body.salary,
    })
    .where({
      id: req.body.id
    })

    res.send("Updated")

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//resposta 04.b)
app.delete("/actor/:id", async (req, res) => {
  try {
    const deleteActor = await connection("Actor")
    .delete()
    .where({
      id: req.params.id
    })

    res.send("Deleted")

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})
