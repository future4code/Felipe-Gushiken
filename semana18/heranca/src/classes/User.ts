// EXERCÍCIO 01

export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
    console.log(`O id do user é ${this.id}.`)
		return this.id
	}

	public getEmail(): string {
    console.log(`O e-mail do ${this.name} é ${this.email}.`)
		return this.email
	}

	public getName(): string {
    console.log(`O nome do user é ${this.name}.`)
		return this.name
	}

  public introduceYourself(): string {
    return `Olá, meu nome é ${this.name}. Boa noite!`
  }
}
