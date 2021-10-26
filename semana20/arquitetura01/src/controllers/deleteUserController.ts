import { Request, Response } from "express";
import { deleteUserBusiness } from "../business/deleteUserBusiness";

export async function deleteUserController(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization

    const id = req.params.id

    await deleteUserBusiness(token as string, id)

    res.status(200).send("Usuário deletado")

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}