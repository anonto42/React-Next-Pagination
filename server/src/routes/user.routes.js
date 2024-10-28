import express from "express";
import { getUserProfile, login, logout, newUser, serchUser } from "../controllers/user.controller.js";
import { singleAvatarUpload } from "../middlewares/multer.js";
import isAuthenticated from "../middlewares/auth.js";
import { registerValidator, validate } from "../lib/validators.js";

const route = express.Router();

route.route("/login").post( login )

route.route("/logout").post( logout )

route.route("/userCreate").post( singleAvatarUpload , registerValidator() , validate , newUser )

route.route("/user").post( isAuthenticated , getUserProfile )

route.route("/serchUser").post( serchUser )

export { route }