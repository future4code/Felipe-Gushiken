import { connection } from "./connection";

export async function showNPokemon() {
  await connection("pokemon_go").limit(10)
}