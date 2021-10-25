import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";

export async function signupController(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password, role } = req.body

    const token = await signupBusiness({ name, email, password, role })

    const newUser = ({ name, email, password, role })

    res.status(200).send({ newUser, token })

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}