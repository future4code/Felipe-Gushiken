import { removePost } from "../data/removePost"
import { Authenticator } from "../services/Authenticator"

export async function deletePostBusiness(id: string, token: string) {
  const tokenData = new Authenticator().getTokenData(token as string)

  if (!tokenData) {
    throw new Error("Invalid token")
  }

  const remove = await removePost(id)

  return remove
}