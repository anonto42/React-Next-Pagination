import { Router } from "express"
import { allChats, allUsers, getDeshbordStatus, messages } from "../controllers/admin.controller.js"

const router = Router()

router.route("/").post()

router.route("/verify").post()

router.route("/logout").post()

router.route("/users").post(allUsers)

router.route("/chats").post(allChats)

router.route("/messages").post(messages)

router.route("/stats").post(getDeshbordStatus)

export default router;