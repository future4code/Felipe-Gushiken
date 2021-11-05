import { Pokemon } from "../Entities/Pokemon";
import { connection } from "./connection";

export async function getPokemonById(id: number): Promise<Pokemon> {
  const pokemonId = await connection("pokemon_go")
    .where({ id })

  return pokemonId
}