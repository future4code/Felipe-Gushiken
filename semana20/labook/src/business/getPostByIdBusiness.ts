import { selectPostById } from "../data/selectPostById"
import { Authenticator } from "../services/Authenticator"

export async function getPostByIdBusiness(id: string, token: string) {
  const tokenData = new Authenticator().getTokenData(token as string)

  if (!tokenData) {
    throw new Error("Invalid token")
  }

  const post = await selectPostById(id)

  return post
}