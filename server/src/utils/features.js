
import jwt from "jsonwebtoken";


export const option = {
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
    .cookie( "Stra_cookie" ,token , option )
    .json( { 
        success: true,
        token,
        message,
        user
    })
}

export const emitEvent = (req,event,users,data) => {
    try {
        console.log("Emitting event ", event );
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteFilesFromCloudinary = async (public_ids) => {
    try {
        
    } catch (error) {
        console.log(error.message)
    }
}