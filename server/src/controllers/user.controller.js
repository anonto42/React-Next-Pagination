import { UserModel } from "../models/user.model.js";
import { sendRespons } from "../utils/features.js";

export const login = async ( req , res ) => {
    try {

        const { userName, password } = req.body;

        const user = await UserModel.findOne( { userName } );

        if (!user) return res.status(404).json( "User not mached" )
        
        const passwordCorrect = await user.isPasswordCorrect( password );

        if (!passwordCorrect) return res.status(202).json( "Invalid password" );

        sendRespons( res , user , 200 , `Welcome Back , ${ user.name } `);

    } catch (error) {
        console.log(error.message)
    }
}

export const logout = async ( req , res ) => {
    try {

        const option = {
            maxAge : 0,
            sameSite : "none",
            httpOnly: true,
            secure:true
        }

        return res
        .status(200)
        .cookie("Stra_cookie","",option)
        .json(
            {
                message : "Logout successfull",
            }
        )

    } catch (error) {
        console.log(error.message)
    }
}

export const newUser = async ( req , res ) => { 
    try {

        const { name , userName , password } = req.body;
        
        if( !name || !userName || !password ) return res.status(404).json({message:"All fields must be provided"})
            
        const avatar = {
            public_id: "test_public_id",
            url: "test_url"
        };


        const userDataForCreate = {
            name,
            userName,
            password,
            avatar
        };

        const userFunded = await UserModel.findOne( { userName } );

        if ( userFunded ) return res.json( "user was arial exid" );
        
        const user = await UserModel.create( userDataForCreate );

        if ( !user ) return res.json( "user was not created" );

        sendRespons( res , user , 202 , "User created" );

    } catch (error) {
        console.log(error.message)
    };
};

export const getUserProfile = async (req, res) => { 
    try {
        const user =  req.userData;
        
        if (!user) return res.status(404).json( "User not excited" );

        return res
        .status(200)
        .json(user);

    } catch (error) {
        console.log(error.message)
    }
}

export const serchUser = async ( req , res ) => {
    try {

        const { name } = req.query;



        return res
        .status(200)
        .json(
            name
        )

    } catch (error) {
        console.log(error.message)
    }
}