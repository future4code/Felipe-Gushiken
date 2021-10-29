import app from "./app"
import { createPostController } from "./controllers/createPostController"
import { deletePostController } from "./controllers/deletePostController"
import { getAllPostsController } from "./controllers/getAllPostsController"
import { getPostByIdController } from "./controllers/getPostByIdController"
import { loginController } from "./controllers/loginController"
import { signupController } from "./controllers/signupController"

app.post("/user/signup", signupController)

app.post("/user/login", loginController)

app.post("/post/create", createPostController)

app.get("/post/feed", getAllPostsController)

app.get("/post/:id", getPostByIdController)

app.delete("/post/:id", deletePostController)

console.log("Hello World")