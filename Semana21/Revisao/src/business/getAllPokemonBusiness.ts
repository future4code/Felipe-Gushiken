import { filterPokemon } from "../data/filterPokemon"
import { getPokemonById } from "../data/getPokemonById"
import { getPokemonByType } from "../data/getPokemonByType"
import { showNPokemon } from "../data/showNPokemon"

export async function getAllPokemonBusiness (id: number, name: string, type: string) {
  let result

  if (id) {
    result = await getPokemonById(id)
  } else if (type) {
    result = await getPokemonByType(type)
  } else {
    result = await filterPokemon(name)
  }

  return result
}