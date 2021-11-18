import { connection } from "./connection";

export async function selectPostById(id: string) {
  const post = await connection("labook_posts")
    .where({ id })

  return post
}