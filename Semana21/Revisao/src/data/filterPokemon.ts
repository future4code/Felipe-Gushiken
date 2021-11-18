import { Pokemon } from "../Entities/Pokemon";
import { connection } from "./connection";

export async function filterPokemon(name: string): Promise<Pokemon> {
  const pokemonName = await connection("pokemon_go")
    .where("name", "LIKE", `%${name}%`)

  return pokemonName
}