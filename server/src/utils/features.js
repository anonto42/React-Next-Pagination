
import jwt from "jsonwebtoken";
import { userSocketIDs } from "../../index.js";
import { v2 as cloudinary } from 'cloudinary';
import { v4 as uuid } from "uuid";
import { getBase64 } from "../lib/helper.js";


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

export const getSockets = async (users=[]) => {
    try {
        
        return users.map(user => userSocketIDs.get( user._id.toString()));
        
    } catch (error) {
        console.log(error.message)
    }
}

export const uploadFilesToCloudinary = async ( files = [] ) => {
    try {
        const uploadPromises = files.map((file)=>{
            return new Promise( (resolve , reject) => {
                cloudinary.uploader.upload( 
                    getBase64(file)
                    ,{
                    public_id: uuid()
                }, ( error , result ) => {
                    if(error) return reject(error);
                    resolve(result);
                })
            })
        })

        const results = await Promise.all(uploadPromises);

        const formatedResults = results.map((result)=>({
            public_id:result.public_id,
            url: result.secure_url
        }));

        return formatedResults;
    } catch (error) {
        console.log(error)
    }
}