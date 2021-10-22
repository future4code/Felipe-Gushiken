import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export async function getRecipeById (req: Request, res: Response) {
  try {
    const token = req.headers.authorization

    const tokenData = new Authenticator().getTokenData(token as string)

    if (!tokenData) {
      res.statusCode = 401
      throw new Error("Token inválido")
    }

    const recipes = await connection("cookenu_recipes")
      .where({id: req.params.id})

     res.status(200).send({recipes}) 

  } catch (error: any) {
    res.status(500).send({message: error.sqlMessage || error.message})
  }
}