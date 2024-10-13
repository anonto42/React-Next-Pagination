import express from "express";
import { browser } from "../controllers/user.controller.js";

export const route = express.Route();

route.route("/user").post( browser )