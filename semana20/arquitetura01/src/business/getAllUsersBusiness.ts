import { connection } from "../data/connection"
import { Authenticator } from "../services/Authenticator"

export async function getAllUsersBusiness(token: string) {

  const tokenData = new Authenticator().getTokenData(token as string)

  if (!tokenData) {
    throw new Error("Token inválido, expirado ou ausente")
  }

  const result = await connection("User_Arq")

  return result
}