import { Request, Response } from 'express'
import connection from '../connection'

export async function createCharacter(req: Request, res: Response): Promise<void> {
  // characters.push({
  //   id: Date.now(),
  //   name,
  //   gender,
  //   description
  // })
  try {
    const { name, gender, description } = req.body
    await connection("character")
      .insert({ name, gender, description })
    res.status(201).end()
  } catch (error: any) {
    console.log(error)
    res.status(500).send("Error")
  }
}