import { post } from "../types";
import { connection } from "./connection";

export async function insertPost(post: post) {
  await connection("labook_posts")
    .insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      createdAt: post.createdAt,
      authorId: post.authorId
    })
  return post
}