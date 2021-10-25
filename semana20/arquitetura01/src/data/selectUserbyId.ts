import { connection } from "./connection";

export const selectUserbyId = (id: string) => connection("User_Arq").where({id})