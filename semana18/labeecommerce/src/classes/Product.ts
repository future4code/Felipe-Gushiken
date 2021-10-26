export class Product {
  id: string
  name: string
  description: string
  price: number

  constructor (
    instanceName: string,
    instanceDescription: string,
    instancePrice: number
  ) {
    this.id = Date.now().toString()
    this.name = instanceName
    this.description = instanceDescription
    this.price = instancePrice
    console.log("Vou ser contratado pela Accenture")
  }
}

export const newProduct = new Product("Liverpool Away Shirt 21/22", "Gear up in the same shirt as the pros with this men's Liverpool FC 2021/22 Away Shirt from Nike.", 115)