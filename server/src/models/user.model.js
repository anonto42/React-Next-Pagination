import { Schema , model } from 'mongoose';
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name:{
        type:String,
        requird:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type: String,
        default:""
    }
},{timestamps:true});

userSchema.pre("save" , async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash( this.password , 5 );

    next();
})

userSchema.methods.isPasswordCorrect = async function (pass) {
    return await bcrypt.compare( pass , this.password )
}

export const UserModel = model("User",userSchema);