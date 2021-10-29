import { insertPost } from "../data/insertPost"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export async function createPostBusiness(input:any, token: string) {
  const { photo, description, type } = input

  if (!photo || !description || !type) {
    throw new Error("Fill in all the fields")
  }

  const tokenData = new Authenticator().getTokenData(token)

  if (!tokenData) {
    throw new Error("Invalid token")
  }

  const id = new IdGenerator().generateId()

  const createdAt = new Date()

  const authorId = tokenData.id

  const newPost = await insertPost({ id, photo, description, type, createdAt, authorId })

  return ({newPost})
}