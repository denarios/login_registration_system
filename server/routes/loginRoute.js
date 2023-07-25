import express from "express"
import User from "../models/file.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const SECERET_KEY="NOTESAPI"
const loginRoute=express.Router();
loginRoute.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const existingUser=await User.findOne({email:email});
        console.log(existingUser);
        if(!existingUser){
           return  res.status(404).json({message:"User Not Found"})
        }
       const matchPassword=await bcrypt.compare(password,existingUser.password);
       if(!matchPassword)
       {
        return res.status(404).json({message:"Invalid credintail"});
       }
       const token=jwt.sign({email:existingUser.email,id:existingUser._id},SECERET_KEY)
       res.status(201).json({user:existingUser,token:token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went word in Login route"});
    }
})
export default loginRoute;