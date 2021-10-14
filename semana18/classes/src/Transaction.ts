// EXERCÍCIO 02

export type Transaction = {
  description: string,
  value: number,
  date: string
}

export class transaction {
  private description: string
  private value: number
  private date: string

  public getDescription = (): string => this.description
  public getValue = (): number => this.value
  public getDate = (): string => this.date

  constructor(description: string, value: number, date: string){
    this.description = description
    this.value = value
    this.date = date
  }
}

const 