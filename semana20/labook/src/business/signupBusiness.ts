import { insertUser } from "../data/insertUser"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { user } from "../types"

export async function signupBusiness(input: any) {
  const { name, email, password } = input

  if (!name || !email || !password) {
    throw new Error("Fill in the fields with your name, email and password")
  }

  if (password.length < 6) {
    throw new Error("Password must have, at least, 6 characters")
  }

  const id = new IdGenerator().generateId()

  const cipherText = new HashManager().generateHash(password)

  const token = new Authenticator().generateToken({ id })

  const newUser: user = await insertUser({ id, name, email, password: cipherText })

  return ({ newUser, token })
}