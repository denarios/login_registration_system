import mongoose from "mongoose";
 const problemSchema=new mongoose.Schema({
    name : String,
    description :String
 });
 const Problem=new mongoose.model('Problem',problemSchema);
 export default Problem;