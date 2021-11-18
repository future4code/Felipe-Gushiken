import { Request, Response } from "express";
import { deletePostBusiness } from "../business/deletePostBusiness";

export async function deletePostController (req: Request, res: Response) {
  try {
    const id = req.params.id

    const token = req.headers.authorization

    await deletePostBusiness(id, token as string)

    res.status(200).send("Post deleted")

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}