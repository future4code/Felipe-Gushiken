import { Request, Response } from "express";
import { getPostByIdBusiness } from "../business/getPostByIdBusiness";

export async function getPostByIdController(req: Request, res: Response) {
  try {
    const id = req.params.id

    const token = req.headers.authorization

    const post = await getPostByIdBusiness(id, token as string)

    res.status(200).send(post)
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}