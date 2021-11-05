import { Request, Response } from "express";
import { getAllPokemonBusiness } from "../business/getAllPokemonBusiness";

export async function getAllPokemonController(req: Request, res: Response): Promise<void> {
  try {

    const id = Number(req.query.id)
    const name = req.query.name || "%"
    const type = req.query.type

    const result = await getAllPokemonBusiness(id, name as string, type as string)

    res.status(200).send(result)

  } catch (error: any) {
    res.status(500).send("Error")
  }

}