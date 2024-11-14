import { Schema , Types, model } from 'mongoose';

const messageSchema = new Schema({
    content:String,
    attachments:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type: String,
            requird: true
        }
    }],
    sender:{
        type:Types.ObjectId,
        ref:"User",
        required:true
    },
    chat:{
        type: Types.ObjectId,
        ref:"Chat",
        required:true
    }
},{timestamps:true});

export const MessageModel = model("Message",messageSchema);