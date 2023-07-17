import React,{useState} from "react"
import "./registration.css"
import axios from "axios"
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
    const register=()=>{
        const {name,email,password,reEnterpassword}=user
        if(name && email && password===reEnterpassword){
            alert("posted")
            axios.post("http://localhost:8000/register",user).then(res=>alert(res.send.message));
        }else{
            alert("invalid input")
        }
    }
    return(
        <div className="register">
         {console.log("user",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} ></input>
        <input type="text" name="email" value ={user.email} placeholder="Your Eamil" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Your password" onChange={handleChange} ></input>
        <input type="password" name="reEnterpassword" value={user.reEnterpassword} placeholder="Re_enter Your password" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button">Login</div>
        </div>
    )
}
export default Registration;