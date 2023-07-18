import mongoose from "mongoose";
 const ProblemSchema=new mongoose.Schema({
    name : String,
    description :String
 });
 const Problem=new mongoose.model('Problem',ProblemSchema);
 export default Problem;