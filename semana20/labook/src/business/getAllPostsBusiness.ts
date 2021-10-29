import { selectAllPosts } from "../data/selectAllPosts";
import { Authenticator } from "../services/Authenticator";

export async function getAllPostsBusiness(token: string) {
  const tokenData = new Authenticator().getTokenData(token)

  if (!tokenData) {
    throw new Error("Invalid token")
  }

  const posts = await selectAllPosts()

  return posts
}