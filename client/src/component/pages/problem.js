import React from "react"
import { useState, useEffect, Component } from "react"
import "./problem.css"
import UserData from "../../problemData.jsx"
let API = "http://localhost:8000/problem";
const Problem = () => {
  const [Users,setUsers]=useState([]);
  const fetchApiData = async(url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if(data.length>0)
      {
        setUsers(data);
      }
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(API)
  }, []);
  return (
    <div className="problem">
      <h1>Problem</h1>
      <table className="table">
        <thead>
          <tr>
          <th>Name</th>
          <th>ProblemLink</th>
          </tr>
        </thead>
        <tbody>
          <UserData Users={Users}/>
        </tbody>
      </table>
    </div>
  )
}
export default Problem;
