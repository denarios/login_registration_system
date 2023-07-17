import express from "express"
import User from "../models/file.js";
const registrationRouter=express.Router();
registrationRouter.post("/register",(req, res) => {
    const { name, email, password } = req.body;
    // console.log(req.body);
    User.findOne({ email: email })
        .then((user) => {
            console.log(user);
            if (user) {
                res.send({ message: "User already exists" });
            } else {
                const newUser = new User({ name, email, password });
                newUser.save()
                    .then(() => {
                        res.send({message:"Document saved"});
                    })
                    .catch((err) => {
                        res.send({message:"Not saved"});
                    });
            }
        })
        .catch((err) => {
            // Handle error
            res.send({message:"Error occurred during findOne"});
        });
})
export default registrationRouter;