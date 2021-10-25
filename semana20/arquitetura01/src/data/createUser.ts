import { user } from "../interfaces";
import { connection } from "./connection";

export const createUser = (user: user) => connection("User_Arq").insert(user)

// OUTRO JEITO:
// export async function createUser(user: user) {

//   await connection
//     .insert({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       password: user.password,
//       role: user.role
//     })
//     .into("User_Arq")
// }
