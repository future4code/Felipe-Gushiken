import { connection } from "../data/connection";
import { selectUserbyId } from "../data/selectUserbyId";
import { Authenticator } from "../services/Authenticator";

export async function deleteUserBusiness(token: string, input: any) {

  const tokenData = new Authenticator().getTokenData(token as string)

  if (!tokenData) {
    throw new Error("Token inválido, expirado ou ausente")
  }

  if (tokenData.role !== "ADMIN") {
    throw new Error("Apenas usuários ADMIN podem realizar esta tarefa")
  }

  const user = await connection("User_Arq")
    .delete()
    .where({ id: input })

  return user
}