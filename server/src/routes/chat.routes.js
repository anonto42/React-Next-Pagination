import Exx from "express";
import isAuthenticated from './../middlewares/auth.js';
import { addMembers, deleteGroup, getChatDetails, getMessages, leaveGroup, myChat, myGroupChat, newGroup, removeMember, renameGroup, sendAttachment } from "../controllers/chat.controller.js";
import { attachmentsMulter } from "../middlewares/multer.js";

const chatRouter = Exx.Router();

chatRouter.use(isAuthenticated)

chatRouter.route("/new").post( newGroup )

chatRouter.route("/my").get( myChat )

chatRouter.route("/my/groups").post( myGroupChat )

chatRouter.route("/add").post( addMembers )

chatRouter.route("/remove").post( removeMember )

chatRouter.route("/leave/:id").post( leaveGroup )

chatRouter.route("/message").post( attachmentsMulter , sendAttachment )

chatRouter.route("/message/:id").get( getMessages )

chatRouter.route("/:id").get( getChatDetails ).put( renameGroup ).delete( deleteGroup )

export default chatRouter;