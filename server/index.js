import express from 'express';
import { route } from './src/routes/user.routes.js';
import dotenv from "dotenv";
import connectDB from './src/db/db.js';
import cookieParser from 'cookie-parser';
import chatRouter from './src/routes/chat.routes.js';

const app = express();
const port = process.env.PORT || 3500;


dotenv.config({path:"./.env"});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// Routes
app.use("/api",route)
app.use("/api/chat",chatRouter)

app.listen( port , ()=> {
    connectDB();
    console.log("your server listening the port : " , port )
})