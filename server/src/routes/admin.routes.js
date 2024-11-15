import { Router } from "express"
import { allUsers } from "../controllers/admin.controller.js"

const router = Router()

router.route("/").post()

router.route("/verify").post()

router.route("/logout").post()

router.route("/users").post(allUsers)

router.route("/chats").post()

router.route("/messages").post()

router.route("/stats").post()

export default router;