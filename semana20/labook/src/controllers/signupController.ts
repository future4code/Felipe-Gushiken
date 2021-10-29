import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";

export async function signupController(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password } = req.body

    const token = await signupBusiness({ name, email, password })

    res.status(201).send(token)

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}