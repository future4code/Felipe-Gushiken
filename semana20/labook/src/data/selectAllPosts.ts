import { connection } from "./connection";

export async function selectAllPosts() {
  const post = await connection("labook_posts")
    .orderByRaw(`createdAt DESC`)
  return post
}