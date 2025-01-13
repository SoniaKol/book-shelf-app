import { Signup, Login } from "../Controllers/AuthController.js";
import userVerification from "../Middlewares/AuthMiddleware.js";
import express from "express";

const authRouter = express.Router();

authRouter.post("/signup", Signup);
authRouter.post("/login", Login);
authRouter.post("/", userVerification);

export default authRouter;