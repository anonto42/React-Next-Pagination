import { UserModel } from "../models/user.model.js"



export const login = ( req , res ) => {
    res.json({"done":"Response was successfully sent"})
}

export const newUser = async ( req , res ) => { 
    try {

        const avatar = {
            public_id: "test_public_id",
            url: "test_url"
        }

        const userDataForCreate = {
            name:"anonto",
            userName:"anonto33",
            password:"anontopass",
            avatar
        }
        
        const user = await UserModel.create( userDataForCreate )

        res
        .status(201)
        .json(
            {
                user,
                message: "User created successfully",
            }
        )

    } catch (error) {
        console.log(error.message)
    }
}