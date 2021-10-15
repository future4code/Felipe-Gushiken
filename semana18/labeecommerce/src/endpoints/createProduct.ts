import { Request, Response } from "express";
import { Product } from "../classes/Product";
import connection from "../connection";

export default async function createProduct(req: Request, res: Response): Promise<void> {
  try {
    const {name, description, price} = req.body
    const newProduct = new Product(name, description, price)
    await connection("labeecommerce_products")
      .insert(newProduct)
    res.status(201).send("Product created")
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
}