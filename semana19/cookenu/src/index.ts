import app from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getAnotherProfile } from "./endpoints/getAnotherProfile";
import { getOwnProfile } from "./endpoints/getOwnProfile";
import { getRecipeById } from "./endpoints/getRecipeById";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

app.post("/signup", signup)

app.post("/login", login)

app.get("/user/profile", getOwnProfile)

app.get("/user/:id", getAnotherProfile)

app.post("/recipe", createRecipe)

app.get("/recipe/:id", getRecipeById)