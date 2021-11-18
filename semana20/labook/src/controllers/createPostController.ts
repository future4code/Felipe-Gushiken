import { Request, Response } from "express";
import { createPostBusiness } from "../business/createPostBusiness";

export async function createPostController(req: Request, res: Response): Promise<void> {
  try {
    const { photo, description, type } = req.body

    const token = req.headers.authorization

    const newPost = await createPostBusiness({ photo, description, type }, token as string)

    res.status(201).send({newPost})

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}