import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export async function getOwnProfile(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization

    const tokenData = new Authenticator().getTokenData(token as string)

    if (!tokenData) {
      res.statusCode = 401
      throw new Error("Token inválido")
    }

    // const showProfile = await connection.raw(`
    //   SELECT id, name, email FROM cookenu_users
    //   WHERE ${tokenData.id}
    // `)

    const showProfile = await connection("cookenu_users")
      .select("id", "name", "email")
      .where({id: tokenData.id})

    res.status(200).send({showProfile})

  } catch (error: any) {
    res.status(500).send({message: error.sqlMessage || error.message})
  }
}