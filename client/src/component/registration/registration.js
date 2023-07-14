import React,{useState} from "react"
import "./registration.css"
const Registration=()=>{
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterpassword:""
    });
    const handleChange=e=>{
        const{name,value}=e.target;
        console.log(name,value);
        setUser({
            ...user,
            [name]:value
        })
    }
    return(
        <div className="register">
         {console.log("user",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} ></input>
        <input type="text" name="email" value ={user.email} placeholder="Your Eamil" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Your password" onChange={handleChange} ></input>
        <input type="password" name="reEnterpassword" value={user.reEnterpassword} placeholder="Re_enter Your password" onChange={handleChange}></input>
        <div className="button">Register</div>
        <div>or</div>
        <div className="button">Login</div>
        </div>
    )
}
export default Registration;