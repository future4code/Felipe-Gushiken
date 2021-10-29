import { selectUserByEmail } from "../data/selectUserByEmail"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { user } from "../types"

export async function loginBusiness(input: any) {
  const { email, password } = input

  if (!email || !password) {
    throw new Error("Fill in the fields with your email and password")
  }

  const user: user = await selectUserByEmail(email)

  if (!user) {
    throw new Error("User not found")
  }

  const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

  if (!passwordIsCorrect) {
    throw new Error("Password is incorrect")
  }

  const token = new Authenticator().generateToken({ id: user.id })

  return token
}