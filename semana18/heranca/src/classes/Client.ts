export interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;

  calculateBill: () => number;
}

export class dataClient implements Client {
  name: string
  registrationNumber: number
  consumedEnergy: number

  constructor (name: string, registrationNumber: number, consumedEnergy: number){
    this.name = name
    this.registrationNumber = registrationNumber
    this.consumedEnergy = consumedEnergy
  }

  calculateBill = () => {
    return this.consumedEnergy
  }
}

export const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}
