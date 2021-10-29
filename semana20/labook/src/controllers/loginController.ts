import { Request, Response } from "express";
import { loginBusiness } from "../business/loginBusiness";

export async function loginController(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body

    const token = await loginBusiness({ email, password })

    res.status(200).send({ token })

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}