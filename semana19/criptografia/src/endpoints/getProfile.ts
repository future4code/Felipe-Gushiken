import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export async function getProfile (req: Request, res: Response) {
  try {
    const token = req.headers.authorization

    const tokenData: any = new Authenticator().getTokenData(token as string)

    if (tokenData.role !== "NORMAL") {
      throw new Error("Somente usuários 'NORMAL' podem acessar")
    }

    const result = await connection("to_do_list_users")
      .where({id: req.params.id})

    res.status(200).send(result)

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}