import { ChatModel } from "../models/chat.model.js";
import { RequestModel } from "../models/request.model.js";
import { UserModel } from "../models/user.model.js";
import { emitEvent, sendRespons } from "../utils/features.js";
import { NEW_REQUEST, REFETCH_CHATS } from './../constants/events.js';

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
            url: "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
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

        const { name="" } = req.query;

        if ( !name ) return res.status(404).json( "Plese enter name" )

        const myChats = await ChatModel.find(
            {
                members: req.userData._id,
                groupChat: false
            }
        )

        const allUsersFromMyChats = myChats.flatMap( chats => chats.members )

        const allUsersExceptMyChats = await UserModel.find(
            {
                _id: {
                    $nin: allUsersFromMyChats
                },
                name:{
                    $regex: name,
                    $options: "i"
                }
            }
        )

        const users = allUsersExceptMyChats.map(({_id,name,avatar})=>(
            {
                _id,
                name,
                avatar: avatar.url
            }
        ))

        return res
        .status(200)
        .json(
            allUsersFromMyChats
        )

    } catch (error) {
        console.log(error.message)
    }
}

export const sendFriendRequest = async (req, res) =>{
    try {

        const { userId } = req.body;

        if ( !userId ) return res.status(404).json({message:"Please enter a user"})

        const request = await RequestModel.findOne(
            {
                $or: [
                    { 
                        sender: req.userData._id,
                        receiver: userId
                    },
                    {
                        sender: userId,
                        receiver: req.userData._id
                    }
                ]
            }
        )

        if(request) return res.status(404).json({message:"You already sent a friend request"})

        await RequestModel.create(
            {
                sender: req.userData._id,
                receiver: userId
            }
        )

        emitEvent( req , NEW_REQUEST , [userId] )

        return res
        .status(200)
        .json(
            {
                message: "Friend request sent successfully"
            }
        )
        
    } catch (error) {
        console.log(error.message)
    }
}

export const acceptRequest = async (req, res) => {
    try {

        const { requestId , accept } = req.body;

        if ( !requestId || !accept ) return res.status(404).json({ message:"All fields must be provided" })

        const request = await RequestModel.findById( requestId )
        .populate("sender" , "name")
        .populate("receiver" , "name")

        if (!request ) return res.status(404).json({ message:"Request not found" })

        if ( request.receiver !== req.userData._id ) return res.status(400).json({ message:"You are not authorize to accept this request" })

        if ( !accept ) {
            await request.deleteOne()

            return res
                .status(200)
                .json(
                        {
                            message: "Friend request rejected successfully"
                        }
                    )
        }

        const members = [ request.sender._id , request.receiver._id ]

        await Promise.all(
            [
                ChatModel.create(
                    {
                        members,
                        name:`${request.sender.name}-${request.receiver.name}`
                    }
                ),
                request.deleteOne()
            ]
        )

        emitEvent( req, REFETCH_CHATS , members )

        return res
        .status(200)
        .json(
            {
                message: "Friend request accepted successfully",
                sender_ID: request.sender._id
            }
        )
        
    } catch (error) {
        console.log(error.message)
    }
}