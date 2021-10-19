import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export async function deleteUser (req: Request, res: Response) {
  try {
    const token = req.headers.authorization

    const tokenData: any = new Authenticator().getTokenData(token as string)

    if (tokenData.role !== "ADMIN") {
      res.status(409).send("Somente usuários 'ADMIN' podem executar essa tarefa")
    }

    await connection("to_do_list_users")
      .delete()
      .where({id: req.params.id})

    res.status(200).send("Usuário deletado")

  } catch(error: any) {
    res.status(500).send(error.sqlMessage || error.Message)
  }
}