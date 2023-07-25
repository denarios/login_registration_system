import React from "react"
import { useState } from "react";
import axios from "axios";
const Compiler=()=>{
    const[code,setCode]=useState('');
    const[output,setOutput]=useState('');
    console.log(code);
    const handleSubmit=async()=>{
        const payload={lannguage:'cpp',code}
        try{
            const {data}=await axios.post('http://localhost:8000/run',payload);
            console.log(data);
            setOutput(data.outPut);
            console.log(output);
        }catch(error){
            console.log(error.message);
        }
    }
    return(
    <>
    <div className="compiler">
        <h1>Compiler</h1>
        <input type="text"/>
        <select className="select-box">
            <option value='cpp'></option>
        </select>
        <textarea rows ='2' cols='75' className="textarea"
        value={code}
        onChange={(e)=>{setCode(e.target.value);}}
        ></textarea>
        <br/>
        <button onClick={handleSubmit}></button>
        {output &&
         <div className='outputbox'>
            <p>{output}</p>
           </div>
        }
    </div>
        </>
    )
}
export default Compiler;