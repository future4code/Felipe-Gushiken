import app from "./app";
import { deleteUser } from "./endpoints/deleteUser";
import { getProfile } from "./endpoints/getProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import { HashManager } from "./services/HashManager";

const hash = new HashManager().generateHash("senha")

console.log(hash)

const compare = new HashManager().compareHash("senha", "$2a$12$g9t1qO.mZ9k4VVTnvIL7zeHMuMHCacH26.xmphvP1KVac8GHY0tKW")

console.log(compare)

app.post("/users/signup", signup)

app.post("/users/login", login)

app.get("/users/:id", getProfile)

app.delete("/users/:id", deleteUser)