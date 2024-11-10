import express from "express";
import { acceptRequest, getAllNotifications, getUserProfile, login, logout, newUser, sendFriendRequest, serchUser } from "../controllers/user.controller.js";
import { singleAvatarUpload } from "../middlewares/multer.js";
import isAuthenticated from "../middlewares/auth.js";

const route = express.Router();

route.route("/login").post( login )

route.route("/logout").post( logout )

route.route("/userCreate").post( singleAvatarUpload , newUser )

route.route("/user").post( isAuthenticated , getUserProfile )

route.route("/serchUser").post( isAuthenticated , serchUser )

route.route("/sendRequest").post( isAuthenticated , sendFriendRequest )

route.route("/accept-Request").post( isAuthenticated , acceptRequest )

route.route("/allNotifications").post( isAuthenticated , getAllNotifications )

export { route }