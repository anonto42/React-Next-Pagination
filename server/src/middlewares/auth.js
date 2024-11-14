import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";

const isAuthenticated = async (req, res , next) => {
    try {

        const stra_cookie = req.cookies.Stra_cookie;

        if (!stra_cookie) return next();

        const decodedToken = jwt.verify( stra_cookie , process.env.JWT_SECRET_KEY );

        if ( !decodedToken ) return res.status(404).json("Token not found")

        const user = await UserModel.findById( decodedToken._id ).select( " -password");

        req.userData = user;

        next();
        
    } catch (error) {
        console.log(error.message)
    }
}

export default isAuthenticated;