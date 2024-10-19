import express from "express";
import { login, newUser } from "../controllers/user.controller.js";
import { singleAvatarUpload } from "../middlewares/multer.js";

const route = express.Router();

route.route("/login").post( login )

route.route("/userCreate").post( singleAvatarUpload , newUser )


export { route }