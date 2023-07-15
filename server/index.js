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
app.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,password}=req.body;
    User.findOne({ email: email })
    .then((user) => {
        console.log(user);
        if (user) {
            res.send({ message: "User already exists" });
        } else {
            const newUser = new User({ name, email, password });
            newUser.save()
                .then(() => {
                    res.send("Document saved");
                })
                .catch((err) => {
                    res.send("Not saved");
                });
        }
    })
    .catch((err) => {
        // Handle error
        res.send("Error occurred during findOne");
    });
    // const user=new User({name,email,password})
    // const person=await User.findOne({email:email});
    // if(person===null)
    // {
    //    await user.save();
    //    res.send({message :"user data is saved in"})
    // }
    // else{
    //     res.send({message :"user already exist"});
    // }
});
app.get("/" ,(req,res)=>{
    res.send("my api")
});
app.listen(8000, () => {
    console.log('server is running at port 8000');
});
