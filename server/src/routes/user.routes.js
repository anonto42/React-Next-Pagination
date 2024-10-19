import express from "express";
import { login, newUser } from "../controllers/user.controller.js";
import { singleAvatar } from "../middlewares/multer.middlewares.js";

const route = express.Router();

route.route("/login").post( login )

route.route("/userCreate").post( singleAvatar , newUser )


export { route }