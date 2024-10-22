import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import { ChatModel } from "../models/chat.model.js";
import { emitEvent } from "../utils/features.js";


export const newGroup = async ( req , res , next) => {
    try {
        const { name , member } = req.body;

        if( member.length < 2 ) return next( new Error(`Group chat must have at least 2 members`,400));

        const allMembers = [...member, req.userData._id];

        await ChatModel.create(
            {
                name,
                groupChat:true,
                creator: req.userData,
                members:allMembers
            }
        )

        emitEvent(req,ALERT,allMembers,`Welcome to ${name} group`);
        emitEvent(req,REFETCH_CHATS,member);

        return res
        .status(201)
        .json(
            {
                success: true,
                message:"Group chat was created successfully"
            }
        )
        
    } catch (error) {
        console.log(error.message)
    }
}