import express from 'express';
import { route } from './src/routes/user.routes.js';
import dotenv from "dotenv";
import connectDB from './src/db/db.js';
import cookieParser from 'cookie-parser';
import chatRouter from './src/routes/chat.routes.js';
import AdminRoutes from './src/routes/admin.routes.js';
import { Server } from 'socket.io';
import { createServer } from "http"
import { NEW_MESSAGE, NEW_MESSAGE_ALERT } from './src/constants/events.js';
import { randomUUID as uuid } from 'crypto';
import { getSockets } from './src/utils/features.js';
import { MessageModel } from './src/models/message.model.js';

const app = express();
const server = createServer(app)
const io = new Server(server,{});
const userSocketIDs = new Map();

const port = process.env.PORT || 3500;


dotenv.config({path:"./.env"});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// Routes
app.use("/api",route)
app.use("/api/chat",chatRouter)
app.use("/admin",AdminRoutes)

// Socket routes started

io.use((socket,next) => {
    
})

io.on("connection", (socket) => {
    const user = {
        name: "DJONGO",
        _id:"askdka"
    }

    userSocketIDs.set( user._id.toString(), socket.id);

    console.log("a user connected : " , userSocketIDs );

    socket.on(NEW_MESSAGE , async ({ chatId , members , messages}) => {
        
        const messageForRealTime = {
            content: messages,
            _id: uuid(),
            sender:{
             _id: user._id,
             name: user.name
            },
            chat : chatId,
            createdAt: new Date().toISOString()
        };

        const messageForDB = {
            content: messages,
            sender: user._id,
            chat : chatId,
        };

        const usersSocket = getSockets(members)

        io.to(usersSocket).emit(NEW_MESSAGE , {
            chatId,
            message: messageForRealTime
        });
        io.to(usersSocket).emit( NEW_MESSAGE_ALERT , { chatId })
        console.log("New message : " , messageForRealTime);

        await MessageModel.create(messageForDB)
    });

    socket.on("disconnect", (socket) => {
        console.log("user disconnected : " , socket.id);
        userSocketIDs.delete(user._id.toString());
    });
})

server.listen( port , ()=> {
    connectDB();
    console.log("your server listening the port : " , port )
})

export { userSocketIDs }