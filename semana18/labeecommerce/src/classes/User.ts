export class User{
  id: string = ""
  name: string = ""
  email: string = ""
  age: number = 32

  constructor(
    instanceName: string,
    instanceEmail: string,
    instanceAge: number
  ) {
    this.id = Date.now().toString()
    this.name = instanceName
    this.email = instanceEmail
    this.age = instanceAge
    console.log("Vou trabalhar na Accenture")
  }
}

export const newUser = new User("Felipe Gushiken", "fe@mail.com", 32)