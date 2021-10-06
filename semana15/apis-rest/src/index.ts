import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

// EXERCÍCIO DE VERIFICAÇÃO
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

// EXERCÍCIO 01
app.get('/users', (req: Request, res: Response) => {
  res.status(200).send(users)
})

// 01.a)
// O método para exibir uma lista com os users é o GET.

// 01.b)
// Indicaria como app.get('/users')

// EXERCÍCIO 03
app.get('/users/search', (req: Request, res: Response) => {
  try {
    if (!req.query.name) {
      throw new Error("Invalid type")
    }
    const resultByName = users.filter((user) => user.name.includes(req.query.name as string))

    if (resultByName) {
      res.send(resultByName)
    } else {
      throw new Error("Not found")
    }
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

// EXERCÍCIO 02
app.get('/users/:type', (req: Request, res: Response) => {
  try {
    if (!req.params.type) {
      throw new Error("Invalid type")
    }
    const result = users.filter((user) => user.type === req.params.type)

    if (result) {
      res.send(result)
    } else {
      throw new Error("Not found")
    }
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

// EXERCÍCIO 04
app.post('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    
    const {id, name, email, type, age} = req.body //desestruturação do objeto. Todas as propriedades fazem parte o body

    if (!id || !name || !email || !type || !age) { //serve para verificar se o usuário imputou todos os campos
      errorCode = 422
      throw new Error("All the fields must be completed")
    }

    const newUser: User = {
      id: id, //ao invés de id: id, poderiamos colocar apenas id, 
      name: name, //ao invés de name: name, poderiamos colocar apenas name,
      email: email, //ao invés de email: email, poderiamos colocar apenas email,
      type: type, //ao invés de type: type, poderiamos colocar apenas type,
      age: age //ao invés de age: age, poderiamos colocar apenas age
    }

    users.push(newUser) //adiciona o newUser à lista Users

    res.status(201).send({message: "User created successfully"})

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})