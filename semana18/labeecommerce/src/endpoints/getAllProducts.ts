import { Request, Response } from "express";
import connection from "../connection";

export default async function getAllProducts(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection("labeecommerce_products")
    res.send(result)
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
}