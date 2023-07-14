import React from "react"
import "./registration.css"

const Registration=()=>{
    return(
        <div className="register">
        <h1>Register</h1>
        <input type="text" placeholder="Your Name"></input>
        <input type="text" placeholder="Your Eamil"></input>
        <input type="password" placeholder="Your password"></input>
        <input type="password" placeholder="Re_enter Your password"></input>
        <div className="button">Register</div>
        <div>or</div>
        <div className="button">Login</div>
        </div>
    )
}
export default Registration;