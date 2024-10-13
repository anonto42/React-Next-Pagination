import express from 'express';
import { route } from './src/routes/user.routes.js';

const app = express();

app.use(express.json({}))

app.use("/",route)

app.listen( process.env.PORT , ()=> {
    console.log("your server listening the port : " , process.env.PORT)
})