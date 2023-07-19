import React from "react"
import { useState, useEffect, Component } from "react"
import { useParams } from "react-router-dom";
const ProblemId = () => {
    const params = useParams();
    let API = `http://localhost:8000/${params.id}`
    const [Users, setUsers] = useState([]);
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchApiData(API)
    }, []);
    return (
        <div className="ProblemId">
            <div>
                {Users.name}
            </div>
            <div>
                {Users.description}
            </div>
        </div>
    )
}
export default ProblemId;
