import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import DBConnection from './database/db.js';
import User from "./models/file.js";
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
DBConnection();
//routes
app.post("/login",(req,res)=>{
    res.send("My API login")
})
app.post("/register",(req,res)=>{
    const {name,email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already register"})
        }
    })
    console.log(req.body);
    const user=new User({
        name,
        email,
        password
    })
    user.save(err=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Successfully Register"})
        }
    })
})
app.get("/" ,(req,res)=>{
    res.send("my api")
});
app.listen(8000, () => {
    console.log('server is running at port 8000');
});
