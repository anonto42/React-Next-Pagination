import mongoose, { Schema , Types, model } from 'mongoose';

const requestSchema = new Schema({
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

export const RequestModel = model("Request",requestSchema);