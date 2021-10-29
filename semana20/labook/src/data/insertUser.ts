import { user } from "../types";
import { connection } from "./connection";

export async function insertUser(user: user) {
  await connection.insert({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password
  })
    .into("labook_users")

  return user
}