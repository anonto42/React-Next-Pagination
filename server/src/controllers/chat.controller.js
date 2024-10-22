import { ChatModel } from "../models/chat.model.js";
import { emitEvent } from "../utils/features.js";


export const newGroup = async ( req , res , next) => {
    try {
        const { name , member } = req.body;

        if( member.length < 2 ) return next( new Error(`Group chat must have at least 2 members`,400));

        const allMembers = [...member, req.userData];

        await ChatModel.create(
            {
                name,
                groupChat:true,
                creator: req.userData,
                members:allMembers
            }
        )

        emitEvent(req)
        
    } catch (error) {
        console.log(error.message)
    }
}