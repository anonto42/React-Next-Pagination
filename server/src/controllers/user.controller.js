import { compare } from "bcrypt";
import { sendToker } from "../middlewares/jwt.js";
import { UserModel } from "../models/user.model.js";

export const login = async ( req , res ) => {
    try {

        const { userName, password } = req.body;

        const user = await UserModel.findOne( { userName } ).select( " +password");

        const isMachedPass = await compare( password , user.password );
        
        if (!isMachedPass) return res.status(202).json( "Invalid password" );

        sendToker( res , user , 200 , `Welcome Back , ${ user.name } `);

    } catch (error) {
        console.log(error.message)
    }
}

export const newUser = async ( req , res ) => { 
    try {

        const { name , userName , password } = req.body;

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

        sendToker( res , user , 202 , "User created" );

    } catch (error) {
        console.log(error.message)
    };
};