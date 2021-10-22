import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export async function createRecipe(req: Request, res: Response) {
  try {
    const token = req.headers.authorization

    const tokenData = new Authenticator().getTokenData(token as string)

    if (!tokenData) {
      res.statusCode = 401
      throw new Error("Token inválido")
    }

    const { title, method } = req.body

    if (!title || !method) {
      res.statusCode = 401
      throw new Error("Preencha os campos adequadamente")
    }

    const id = new IdGenerator().generateId()

    const createdOn = new Date()

    const newRecipe = ({ id, title, method, createdOn })

    await connection("cookenu_recipes")
      .insert( newRecipe )
      .where({ id: tokenData.id })

    res.status(201).send({newRecipe})

  } catch (error: any) {
    res.status(500).send({ message: error.sqlMessage || error.message })
  }
}