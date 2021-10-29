import { Request, Response } from "express";
import { getAllPostsBusiness } from "../business/getAllPostsBusiness";

export async function getAllPostsController (req: Request, res: Response) {
  try {
    const token = req.headers.authorization

    const feed = await getAllPostsBusiness(token as string)

    res.status(200).send({feed})

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}