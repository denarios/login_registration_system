import express from "express"
import User from "../models/file.js";
const loginRoute=express.Router();
loginRoute.post("/login",(req,res)=>{
    const {email,password}=req.body;
    User.findOne({ email: email }).then((user)=>{
        if(user){
            if(user.password===password){
                res.send({message :"Login successfully",user:user})
            }
            else{
                res.send({message:"password didn't match"})
            }
        }
        else{
            res.send({message:"user not register"})
        }
    })
    .catch((err) => {
        // Handle error
        res.send("Error occurred during findOne");
    });
})
export default loginRoute;