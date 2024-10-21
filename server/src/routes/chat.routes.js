import Exx from "express";

const chatRouter = Exx.Router();

chatRouter.route("/chat").get((req,res)=>{
    res.json({message:"chat api"})
})


export default chatRouter;