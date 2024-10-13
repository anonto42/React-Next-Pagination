import { Schema , model } from 'mongoose';

const chatSchema = new Schema({
    name:{
        type:String,
        requird:true
    },
    groupChat:{
        type:String,
        default:false
    },
    creator:{
        type: Types.ObjectId,
        ref:"User"
    },
    members:[
        {
            type: Types.ObjectId,
            ref:"User"
        }
    ]
},{timestamps:true});

export const ChatModel = model("Chat",chatSchema);