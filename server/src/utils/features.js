
import jwt from "jsonwebtoken";


const option = {
    maxAge : 15 * 24 * 60 * 60 * 1000,
    sameSite : "none",
    httpOnly: true,
    secure:true
}

export const sendRespons = ( res , user , code , message ) => {
    const token = jwt.sign( 
        { _id: user._id },
        process.env.JWT_SECRET_KEY
    ) ;
    return res 
    .status(code)
    .cookie( "chat-app" ,token , option )
    .json( { 
        success: true,
        token,
        message,
        user
    })
}