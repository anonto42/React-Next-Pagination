import express from "express";
import { login } from "../controllers/user.controller.js";

const route = express.Router();

route.route("/login").get( login )


export { route }