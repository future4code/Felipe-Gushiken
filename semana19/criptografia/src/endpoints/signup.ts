import { Request, Response } from "express";
import { connection } from "../data/connection";
import { USER_ROLES } from "../interfaces";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response): Promise<void> {
  try {
    const { name, nickname, email, password, role } = req.body

    if (!name || !nickname || !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos adequadamente")
    }

    if (!(role in USER_ROLES)) {
      res.status(422)
      throw new Error("Role deve ser 'NORMAL' ou 'ADMIN'")
    }

    const [user] = await connection("to_do_list_users")
      .where({ email })

    if (user) {
      res.statusCode = 409
      throw new Error("Email já cadastrado")
    }

    const id = new IdGenerator().generateId()

    const cipherPassword: string = new HashManager().generateHash(password)

    const signupUser = {
      id,
      name,
      nickname,
      email,
      password: cipherPassword,
      role
    }

    await connection("to_do_list_users")
      .insert(signupUser)

    const token: string = new Authenticator().generateToken({id, role})

    res.status(201).send({ signupUser, token })

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}