import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.statusCode = 401
      throw new Error("Preencha os campos adequadamente")
    }
    
    const [user] = await connection("cookenu_users")
    .where({ email })

    const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

    if (!user || !passwordIsCorrect) {
      req.statusCode = 401
      throw new Error("Dados inválidos")
    }

    const token = new Authenticator().generateToken({id: user.id})

    res.send({token})

  } catch (error: any) {
    res.status(500).send({ message: error.sqlMessage || error.message })
  }
}