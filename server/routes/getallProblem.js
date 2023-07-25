import express from "express"
import AllProblems from "../models/allProblem.js";
const allProblemRoute=express.Router();
allProblemRoute.get("/allproblem",async(req,res)=>{
    console.log(req.userId);
    res.send(AllProblems);
})
export default allProblemRoute;
