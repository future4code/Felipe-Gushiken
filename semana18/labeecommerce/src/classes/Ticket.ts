import { Product } from "./Product"

export class Ticket extends Product {
  from: string
  to: string

  constructor (
    instanceName: string,
    instanceDescription: string,
    instancePrice: number,
    instanceFrom: string,
    instanceTo: string
  ) {
    super(instanceName, instanceDescription, instancePrice)
    this.from = instanceFrom
    this.to = instanceTo
  }
}

export const newTicket = new Ticket("London-Manchester", "Flyng from London Heathrow (LHR) to Manchester (MAN).", 125, "London", "Manchester")