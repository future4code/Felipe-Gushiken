import { Request, Response } from "express";
import { User } from "../classes/User";
import connection from "../connection";

export default async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const {name, email, age} = req.body
    const newUser = new User(name, email, age)
    await connection("labeecommerce_users")
      .insert(newUser)
    res.status(201).send("User created")
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
}