import express from "express"
import Problem from "../models/problem.js"
const problemidNameRouter = express.Router();
problemidNameRouter.get("/:id", async (req, res) => {
  try {
    const post = await Problem.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
export default problemidNameRouter;
