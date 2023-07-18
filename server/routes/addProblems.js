import express from "express";
import Problem from "../models/problem.js";
const addProblemRoute=express.Router();
addProblemRoute.post("/addproblem",(req,res)=>{
  const { name, description } = req.body;
  Problem.findOne({ name:name })
  .then((problem)=>{
    console.log(problem);
    if(problem){
      res.send({message:"problem already exist"});
    }else{
      const newProblem = new Problem({ name, description});
      newProblem.save()
      .then(()=>{
        res.send({message:"problem saved"});
      })
      .catch((err)=>{
        res.send({message:"Not saved"});
      })
    }
  })
  .catch((err)=>{
    res.send({message:"Error occured durind findingOne"})
  })
})
export default addProblemRoute;