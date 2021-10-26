import { connection } from "./connection";

export const selectUserbyEmail = (email: string) => connection("User_Arq").where({email})