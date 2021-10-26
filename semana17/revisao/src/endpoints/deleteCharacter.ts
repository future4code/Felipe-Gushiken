import { Request, Response } from "express";
import connection from "../connection";

export async function deleteCharacter(req: Request, res: Response): Promise<void> {
  // const index: number = characters.findIndex(
  //   character => character.id === id
  // )
  // if (index > -1) characters.splice(index, 1)
  try {
    const id = Number(req.params.id)
    await connection("character")
      .delete()
      .where({ id })
    res.status(200).end()
  } catch (error: any) {
    console.log(error)
    res.status(500).send("Error")
  }
}