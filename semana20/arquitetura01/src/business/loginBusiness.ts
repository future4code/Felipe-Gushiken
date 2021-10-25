import { selectUserbyEmail } from "../data/selectUserbyEmail"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"

export async function loginBusiness(input: any): Promise<string> {
  const { email, password } = input

  if (!email || !password) {
    throw new Error("Preencha os campos adequadamente")
  }

  const [user] = await selectUserbyEmail(email)

  if (!user) {
    throw new Error("Usuário não encontrado")
  }

  const passwordIsCorrect = new HashManager().compareHash(password, user.password)

  if (!passwordIsCorrect) {
    throw new Error("Dados incorretos")
  }

  const token: string = new Authenticator().generateToken({
    id: user.id,
    role: user.role
  })

  return token
}