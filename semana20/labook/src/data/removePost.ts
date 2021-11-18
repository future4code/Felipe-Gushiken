import { connection } from "./connection";

export async function removePost(id: string) {
  await connection("labook_posts")
    .delete()
    .where({id})
}