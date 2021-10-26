import { Request, Response } from "express";
import { getAllUsersBusiness } from "../business/getAllUsersBusiness";

export async function getAllUsersController(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization

    const users = await getAllUsersBusiness(token as string)

    res.status(200).send({ users })

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}