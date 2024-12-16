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

        const messages = await MessageModel.find({})
        .populate("sender", "name avatar")
        .populate("chat" , "groupChat")

        const transformedMessages = messages.map(({ content , attachments , _id , sender , createdAt , chat })=>({
            _id,
            attachments,
            content,
            createdAt,
            chat: chat._id,
            groupChat: chat.groupChat,
            sender: {
                _id: sender._id,
                name: sender.name,
                avatar: sender.avatar.url
            }
        }))

        return res
        .status(200)
        .json(
            {
                message: "Messages fetched successfully",
                data: transformedMessages
            }
        )
        
    } catch (error) {
        console.log(error.message)
    }
}

export const getDeshbordStatus = async ( req , res ) => {
    try {

       const [ groutpCount , userCount , messagesCount , totalCount ] = await Promise.all([
        ChatModel.countDocuments({groupChat:true}),
        UserModel.countDocuments(),
        MessageModel.countDocuments(),
        ChatModel.countDocuments()
       ])

       const today = new Date();

       const last7Days = new Date();
       last7Days.setDate(last7Days.getDate() - 7);

       const last7DaysMessages = await MessageModel.find({
        createdAt:{
            $gte: last7Days,
            $lte: today
        }
       })
       const day_In_Miliseconds = 1000 * 60 * 60 * 24;

       const messages = new Array(7).fill(0);

       last7DaysMessages.forEach( message => {

            const indexApprox = (today.getTime() - message.getTime() ) / day_In_Miliseconds }
    
        );

       const status = {
        groutpCount,
        userCount,
        messagesCount,
        totalCount
       }

        return res
        .status(200)
        .json(
            {
                status : status
            }
        )
        
    } catch (error) {
        console.log(error.message)
    }
}
