import { Transaction } from "./Transaction";

export class UserAccount {
  private cpf: string 
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  // public getCpf = (): string => this.cpf
  // public getName = (): string => this.name
  // public getAge = (): number => this.age

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

export const client = new UserAccount("123.456.789-12", "Felipe Gushiken", 32)