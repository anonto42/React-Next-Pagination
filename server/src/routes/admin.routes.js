import { Router } from "express"
import { adminLogin, adminLogOut, allChats, allUsers, getDeshbordStatus, messages } from "../controllers/admin.controller.js"

const router = Router()

const adminOnly = ( req, res , next ) => {
    try {

        const token = req.cookies("message_admin_token");

        if( !token ) return res.status(401).json({message: "Only admin users are allowed to access"})
        
        const adminID = jwt.verify(token , process.env.JWT_SECRET_KEY);
        const adminSecretKey = process.env.ADMIN_SECRET_KEY;

        const isMached = adminID === adminSecretKey

        if (!isMached ) return res.status(401).json({message: "Invalid admin token"})
            
        next()
        
    } catch (error) {
        console.log(error.message)
    }
}


router.route("/verify").post( adminLogin )

router.route("/logout").post( adminLogOut )

router.use(adminOnly())

router.route("/").post()

router.route("/users").post(allUsers)

router.route("/chats").post(allChats)

router.route("/messages").post(messages)

router.route("/stats").post(getDeshbordStatus)

export default router;