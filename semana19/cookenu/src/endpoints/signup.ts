import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../interfaces";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      res.statusCode = 401
      throw new Error("Preencha os campos adequadamente")
    }

    if (password.length < 7) {
      res.statusCode = 422
      throw new Error("A senha deve ter 6 caracteres, no mínimo")
    }

    const [user] = await connection('cookenu_users')
      .where({ email })

    if (user) {
      res.statusCode = 409
      throw new Error('Email já cadastrado')
    }

    const id: string = new IdGenerator().generateId()

    const cipherPassword: string = new HashManager().generateHash(password)

    const token = new Authenticator().generateToken({ id })

    const newUser: user = {
      id,
      name,
      email,
      password: cipherPassword
    }

    await connection("cookenu_users")
      .insert(newUser)

    res.status(201).send({ newUser, token })

  } catch (error: any) {
    res.status(500).send({message: error.sqlMessage || error.message})
  }
}

