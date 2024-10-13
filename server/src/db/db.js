import mongoose from "mongoose";

const connectDB = async () => {
    try {

        const db = await mongoose.connect(`${process.env.DATA_BASS_URI}/${process.env.DB_NAME}`)

        console.log(`YOUR DATABASE WAS CONNECTED ON : ${db.connection.host}`)
        
    } catch (error) {
        console.log("Connection error on DB_Connection : " + error)
    }
}

export default connectDB;