import express from "express"
import Problem from "../models/problem.js"
const problemNameRouter = express.Router();
problemNameRouter.get("/problem", (req, res) => {
    Problem.find({})
        .then((allProblem) => {
            if (allProblem) {
                res.send(allProblem);
            }
            else {
                res.send({ message: "no problem exist in database" });
            }
        })
        .catch((err) => {
            res.send({ message: "Error occur during finding problems" });
        })
})
export default problemNameRouter;