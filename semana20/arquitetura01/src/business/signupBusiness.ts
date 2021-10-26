import { createUser } from "../data/createUser"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export async function signupBusiness(input: any): Promise<string> {

  const { name, email, password, role } = input

  if (!name || !email || !password || !role) {
    throw new Error("Preencha os campos adequadamente")
  }

  if (password.length < 6) {
    throw new Error("A senha deve possuir 6 caracteres, no mínimo")
  }

  const id = new IdGenerator().generateId()

  const cypherPassword = new HashManager().generateHash(password)

  await createUser({
    id,
    name,
    email,
    password: cypherPassword,
    role
  })

  const token = new Authenticator().generateToken({
    id,
    role
  })

  return token

}