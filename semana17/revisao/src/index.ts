import app from './app'
import getAllCharacters from './endpoints/getAllCharacters'
import { createCharacter } from './endpoints/createCharacter'
import { deleteCharacter } from './endpoints/deleteCharacter'
import chalk from "chalk"

const message: string = chalk.green("Vou trabalhar na Accenture!")
console.log(message)

app.get("/character", getAllCharacters)

app.put("/character", createCharacter)

app.delete("/character/:id", deleteCharacter)