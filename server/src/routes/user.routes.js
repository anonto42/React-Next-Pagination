import express from "express";
import { login, newUser } from "../controllers/user.controller.js";

const route = express.Router();

route.route("/login").post( login )

route.route("/userCreate").post( newUser )


export { route }