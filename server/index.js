import express from 'express';
import { route } from './src/routes/user.routes.js';
import dotenv from "dotenv";
import connectDB from './src/db/db.js';
import cookieParser from 'cookie-parser';
import chatRouter from './src/routes/chat.routes.js';
import AdminRoutes from './src/routes/admin.routes.js';
import { Server } from 'socket.io';
import { createServer } from "http"
import { NEW_MESSAGE } from './src/constants/events.js';

const app = express();
const server = createServer(app)
const io = new Server(server,{});

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

io.on("connection", (socket) => {
    console.log("a user connected : " , socket.id);

    socket.on(NEW_MESSAGE , () => {});


    socket.on("disconnect", (socket) => {
        console.log("user disconnected : " , socket.id);
    });
})

server.listen( port , ()=> {
    connectDB();
    console.log("your server listening the port : " , port )
})