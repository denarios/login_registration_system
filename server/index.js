import express from "express";
import cors from "cors"
import DBConnection from './database/db.js';
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
    res.send("My API register")
})
app.get("/" ,(req,res)=>{
    res.send("my api")
});
app.listen(8000, () => {
    console.log('server is running at port 8000');
});
