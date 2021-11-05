import { Pokemon } from "../Entities/Pokemon";
import { connection } from "./connection";

export async function getPokemonByType(type: string): Promise<Pokemon> {
  const pokemonType = connection("pokemon_go")
    .where("type1", "LIKE", `%${type}%`)

  return pokemonType
}