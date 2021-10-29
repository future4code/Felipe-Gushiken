import { connection } from "./connection";

export async function selectUserByEmail(email: string) {
  const result = await connection.where({ email })
    .into("labook_users")

  return result[0]
}