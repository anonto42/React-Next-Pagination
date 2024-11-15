import { UserModel } from "../models/user.model.js"


export const allUsers = async (req, res, next) => {
    try {

        const users = await UserModel.find(
            {

            }
        )

        return res
        .status(200)
        .json(
            users
        )
        
    } catch (error) {
        console.log(error)
    }
}