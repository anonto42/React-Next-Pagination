import { Router } from "express"

const router = Router()

router.route("/").post()

router.route("/verify").post()

router.route("/logout").post()

router.route("/users").post()

router.route("/chats").post()

router.route("/messages").post()

router.route("/stats").post()

export default router;