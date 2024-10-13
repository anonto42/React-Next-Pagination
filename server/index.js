import express from 'express';
import { route } from './src/routes/user.routes.js';
import dotenv from "dotenv";
import connectDB from './src/db/db.js';

const app = express();


dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",route)

app.listen( process.env.PORT , ()=> {
    connectDB();
    console.log("your server listening the port : " , process.env.PORT)
})