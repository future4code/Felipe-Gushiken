import { connection } from "./connection"
import pokemon from "./pokemon.json"

export async function migrations() {
  try {

    await connection.raw(`
      CREATE TABLE IF NOT EXISTS pokemon_go (
          id INT,
          name VARCHAR(150),
          pokedexNumber INT,
          imgName VARCHAR(255),
          generation INT,
          evolutionStage VARCHAR(255),
          evolved VARCHAR(255),
          familyId INT,
          crossGen INT,
          type1 VARCHAR(64),
          type2 VARCHAR(64),
          weather1 VARCHAR(64),
          weather2 VARCHAR(64),
          statTotal INT,
          atk INT,
          def INT,
          sta INT,
          legendary INT,
          aquireable INT,
          spawns INT,
          regional INT,
          raidable INT,
          hatchable INT,
          shiny INT,
          nest INT,
          newPkm INT,
          notGettable INT,
          futureEvolve INT,
          cp40 INT,
          cp39 INT
      );
    `)

    console.log("Tabela criada")

    await connection("pokemon_go")
      .insert(pokemon)

  } catch (error) {
    console.log(error)
  } finally{
    connection.destroy()
  }

}

migrations()