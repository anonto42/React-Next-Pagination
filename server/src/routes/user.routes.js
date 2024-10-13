import express from "express";
import { browser } from "../controllers/user.controller.js";

const route = express.Router();

route.route("/user").get( browser )


export { route }