import app from "./app";
import { deleteUserController } from "./controllers/deleteUserController";
import { getAllUsersController } from "./controllers/getAllUsersController";
import { loginController } from "./controllers/loginController";
import { signupController } from "./controllers/signupController";

app.post("/signup", signupController)

app.post("/login", loginController)

app.get("/all", getAllUsersController)

app.delete("/:id", deleteUserController)