import Exx from "express";
import isAuthenticated from './../middlewares/auth.js';
import { addMembers, myChat, myGroupChat, newGroup } from "../controllers/chat.controller.js";

const chatRouter = Exx.Router();

chatRouter.use(isAuthenticated)

chatRouter.route("/new").post( newGroup )

chatRouter.route("/my").post( myChat )

chatRouter.route("/my/groups").post( myGroupChat )

chatRouter.route("/add").post( addMembers )


export default chatRouter;