import { PostCreateBusiness } from "./business/PostCreateBusiness";
import { app } from "./controller/app";
import { GetPostController } from "./controller/GetPostController";
import { PostCreateController } from "./controller/PostCreateController";
import {UserCreateController} from "./controller/UserCreateController"
import { UserLoginController } from "./controller/UserLoginController";

const userController = new UserCreateController()
const userLoginController = new UserLoginController()
const postcreateController = new PostCreateController()
const getpostController = new GetPostController()


app.post('/signup', userController.signup)

app.post('/login', userLoginController.login)

app.post('/post', postcreateController.createPost)

app.get('/post/:id', getpostController.getPost)