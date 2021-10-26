import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export async function login (req: Request, res: Response): Promise<void> {
  try {
    const {email, password} = req.body

    const [user] = await connection("to_do_list_users")
      .where({email})

    const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

    if (!user || !passwordIsCorrect) {
      res.status(401).send("Unauthorized")
    }

    const token = new Authenticator().generateToken({id: user.id, role: user.role})

    res.send({token})

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}