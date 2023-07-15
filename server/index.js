import express from "express";
import cors from "cors"
// import mongoose from "mongoose";
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
    console.log(req.body);
    const {name,email,password}=req.body;
    // const result=User.findOne({email:email});
    // User.findOne().then({email:email},(err,user) =>{
    //     if(user){
    //         res.send({message :"User already exist"})
        // }else{
    const user=new User({name,email,password})
    user.save().then(()=>{
    res.send("document saved");
    })
    .catch((err)=>{
        res.send("not saved")
    })  
        // }
    // });
});
app.get("/" ,(req,res)=>{
    res.send("my api")
});
app.listen(8000, () => {
    console.log('server is running at port 8000');
});
