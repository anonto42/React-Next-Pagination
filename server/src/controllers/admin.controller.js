import { UserModel } from "../models/user.model.js"
import { ChatModel } from '../models/chat.model.js';
import { MessageModel } from '../models/message.model.js';


export const allUsers = async (req, res, next) => {
    try {

        const users = await UserModel.find({})

        const transFromUser = await Promise.all(

            users.map( async ({ name , username , avatar , _id }) => {

                const [ groups , friends ] = await Promise.all(
                    [
                        ChatModel.countDocuments(
                            {
                                groupChat: true,
                                members: _id
                            }
                        ),
                        ChatModel.countDocuments(
                            {
                                groupChat: false,
                                members: _id
                            }
                        )
                    ]
                )
                return {
                    name,
                    username,
                    avatar:avatar.url,
                    _id,
                    groups,
                    friends
                }
            })
        )

        return res
        .status(200)
        .json(
            {
                users: transFromUser
            }
        )
        
    } catch (error) {
        console.log(error.message)
    }
}

export const allChats = async ( req , res ) =>  {
    try {
        const chats = await ChatModel.find({})
        .populate( "members" , "name avatar")
        .populate("creator", "name avatar")

        const transfromChats = await Promise.all(

            chats.map( async ( { members , _id , groupChat , name , creator} )=> {

                const totaMessages = await MessageModel.countDocuments({chat:_id})
                return {
                    _id , 
                    groupChat,
                    name,
                    avatar : members.slice(0,3).map( m => m.avatar.url ),
                    members : members.map(({ _id , name , avatar })=> ({
                        _id,
                        name,
                        avatar: avatar.url
                    })),
                    creator : {
                        name : creator?.name || "None",
                        avatar : creator?.avatar?.url || ""
                    },
                    totalMembers : members.length,
                    totalMessages: totaMessages
                }
            })
        )

        return res
        .status(200)
        .json(
            {
                chats : transfromChats
            }
        )
        
    } catch (error) {
        console.log(error.message)
    }
}

export const messages = async ( req , res ) => {
    try {

        return res
        .status(200)
        .json(
            {
                message: "Messages fetched successfully"
            }
        )
        
    } catch (error) {
        console.log(error.message)
    }
}
