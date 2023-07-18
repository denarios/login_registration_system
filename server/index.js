import express from "express";
import cors from "cors"
import nodemon from "nodemon"
import DBConnection from './database/db.js';
import registrationRouter from "./routes/registration.js";
import loginRoute from "./routes/loginRoute.js";
import addProblemRoute from "./routes/addProblems.js";
import problemNameRouter from "./routes/problemname.js";
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
DBConnection();
app.use("/",loginRoute);
app.use("/",registrationRouter);
app.use("/",addProblemRoute);
app.use("/",problemNameRouter);
app.listen(8000, () => {
    console.log('server is running at port 8000');
});
