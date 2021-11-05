import app from "./app";
import { getAllPokemonController } from "./controllers/getAllPokemonController";

app.get("/pokemon", getAllPokemonController)