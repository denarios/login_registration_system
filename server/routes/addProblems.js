import express from "express";
import Problem from "../models/problem";
const addProblemRoute=express.Router();
addProblemRoute.get("/problem",(req,res)=>{
  res.send("ALL problem")
})
export default addProblemRoute;