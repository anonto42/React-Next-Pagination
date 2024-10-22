import Exx from "express";
import isAuthenticated from './../middlewares/auth.js';
import { newGroup } from "../controllers/chat.controller.js";

const chatRouter = Exx.Router();

chatRouter.use(isAuthenticated)

chatRouter.route("/new").post( newGroup )


export default chatRouter;